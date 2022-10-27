
const form: HTMLFormElement = document.createElement('form')
const div: HTMLDivElement = document.createElement('div')
const p: HTMLParagraphElement = document.createElement('p')

// klasy HTMLFormElement, HTMLDivElement, HTMLParagraphElement etc. (każdy element DOM!)
// są wbudowane w tzw. WebAPI przeglądarki:

//  https://developer.mozilla.org/en-US/docs/Web/API
//  https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
//  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement ... etc.


// Wszystkie te elementy dziedziczą po klasie bazowej: HTMLElement
// Dowód:

console.log(form instanceof HTMLElement)
console.log(div instanceof HTMLElement)
console.log(p instanceof HTMLElement)
