import { Reveal } from '../components/Reveal'
import beijingImg from '../assets/story/beijing.png'
import singaporeImg from '../assets/story/singapore.png'

/**
 * Story — top edge soft-fades from hero; clean paper field.
 */
export function Story() {
  const imgStyle = {
    flex: '0 1 auto',
    width: 'auto',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '12px',
    opacity: 1,
  }

  return (
    <section
      id="story"
      className="section-flow relative z-[1] w-full pt-[clamp(2.75rem,6vw,4rem)] pb-20 md:pb-24 lg:pb-28"
    >
      <div className="story-container relative mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="story-row grid grid-cols-1 gap-12 md:grid-cols-[minmax(300px,1.15fr)_minmax(0,1fr)] md:items-center md:gap-x-12 lg:gap-x-14 lg:gap-y-8">
          <div className="story-images-col flex w-full items-center justify-center">
            <div
              className="story-images relative flex w-full flex-col items-center justify-center gap-6 sm:flex-row sm:flex-nowrap sm:items-center sm:justify-center sm:gap-0"
              style={{
                maxWidth: 'min(100%,540px)',
              }}
            >
              <img
                src={beijingImg}
                alt="Paar in einer Beijing-Hutong, Nachmittag im warmen Sonnenlicht"
                width={690}
                height={735}
                className="story-image story-image-beijing relative z-10 block h-auto max-w-full rotate-[1.15deg] sm:max-w-[min(52%,280px)] sm:origin-bottom"
                style={imgStyle}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <img
                src={singaporeImg}
                alt="Paar mit kleinem Hund an der Marina Bay in Singapur im goldenen Abendlicht"
                width={690}
                height={735}
                className="story-image story-image-singapore relative z-20 -mt-2 block h-auto max-w-full -rotate-[1.05deg] sm:-ml-10 sm:mt-0 sm:max-w-[min(52%,280px)] md:-ml-12 sm:origin-bottom"
                style={imgStyle}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          <Reveal className="min-w-0">
            <div className="story-text-col flex w-full min-w-0 flex-col justify-center">
              <div className="story-text text-left">
                <p className="eyebrow mb-0">HOW WE GOT HERE</p>
                <h2 className="mt-5 font-display text-[1.95rem] font-semibold not-italic leading-[1.06] tracking-[-0.015em] text-ocean md:text-[1.4rem] lg:text-[1.62rem] xl:text-[1.82rem] 2xl:text-[1.98rem] xl:whitespace-nowrap">
                  Von Beijing nach Singapur
                </h2>
                <p className="story-line-2 mt-9 font-sans text-[1.02rem] font-normal leading-[1.78] text-navy-soft md:mt-10 md:text-[1.05rem] md:leading-[1.82] mb-[18px]">
                  Was in Beijing begonnen hat,
                  <br />
                  wurde in Singapur zu unserem Leben —
                  <br />
                  mit vielen Abenteuern, ein paar Plot Twists
                  <br />
                  und irgendwann auch einem ziemlich verwöhnten kleinen Hund.
                </p>
                <p className="story-line-3 font-sans text-[1.02rem] font-normal leading-[1.78] text-navy-soft md:text-[1.05rem] md:leading-[1.82]">
                  Diesen Sommer nehmen wir uns einen Moment,
                  <br />
                  um das alles mit den Menschen zu feiern,
                  <br />
                  die uns am meisten bedeuten.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
