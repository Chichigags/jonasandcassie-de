import { Reveal } from '../components/Reveal'

const summerChic =
  'font-display font-semibold not-italic leading-[1.06] tracking-[-0.02em] text-citrus'

/**
 * Dress code — full-bleed photo; top/bottom paper gradients only.
 */
export function DressCode() {
  return (
    <section id="dress-code" className="section-flow-warm relative w-full">
      <div className="relative min-h-[min(68svh,560px)] w-full overflow-hidden md:min-h-[min(62svh,520px)]">
        <img
          src="/images/dresscode-lake-wildflowers.png"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'center 42%',
            filter: 'saturate(0.96) contrast(0.97) brightness(1.02)',
          }}
        />

        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-paper to-transparent md:h-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-t from-paper to-transparent md:h-32"
          aria-hidden
        />

        <div className="relative z-[2] mx-auto flex min-h-[min(68svh,560px)] max-w-[1100px] flex-col items-center px-6 pb-24 pt-[clamp(4.75rem,15vh,7rem)] text-center md:min-h-[min(62svh,520px)] md:px-12 md:pb-28 md:pt-[clamp(5rem,14vh,6.25rem)] lg:px-14">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow !text-ocean-vivid">DRESS CODE</p>
              <h2
                className={`mt-5 text-[clamp(2.12rem,5.1vw,2.68rem)] md:mt-6 ${summerChic}`}
              >
                Summer chic
              </h2>
            </Reveal>

            <Reveal delayClass="reveal-delay-1">
              <div className="mt-9 font-sans text-[1rem] font-normal leading-[1.78] text-ocean-vivid md:mt-10 md:text-[1.05rem] md:leading-[1.82]">
                <p>Bootstauglich, tanztauglich.</p>
              </div>
            </Reveal>

            <Reveal delayClass="reveal-delay-2">
              <p className="mt-10 font-display text-[1.22rem] font-normal italic leading-snug tracking-[-0.01em] text-ocean-vivid md:mt-11 md:text-[1.3rem]">
                Kein Black Tie. Kein Druck.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
