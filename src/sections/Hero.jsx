/**
 * Hero — meadow; light bottom fade into ivory; no stacked veils or wave SVG.
 */
export function Hero() {
  return (
    <header className="relative isolate w-full">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero-meadow.png"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover max-md:object-[center_68%] md:object-center max-md:[filter:saturate(1.08)_contrast(1.02)_brightness(1)] md:[filter:saturate(0.94)_contrast(0.96)_brightness(1.03)]"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(15vh,6.5rem)] bg-gradient-to-t from-paper from-[18%] to-transparent md:h-[min(28vh,12rem)] md:from-15%"
          aria-hidden
        />
      </div>

      <div className="relative z-[1] mx-auto flex min-h-[100svh] max-w-[1100px] flex-col justify-center px-6 pb-20 pt-24 md:px-12 md:pb-24 md:pt-28 lg:px-16 lg:pb-28">
        <div className="max-w-2xl">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-charcoal opacity-0 animate-fade-up md:text-[0.82rem]">
            LUCERNE · 1. AUGUST 2026
          </p>

          <h1 className="mt-7 font-display text-[clamp(3rem,7.2vw,5rem)] font-semibold leading-[1.06] tracking-[-0.015em] text-ocean opacity-0 animate-fade-up-delay">
            Life, Love &amp; 40
          </h1>

          <p className="mt-7 font-sans text-[0.92rem] font-semibold uppercase tracking-[0.13em] text-charcoal opacity-0 animate-fade-up-slow md:text-[1rem]">
            JONAS &amp; CASSIE
          </p>

          <p className="mt-10 font-display italic text-[1.36rem] font-normal leading-tight text-ocean opacity-0 animate-fade-up-slow md:mt-11 md:text-[1.82rem] md:leading-[1.36]">
            Eine Ehe. Zwei Geburtstage.
            <br />
            Ein Sommerabend am See.
          </p>

          <p className="mt-14 max-w-xl font-sans text-[1.02rem] leading-[1.82] text-navy-soft opacity-0 animate-fade-up-slow md:mt-16 md:text-[1.08rem] md:leading-[1.86]">
            Mir fiired e schöne Moment im Läbe — üsi Ehe, üsi 40er und all die
            Mönsche, wo das alles besonders mached.
          </p>
        </div>
      </div>
    </header>
  )
}
