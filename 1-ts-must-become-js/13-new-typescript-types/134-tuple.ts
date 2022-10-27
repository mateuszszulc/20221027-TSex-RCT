/**
 * Typescript pozwala tworzyć tzw. tuple
 *
 * Zasadniczo są to typy pilnujące o implementowaniu tablicy ze skończoną ilością elementów,
 * o określonym typie. Najczęściej spotykamy 2 elmentowe warianty
 *
 * https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
 **/

// Oto nasz tuple
type Point = [number, number]

function calculate(from: Point) {
    console.log(from[0])
    console.log(from[1])
    // Błąd:
    // console.log(from[2])
}

const sample: Point = [20, 10]

// Użycie destrukturyzacji:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const [x, y] = sample;

console.log(x)
console.log(y)


const otherTuple: [number, string, boolean] = [0, 'isAdmin', true];
