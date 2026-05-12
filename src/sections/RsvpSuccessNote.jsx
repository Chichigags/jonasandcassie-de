/**
 * RSVP success — soft handwritten note; × to close; gentle overlay.
 */
const OCHRE = '#C28A1D'
const PAPER = '#FDF8EE'
const LINE_BASE_DELAY_MS = 300
const LINE_STAGGER_MS = 105
const HEART_DELAY_MS = 720
const LINE_ANIM_MS = 920
const CARD_ANIM_MS = 720

const LINES = [
  'Super! Jonas, Cassie und Riva',
  'können es kaum erwarten,',
  'euch diesen Sommer',
  'zu sehen.',
]

export function RsvpSuccessNote({ leaving, onDismiss }) {
  return (
    <>
      <style>{`
        @keyframes rsvpSuccessCardIn {
          from {
            opacity: 0;
            transform: translateY(12px) rotate(-3deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(-3deg);
          }
        }
        @keyframes rsvpSuccessLineIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes rsvpSuccessHeartIn {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .rsvp-success-card-shell {
          animation: rsvpSuccessCardIn ${CARD_ANIM_MS}ms ease-out both;
        }
        .rsvp-success-card-shell.rsvp-success-card-shell--leaving {
          animation: none;
          opacity: 0;
          transform: translateY(10px) rotate(-3deg) scale(0.985);
          transition:
            opacity 480ms ease-out,
            transform 480ms ease-out;
        }
        .rsvp-success-line {
          opacity: 0;
          animation: rsvpSuccessLineIn ${LINE_ANIM_MS}ms ease-out forwards;
        }
        .rsvp-success-heart {
          opacity: 0;
          animation: rsvpSuccessHeartIn 640ms ease-out forwards;
        }
      `}</style>

      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center px-5 py-12 transition-[opacity,background-color] duration-[480ms] ease-out sm:px-8 ${
          leaving
            ? 'pointer-events-none bg-transparent opacity-0'
            : 'bg-[rgba(253,251,246,0.38)] opacity-100 backdrop-blur-[2px]'
        }`}
        role="presentation"
        onClick={(e) => {
          if (e.target === e.currentTarget) onDismiss()
        }}
      >
        <div
          className={`rsvp-success-card-shell relative mx-auto w-full max-w-[min(90vw,19.5rem)] sm:max-w-[min(86vw,21rem)] ${
            leaving ? 'rsvp-success-card-shell--leaving' : ''
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="rsvp-success-heading"
          onClick={(e) => e.stopPropagation()}
        >
          <p id="rsvp-success-heading" className="sr-only">
            Super. Jonas, Cassie und Riva können es kaum erwarten, euch diesen
            Sommer zu sehen.
          </p>

          <button
            type="button"
            onClick={onDismiss}
            className="absolute -right-0.5 -top-0.5 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-[#E6DFD2] bg-white/95 text-[1.12rem] font-light leading-none text-[#8B7B62] shadow-[0_2px_10px_rgba(40,35,25,0.08),0_1px_2px_rgba(40,35,25,0.04)] transition-[color,background-color,box-shadow,transform] duration-200 hover:bg-white hover:text-[#6B5E4E] hover:shadow-[0_3px_12px_rgba(40,35,25,0.1)] active:scale-95 sm:right-0.5 sm:top-0.5 sm:h-9 sm:w-9"
            aria-label="Schließen"
          >
            ×
          </button>

          <div
            className="origin-center rounded-sm px-7 pb-9 pt-10 text-center shadow-[0_14px_36px_-20px_rgba(80,55,20,0.12),0_6px_18px_-12px_rgba(60,45,15,0.08)] ring-1 ring-[#E8DFD0]/80 sm:px-8 sm:pb-10 sm:pt-11"
            style={{ backgroundColor: PAPER }}
          >
            <div
              className="mx-auto max-w-[16.5rem] -translate-x-px sm:max-w-[17.25rem]"
              style={{
                color: OCHRE,
                fontFamily: '"Caveat", cursive',
                fontWeight: 500,
                fontSize: 'clamp(1.65rem, 4.8vw, 1.95rem)',
                lineHeight: 1.22,
              }}
            >
              {LINES.map((line, i) => (
                <p
                  key={line}
                  className="rsvp-success-line m-0 px-0.5"
                  style={{
                    animationDelay: `${LINE_BASE_DELAY_MS + i * LINE_STAGGER_MS}ms`,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>

            <p
              className="rsvp-success-heart m-0 mt-5 pr-1 text-right text-[1.35rem] leading-none sm:mt-6 sm:pr-2 sm:text-[1.45rem]"
              style={{
                color: OCHRE,
                animationDelay: `${HEART_DELAY_MS}ms`,
              }}
              aria-hidden
            >
              ♥
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
