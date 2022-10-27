/**
 * Zmień rozszerzenie tego pliku na `.ts` i zobacz, co się stanie.
 *
 * **/

console.log('Hello world');

const hello = 'world';
let myThing = 'str'
myThing = 12;

console.log(myThing)

function divString(title, numProp = 1) {
	return `<div> ${title} is: ${numProp} </div>`
}

divString();

