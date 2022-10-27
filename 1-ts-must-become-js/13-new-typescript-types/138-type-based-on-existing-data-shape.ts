/**
 * Czasami jest tak, że jakąś logikę mamy już zdefiniowaną.
 * To się liczy i służy.
 *
 * Jednak potrzebujemy typu — który opisze ten fragment logiki.
 *
 * I tutaj z jednej strony — nie ma problemu, trzeba tylko dopisać jeden więcej interface lub type.
 * Jednak z drugiej strony — trzeba to "znów pisać" tylko w postaci typu
 *
 * ... czy jest jakiś sposób na "za dużo pisania"...?
 * */

function makeACoffee(beans: string, timeOfBlend: number | string, amount: number): string {
    // Imagine some wierd logic here.... blah blah blah...
    return 'Java Coffee Cup - 200ml'
}

// Mamy teraz nowy CoffeeMaker i chcemy mieć type safety przy metodzie: start,
// Ma ona być dokładnym odwzorowaniem tego, jakie założenia ma funkcja makeACoffee powyżej.

// Zauważ, że idea jest taka, żeby nie musieć pisać:
// type MakeACoffeeFn = (beans: string, timeOfBlend: number | string, amount: number) => string;


// Rozwiązanie:
interface CoffeeMaker {
    name: string;
    coffeeBeansVolume: number;
    start: typeof makeACoffee;
}

// Teraz właśnie wyliczyliśmy typ dla metody start, na podstawie tego, co już istniało w kodzie.
// Zobacz efekt działania:

// Hint: po usunięciu komentarza poniżej skorzystaj z "implement all members" - będzie szybciej :)
const myMaker: CoffeeMaker = {
    name: "",
    coffeeBeansVolume: 0,
    start(beans: string, timeOfBlend: number | string, amount: number) {
        return 'coffe is ok!'
    }
}


// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
export {}
