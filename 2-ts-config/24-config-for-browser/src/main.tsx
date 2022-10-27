import React from 'react'
import { render } from 'react-dom';
import { App } from './App.js'

const $root = document.getElementById('root');

if($root) {
   render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
       $root
    )
} else {
    document.body.innerHTML = `root Element not found on page...😭`
}

/**
 * BTW.
 *
 * Pomijając samego React'a, czaderski jest fakt podpowiadania przez TypeScript
 * składni dla przeglądarki + wbudowanych klas w DOM (Web APIs)
 * https://developer.mozilla.org/en-US/docs/Web/API
 *
 *
 * Zwróć uwagę poniżej na wbudowane natywne dla Browser klasy:
 * HTMLElement, HTMLParagraphElement, HTMLDivElement
 *
 * */

const myDomElement = document.createElement('p');

const investigation = [
    {question: 'is HTML element?', answer: myDomElement instanceof HTMLElement},
    {question: 'is paragraph?', answer: myDomElement instanceof HTMLParagraphElement},
    {question: 'is div?', answer: myDomElement instanceof HTMLDivElement}
]
console.table(investigation)
