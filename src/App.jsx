import { Hero } from './sections/Hero'
import { Story } from './sections/Story'
import { Evening } from './sections/Evening'
import { DressCode } from './sections/DressCode'
import { LetUsKnow } from './sections/LetUsKnow'
import { Gifts } from './sections/Gifts'
import { LakeFooter } from './sections/LakeFooter'

/**
 * Swiss German site — same structure and styling as the English project;
 * deployed separately (own domain). No “More fun” / Weekend block.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-paper text-navy">
      <main className="overflow-x-hidden">
        <Hero />
        <Story />
        <Evening />
        <DressCode />
        <LetUsKnow />
        <Gifts />
        <LakeFooter />
      </main>
    </div>
  )
}
