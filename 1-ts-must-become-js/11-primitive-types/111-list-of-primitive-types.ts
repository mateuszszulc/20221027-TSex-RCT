/**
 * W JS jest 7 typów prostych.
 * To na ich podstawie budujemy bardziej złożone obiekty etc.
 *
 * Klasyczne zachowanie JavaScript — pozwala na dynamiczną zmianę typu.
 * Coś, co na początku jest przypisane jako string, może po chwili mieć wartość typu number (**)
 *
 * W TypeScript — chcemy pozbyć się tej własności i mocno ją ograniczyć.
 * Upewniając się, że ustalony początkowo typ zmiennej — pozostanie niezmieniony.
 *
 * Typy proste przekazywane są przez wartości, dzięki czemu możliwe jest ich porównanie za pomocą
 * potrójnego znaku równości === z inną wartością tego samego typu.
 *
 *
 * Słowa kluczowe wprowadzone przez TypeScript:
 * any, unknown, never, void
 *
 * Dodatkowe info:
 * (**) - To nie jest tak, że w JS "nie ma typów!" - po prostu, typowanie nie jest zrobione jawnie.
 * JavaScript sam rozpoznaje typy, jednak my nie mamy możliwości określenia "zawczasu" dokładnego kształtu danych.
 * Ten problem ma rozwiązać TypeScript.
 *
 * */

// Lista wszystkich typów prostych w JS na rok 2022 (ES13):
// Jest ich 7
const word: string = 'Hello';
const num: number = 1275612.82;
const int: bigint = 10n;
const flag: boolean = false;
const sym: symbol = Symbol();
const noWay: undefined = undefined;
const noValue: null = null;

// W przeciwieństwie do JS nie da się dynamicznie zmienić typu:
let mySample: string;
mySample = 'I am a string... always';
// Operacja niedozwolona:
// mySample = 1234;

let myOtherSample = 'I am an inferred type of string';
// Operacja niedozwolona:
// myOtherSample = 12355;

// Type Inference (Wnioskowanie typów)
// https://www.typescriptlang.org/docs/handbook/type-inference.html
// Inferred type to tzw. typ wywnioskowany przez TS na podstawie tego,
// co zostało przypisane do stałej / zmiennej.

let inferredWord = 'Hello';
let inferredNumber = 1275612.82;
let inferredBigInt = 10n;
let inferredBoolean = false;
let inferredSymbol = Symbol();
// tego nie da się zrobić inferred z racji działania JS
// undefined to "subtype of all other types"
let inferredAny = undefined;
// null to "subtype of all other types"
let inferredNull = null;
// więc to poniżej zadziała:
// inferredAny = 1;
// inferredNull = 1;

// [!!!] CHYBA ŻE:
// można to zachowanie zmienić flagą: "strictNullChecks": true w tsconfig.json
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined

// Typy prymitywne sprawdzamy operatorem `typeof`
console.log(typeof 'hello');
console.log(typeof inferredWord);
console.log(typeof inferredNumber);
console.log(typeof inferredBigInt);
console.log(typeof inferredBoolean);
console.log(typeof inferredSymbol);
console.log(typeof inferredAny);

// Wyjątkiem (poprzez buga) - jest `null` - którego sprawdzenie przez `typeof` nic nam nie powie:
console.log(typeof inferredNull);
// porównaj z obiektami:
console.log(typeof new Date());
console.log(typeof {});
console.log(typeof []);

// Bonus knowledge:
// typeof zadziała i może nam również pomóc przy rozpoznaniu funkcji:
console.log(typeof (() => {}));

// Chcemy, aby ten plik był traktowany jako moduł:
export {}
