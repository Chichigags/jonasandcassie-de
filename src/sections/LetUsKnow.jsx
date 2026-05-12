import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Reveal } from '../components/Reveal'
import { RsvpSuccessNote } from './RsvpSuccessNote'

const FORMSPREE_ACTION = 'https://formspree.io/f/xvzldrop'

const fieldClass =
  'w-full rounded-none border-0 border-b border-ocean/[0.09] bg-transparent px-0 py-2.5 font-sans text-[0.98rem] text-charcoal outline-none transition-[border-color,color] duration-300 placeholder:text-navy/32 focus:border-ocean/25 focus:ring-0 md:text-[1.02rem]'
const textareaClass = `${fieldClass} mt-2 w-full resize-none min-h-[2.75rem] max-h-[14rem] overflow-y-auto leading-[1.72]`
const labelClass =
  'block font-sans text-[0.98rem] font-normal leading-[1.78] text-navy-soft md:text-[1.02rem] md:leading-[1.82]'

/**
 * RSVP — warm ivory field; quiet form; editorial capsule button.
 */
export function LetUsKnow() {
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [successLeaving, setSuccessLeaving] = useState(false)
  const finishDismissRef = useRef(null)

  const dismissSuccessModal = useCallback(() => {
    if (finishDismissRef.current) {
      window.clearTimeout(finishDismissRef.current)
      finishDismissRef.current = null
    }
    setSuccessLeaving(true)
    finishDismissRef.current = window.setTimeout(() => {
      setStatus('idle')
      setSuccessLeaving(false)
      finishDismissRef.current = null
    }, 480)
  }, [])

  useEffect(() => {
    if (status !== 'success') {
      document.body.style.overflow = ''
      return undefined
    }

    document.body.style.overflow = 'hidden'

    return () => {
      if (finishDismissRef.current) {
        window.clearTimeout(finishDismissRef.current)
        finishDismissRef.current = null
      }
      document.body.style.overflow = ''
    }
  }, [status])

  async function handleSubmit(e) {
    e.preventDefault()
    e.stopPropagation()
    const form = e.currentTarget
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch(FORMSPREE_ACTION, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      const body = await res.json().catch(() => ({}))

      const succeeded = res.ok || body?.ok === true

      if (succeeded) {
        form.reset()
        setSuccessLeaving(false)
        setStatus('success')
        return
      }

      const fromErrors =
        Array.isArray(body.errors) &&
        body.errors.map((err) => err.message).filter(Boolean).join('; ')
      setErrorMessage(
        fromErrors ||
          body.error ||
          `Nit chönne schicke (${res.status}). Bitte Formspree-Iischtellige prüefe oder nomol probiere.`,
      )
      setStatus('error')
    } catch {
      setErrorMessage('Netzwärchfehler. Bitte nomol versueche.')
      setStatus('error')
    }
  }

  const successModal =
    status === 'success' && typeof document !== 'undefined'
      ? createPortal(
          <RsvpSuccessNote
            leaving={successLeaving}
            onDismiss={dismissSuccessModal}
          />,
          document.body,
        )
      : null

  return (
    <section
      id="let-us-know"
      className="section-flow relative w-full px-6 pb-32 pt-16 md:px-12 md:pb-36 md:pt-20 lg:pb-40"
    >
      {successModal}

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow mb-5">YES?</p>
          <h2 className="font-display text-[2.45rem] font-semibold not-italic leading-[1.06] tracking-[-0.015em] text-ocean md:text-[2.85rem]">
            Bisch debii?
          </h2>
        </Reveal>

        <Reveal delayClass="reveal-delay-1">
          <form
            className="mx-auto mt-14 max-w-xl space-y-9 text-left"
            onSubmit={(e) => {
              void handleSubmit(e)
            }}
          >
            <div>
              <label htmlFor="rsvp-name" className={labelClass}>
                Name(n)
              </label>
              <input
                id="rsvp-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Dii Name (+1, falls öppis)"
                className={`mt-2.5 w-full ${fieldClass}`}
              />
            </div>

            <div>
              <label htmlFor="rsvp-message" className={labelClass}>
                <span className="block">Hesch Allergie</span>
                <span className="block">oder öppis,</span>
                <span className="block">wo mir bim Esse wüsse sötted?</span>
              </label>
              <textarea
                id="rsvp-message"
                name="message"
                rows={1}
                placeholder="Wenn nöd: Hesch du e Liebes- oder Läbensweisheit für eus?"
                className={textareaClass}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              aria-busy={status === 'submitting'}
              className="group mx-auto mt-1 inline-flex min-h-[2.25rem] items-center justify-center gap-2 rounded-full border border-citrus/65 bg-transparent px-9 py-2 font-sans text-[0.8rem] font-normal tracking-[0.08em] text-citrus transition-[border-color,background-color,color,opacity] duration-300 hover:border-citrus hover:bg-citrus/[0.07] disabled:cursor-not-allowed disabled:opacity-55 md:px-10 md:text-[0.82rem]"
            >
              {status === 'submitting' ? (
                'Wird gschickt…'
              ) : (
                <>
                  Let us know
                  <span
                    aria-hidden
                    className="inline-block text-[0.92em] transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </>
              )}
            </button>

            {status === 'error' && errorMessage && (
              <p
                className="text-center font-sans text-[0.92rem] text-navy-label"
                role="alert"
              >
                {errorMessage}
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delayClass="reveal-delay-2">
          <p className="mt-14 font-display text-[1.36rem] font-normal italic leading-snug text-ocean md:mt-16 md:text-[1.62rem] md:leading-relaxed">
            A text, message or call is also fine.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
