/**
 * RSVP success — text card (same motion as EN note); × to close.
 */
export function RsvpSuccessNote({ leaving, onDismiss }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-5 py-10 transition-[opacity,background-color] duration-500 ease-out md:px-8 ${
        leaving ? 'pointer-events-none bg-transparent opacity-0' : 'bg-ocean/[0.07] opacity-100'
      }`}
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onDismiss()
      }}
    >
      <div
        className={`relative mx-auto max-w-[min(92vw,22rem)] md:max-w-[min(88vw,24rem)] ${
          leaving
            ? 'pointer-events-none scale-[0.98] opacity-0 transition-all duration-[420ms] ease-out'
            : 'animate-rsvp-photo-in'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="RSVP received"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="sr-only">
          Nice. Jonas, Cassie and Riva can&apos;t wait to see you this summer.
        </p>

        <button
          type="button"
          onClick={onDismiss}
          className="absolute -right-1 -top-1 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-[1.15rem] font-light leading-none text-ocean/55 shadow-postcard ring-1 ring-ocean/10 transition-colors hover:bg-paper hover:text-ocean/75 md:right-0 md:top-0"
          aria-label="Schliesse"
        >
          ×
        </button>

        <div className="-rotate-[2.25deg] origin-center rounded-[2px] bg-paper px-8 py-10 text-center shadow-[0_18px_40px_-22px_rgba(30,45,120,0.18),0_6px_16px_-8px_rgba(30,45,120,0.1)] ring-1 ring-ocean/[0.06]">
          <p className="font-script text-[2.1rem] leading-tight text-ocean md:text-[2.45rem]">
            Nice.
          </p>
          <p className="mt-5 font-sans text-[0.95rem] font-normal leading-[1.65] text-navy-soft md:text-[1.02rem] md:leading-[1.72]">
            Jonas, Cassie and Riva
            <br />
            can&apos;t wait to see you this summer.
          </p>
        </div>
      </div>
    </div>
  )
}
