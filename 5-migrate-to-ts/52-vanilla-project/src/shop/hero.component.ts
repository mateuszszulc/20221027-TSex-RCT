import { div, p, section } from '../framework/dom-creators.js'

type HeroProps = { title: string, subTitle: string }


export function hero({ title, subTitle }: HeroProps) {
  const $heroSection = section('hero is-link')
  const $heroBody = div('hero-body')
  const $title = p('title')
  $title.innerText = title
  const $subTitle = p('subtitle')
  $subTitle.innerText = subTitle
  $heroBody.append($title, $subTitle)
  $heroSection.append($heroBody)
  return $heroSection
}
