import { Reveal } from '../components/Reveal'

const closingClass =
  'mt-5 font-display text-[1.06rem] font-medium italic leading-[1.82] tracking-[-0.012em] text-citrus [text-shadow:none] drop-shadow-none md:text-[1.1rem] md:leading-[1.85]'

/** Same wording as `blocks` — optional spans only control line breaks. */
function EveningBodyParagraph({ text }) {
  if (
    text.startsWith(
      'Ein kleines, aber wichtiges Schweizer Detail: Das Schiff fährt pünktlich ab.',
    )
  ) {
    return (
      <>
        Ein kleines, aber wichtiges Schweizer Detail: Das Schiff fährt pünktlich
        ab.{' '}
        <span className="whitespace-nowrap">
          Nicht „fashionably late“. Sondern nach Schweizer Zeit.
        </span>
      </>
    )
  }
  if (
    text.startsWith(
      'Zeit zum Anstoßen, Plaudern und Kennenlernen — denn schließlich',
    )
  ) {
    return (
      <>
        Zeit zum Anstoßen, Plaudern und Kennenlernen — denn{' '}
        <span className="whitespace-nowrap">
          schließlich kennen sich noch nicht alle.
        </span>
      </>
    )
  }
  if (text.startsWith('Und gegen 22 Uhr')) {
    return (
      <>
        Und gegen 22 Uhr spendiert die Schweiz praktischerweise{' '}
        <span className="whitespace-nowrap">ein Feuerwerk.</span>
      </>
    )
  }
  if (text.startsWith('Für die Vernünftigen:')) {
    return (
      <span className="whitespace-nowrap">
        Für die Vernünftigen: das elegante Ende.
      </span>
    )
  }
  if (text.startsWith('Noch keine offiziellen Pläne')) {
    return (
      <>
        Noch keine offiziellen Pläne — aber wir vermuten, dass irgendwo in der
        Stadt noch Drinks, Geschichten und{' '}
        <span className="whitespace-nowrap">fragwürdige Dance Moves</span>{' '}
        weitergehen.
      </>
    )
  }
  return text
}

/** Renders time with a slightly smaller AM/PM so it matches the numerals better. */
function EveningTimeLine({ time }) {
  if (time === 'Late-ish') return time
  const m = time.match(/^(.*?)(\s+(?:PM|AM))$/i)
  if (!m) return time
  return (
    <>
      {m[1]}
      <span className="text-[0.68em] font-semibold tracking-[0.05em] opacity-[0.9]">
        {m[2]}
      </span>
    </>
  )
}

const blocks = [
  {
    time: '5:00 PM',
    title: 'Treffpunkt: Lucerne Pier 1',
    body: [
      'Wir treffen uns am Pier und gehen gemeinsam aufs Schiff.',
      'Ein kleines, aber wichtiges Schweizer Detail: Das Schiff fährt pünktlich ab. Nicht „fashionably late“. Sondern nach Schweizer Zeit.',
    ],
    closingLine: 'Sehr schweizerisch.',
  },
  {
    time: '5:15 – 7:15 PM',
    title: 'Bootsfahrt nach Weggis',
    body: [
      'Eine wunderschöne Fahrt über den Vierwaldstättersee — mit Bergen, guter Gesellschaft und einem Apéro, damit der Abend richtig beginnt.',
      'Zeit zum Anstoßen, Plaudern und Kennenlernen — denn schließlich kennen sich noch nicht alle.',
    ],
    closingLine: 'Der offizielle Start unseres Festes.',
  },
  {
    time: '7:45 – 10:45 PM',
    title: 'Dinner im Restaurant Riva am See, Weggis',
    body: [
      'Lange Tische, kurze Reden, gutes Essen, guter Wein und hoffentlich noch bessere Gespräche.',
      'Und gegen 22 Uhr spendiert die Schweiz praktischerweise ein Feuerwerk.',
    ],
    closingLine:
      'Das können wir uns leider nicht selbst zuschreiben — das passiert jedes Jahr am Nationalfeiertag.',
  },
  {
    time: '11:00 PM',
    title: 'Zurück nach Luzern',
    body: [
      'Wir organisieren den Rücktransport nach Luzern für alle.',
      'Für die Vernünftigen: das elegante Ende.',
    ],
    closingLine: 'Für alle anderen …',
  },
  {
    time: 'Late-ish',
    title: 'Afterparty irgendwo',
    body: [
      'Noch keine offiziellen Pläne — aber wir vermuten, dass irgendwo in der Stadt noch Drinks, Geschichten und fragwürdige Dance Moves weitergehen.',
    ],
    closingLine: 'Optional — aber sehr willkommen.',
  },
]

/**
 * Evening — each block ends with a muted gold italic closing line.
 */
export function Evening() {
  return (
    <section
      id="evening"
      className="section-flow relative w-full overflow-visible px-6 pb-20 pt-10 md:px-12 md:pb-24 md:pt-12 lg:pb-28 lg:pt-14"
    >
      <Reveal>
        <header className="mx-auto max-w-prose text-center">
          <p className="eyebrow">THE EVENING</p>
          <h2 className="mt-5 font-display text-[2.5rem] font-semibold not-italic leading-[1.06] tracking-[-0.015em] text-ocean md:text-[2.9rem]">
            So sieht der Abend aus
          </h2>
          <p className="mx-auto mt-8 max-w-xl font-sans text-[1.02rem] leading-[1.82] text-navy-soft md:mt-9 md:text-[1.06rem] md:leading-[1.86]">
            <span className="block">Ein Sommerabend am See —</span>
            <span className="block">
              entspannt, schön und hoffentlich unvergesslich.
            </span>
          </p>
        </header>
      </Reveal>

      <div className="relative mx-auto mt-14 max-w-content md:mt-16 lg:mt-18">
        <div
          className="pointer-events-none absolute bottom-10 left-[11.55rem] top-10 hidden w-px bg-ocean/15 md:block lg:left-[12.05rem]"
          aria-hidden
        />

        <ul className="relative space-y-20 md:space-y-24 lg:space-y-28">
          {blocks.map((block, i) => (
            <li key={block.title}>
              <Reveal
                delayClass={i === 0 ? '' : `reveal-delay-${Math.min(i, 3)}`}
              >
                <article className="grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,11.25rem)_minmax(0,1fr)] md:gap-x-12 lg:gap-x-16">
                  <div className="md:pt-0.5">
                    <p className="font-display text-[1.48rem] font-semibold leading-none tracking-[-0.02em] text-ocean md:text-[1.62rem]">
                      <EveningTimeLine time={block.time} />
                    </p>
                  </div>

                  <div className="min-w-0 w-full md:max-w-reading">
                    <h3 className="font-display text-[1.26rem] font-semibold leading-snug tracking-[-0.01em] text-navy md:text-[1.34rem]">
                      {block.title}
                    </h3>
                    <div className="mt-5 space-y-4 font-sans text-[0.98rem] leading-[1.82] text-navy-soft md:text-[1.02rem] md:leading-[1.86]">
                      {block.body.map((para, j) => (
                        <p key={j}>
                          <EveningBodyParagraph text={para} />
                        </p>
                      ))}
                    </div>
                    {block.closingLine && (
                      <p
                        className={`${closingClass} ${
                          block.closingLine.startsWith('Das können wir')
                            ? 'max-w-full text-balance md:whitespace-nowrap'
                            : ''
                        } ${
                          block.closingLine.startsWith('Für alle anderen')
                            ? 'block whitespace-nowrap'
                            : ''
                        }`}
                        style={{ textShadow: 'none' }}
                      >
                        {block.closingLine}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
