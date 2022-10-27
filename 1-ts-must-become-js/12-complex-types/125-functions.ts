/**
 *  Funkcje to jedne z podstawowych elementów, bez których nie można mówić o zbudowaniu aplikacji JS.
 *
 *  Funkcje mogą być przekazywane w JS jako wartości, ponieważ w JavaScript istnieje paradygmat:
 *  Function First Class Citizen
 *
 *  to TypeScript oferuje również zapis typu dla funkcji
 */

type MySampleSumMethod = (a: number, b: number) => number

interface MySampleObject {
    name: string;
    sum: MySampleSumMethod;
}

// Implementacja
const mathObject: MySampleObject = {
    name: 'Sum 2 numbers',
    sum(a: number, b: number): number {
        return a + b;
    }
}

// W JavaScript rozróżniamy 2 Kluczowe zapisy funkcji:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
// DEKLARACJA:
function functionDeclaration(name: string): string {
    return `Hello ${name}`
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
// WYRAŻENIE FUNKCYJNE:
const functionExpression = function(name: string): string {
    return `Hello ${name}`
};

// Te 2 zapisy realizują logikę 1:1 taką samą, jednak różnica polega na tym, że deklaracja ma nazwę.
// Wyrażenie funkcyjne to funkcja anonimowa, do której mamy referencję: functionExpression
// Deklarację można wywołać przed jej zapisem, wyrażenie funkcyjne używać będzie const lub let,
// więc nie da się go wywołać wcześniej niż jego przypisanie.

// Dodatkowo na wyrażenie funkcyjne trzeba spojrzeć z szerszej perspektywy.
// Może ono być zapisane w nowoczesnej postaci tzw. Arrow function:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// WYRAŻENIE FUNKCYJNE:
const arrowFunctionExpression = (name: string): string => `Hello ${name}`


// W JavaScript funkcje i wyrażenia funkcyjne mogą być przekazywane jako wartości,
// i jest to podstawa do asynchronicznego działania JS, w kontekście wywoływania tzw. callbacks.
// Na przykład:
setTimeout(() => {

    console.log('Wykonam sie dopiero po 3 sekundach')

}, 3000)

// Do wywołania funkcji setTimeout, przekazaliśmy jako argument -> wyrażenie funkcyjne.

// Używanie typu nabiera również znaczenia w momencie wykorzystania wyrażeń funkcyjnych:
const sampleUseOfTheType: MySampleSumMethod = (a: number, b: number): number => a + b

// Rozważmy również taki przypadek:
function addOne(value: number, sumNumbersCallback: MySampleSumMethod): number {
    return sumNumbersCallback(value, 1)
}

addOne(22, sampleUseOfTheType) //?
addOne(450, sampleUseOfTheType) //?
addOne(1234, sampleUseOfTheType) //?

export {}
