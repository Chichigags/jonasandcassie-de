/**
 * Closing — lake band; minimal top fade into paper only.
 */
export function LakeFooter() {
  return (
    <footer
      id="lake-footer"
      className="relative isolate -mt-6 w-full overflow-hidden md:-mt-8"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-12 bg-gradient-to-b from-paper to-transparent md:h-14" aria-hidden />

      <div className="relative h-[42svh] min-h-[280px] w-full md:h-[48svh]">
        <img
          src="/images/footer-lake.png"
          alt="Ruhiger See im goldenen Abendlicht, weiche Wolken über dem Horizont"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'center bottom',
            filter: 'saturate(1.1) contrast(1.02) brightness(1)',
          }}
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 flex -translate-y-2 items-center justify-center px-4 md:-translate-y-3">
          <div className="text-center">
            <p className="font-script text-[2.35rem] leading-none text-ocean md:text-[3rem]">
              Bis bald am See.
            </p>
            <p className="mt-4 font-display text-[1.12rem] font-semibold leading-none text-ocean md:text-[1.38rem]">
              Jonas &amp; Cassie
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
