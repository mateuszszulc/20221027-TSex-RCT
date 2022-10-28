import { div } from '../framework/dom-creators.js'
import type { Money } from './CartItem.js'

export function cartItemSum({ value, currency = 'PLN' }: Money) {
  const $panelBlock = div('panel-block is-justify-content-end')
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`
  return $panelBlock
}
