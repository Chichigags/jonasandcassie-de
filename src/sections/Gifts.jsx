import { Reveal } from '../components/Reveal'

/**
 * Gifts — minimal; ocean blue for titles (body stays soft gray).
 */
export function Gifts() {
  return (
    <section
      id="gifts"
      className="relative w-full section-flow px-6 pt-18 pb-28 md:px-12 md:pt-22 md:pb-36"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow">ONE LAST THING</p>
          <h2 className="mt-5 font-display text-[2.45rem] font-semibold not-italic leading-[1.06] tracking-[-0.015em] text-ocean md:text-[2.85rem]">
            Gschänk
          </h2>
        </Reveal>

        <Reveal delayClass="reveal-delay-1">
          <div className="mx-auto mt-8 max-w-[34rem] space-y-5 font-sans text-[1.02rem] leading-[1.82] text-navy-soft md:mt-9 md:text-[1.06rem] md:leading-[1.86]">
            <p>
              Dass du mit eus fiirsch, isch für eus scho s’schönschte Gschänk —
              bsunders, wenn du extra nach Luzern chunsch.
            </p>
            <p>Du muesch eus würkli nüt schenke.</p>
            <p>
              Falls du aber trotzdem öppis biiträge möchtisch, freued mir eus
              über en chline Betrag für üsi nächschte Abenteuer.
            </p>
            <div className="pt-2">
              <p className="mb-1 font-sans text-[0.72rem] font-medium uppercase tracking-[0.07em] text-navy-label">
                Konto / IBAN:
              </p>
              <p className="font-mono text-[0.95rem] tracking-tight text-navy-soft">
                [INSERT IBAN HERE]
              </p>
            </div>
            <p>Ganz ohni Erwartig — und nur, wenn’s für dich passt.</p>
          </div>
        </Reveal>

        <div
          className="mx-auto mt-8 h-px w-16 bg-ocean/28 md:w-20 md:bg-ocean/32"
          aria-hidden
        />
      </div>
    </section>
  )
}
