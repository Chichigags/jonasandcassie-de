import { Reveal } from '../components/Reveal'

const closingClass =
  'mt-5 font-display text-[1.06rem] font-medium italic leading-[1.82] tracking-[-0.012em] text-citrus [text-shadow:none] drop-shadow-none md:text-[1.1rem] md:leading-[1.85]'

const blocks = [
  {
    time: '5:00 PM',
    title: 'Treffpunkt: Lucerne Pier 1',
    body: [
      'Mir träffed eus am Pier und gönd zäme ufs Schiff.',
      'Es chliises, aber wichtigs Schwiizer Detail: s Schiff fahrt pünktlich ab. Nöd “fashionably late”. Sondern Schwiizer Ziit.',
    ],
    closingLine: 'Sehr schwiizerisch.',
  },
  {
    time: '5:15 – 7:15 PM',
    title: 'Schifffahrt nach Weggis',
    body: [
      'E schöni Fahrt über de Vierwaldstättersee — mit Berge, gueter Gsellschaft und eme Apéro, zum de Abig richtig azfange.',
      'Ziit zum Aastosse, Plaudere und zum sich kennelehre — will sich ja no nöd alli känned.',
    ],
    closingLine: 'Das isch de offizielli Start vo üsem Fest.',
  },
  {
    time: '7:45 – 10:45 PM',
    title: 'Znacht im Restaurant Riva am See, Weggis',
    body: [
      'Langi Tische, churzi Reden, guets Esse, feine Wii und hoffentlich no besseri Gspröch.',
      'Und um ca. 10 Uhr spendiert d’Schwiiz praktischerwiis es Füürwerk.',
    ],
    closingLine:
      'Das chönd mir leider nöd für eus verbueche — das passiert jedes Jahr am Nationalfiirtig.',
  },
  {
    time: '11:00 PM',
    title: 'Zrugg nach Luzern',
    body: [
      'Mir organisiere de Transport zrugg nach Luzern für alli.',
      'Für die vernünftige Gäst: das isch de elegante Schluss.',
    ],
    closingLine: 'Für alli andere…',
  },
  {
    time: 'Late-ish',
    title: 'Afterparty irgendwo',
    body: [
      'No kei offizielli Plän. Aber mir vermuetid, dass es paar Drinks, Gschichte und fragwürdigi Dance Moves irgendwo i de Stadt wiitergönd.',
    ],
    closingLine: 'Optional, aber sehr willkomme.',
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
            So gseht de Abig us
          </h2>
          <p className="mx-auto mt-8 max-w-xl font-sans text-[1.02rem] leading-[1.82] text-navy-soft md:mt-9 md:text-[1.06rem] md:leading-[1.86]">
            <span className="block">E Sommerabig am See —</span>
            <span className="block">
              locker, schön und hoffentlich unvergässlich.
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
                      {block.time}
                    </p>
                  </div>

                  <div className="min-w-0 w-full md:max-w-reading">
                    <h3 className="font-display text-[1.26rem] font-semibold leading-snug tracking-[-0.01em] text-navy md:text-[1.34rem]">
                      {block.title}
                    </h3>
                    <div className="mt-5 space-y-4 font-sans text-[0.98rem] leading-[1.82] text-navy-soft md:text-[1.02rem] md:leading-[1.86]">
                      {block.body.map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>
                    {block.closingLine && (
                      <p className={closingClass} style={{ textShadow: 'none' }}>
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
