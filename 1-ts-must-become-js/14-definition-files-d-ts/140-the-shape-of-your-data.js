/**
 * Typescript może istnieć razem z JavaScript'em
 *
 * Co jest dość ciekawym rozwiązaniem, ale zanim do tego dojdziemy — zobacz poniższy przykład
 *
 *
 * Załóżmy, że robimy prostą bibliotekę do obliczeń matematycznych...
 * Wszystko piszemy w czystym JavaScript i tak publikujemy to na npm
 *
 * biblioteka ma swój kształt i jest dołączona np. do przestrzeni globalnej naszego
 *
 * @typedef { import('./141-sample-interface').MathInterface } MathInterface
 *
 * https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
 *
 * UWAGA:
 *  - żeby to tsc, a nie nasze IDE zwracał błąd w konsoli — potrzebujemy 2 rzeczy:
 *    > w pliku `tsconfig.json` włączoną flagę: "allowJS": true
 *    > na górze pliku komentarz: // @ts-check
 *    LUB:
 *    > włączoną flagę: "checkJs": true w pliku `tsconfig.json` [globalne rozwiązanie dla wszystkich plików JS]
 * */


// Teraz spróbuj użyć metod z: mathOLib, aby sprawdzić działanie TS + Intellisense:
/** @type {MathInterface} */
// - Odkomentuj linie poniżej i sprawdź działanie:
// let mathOLib = {};
// console.log(mathOLib)

/**
 * Docelowo w większych projektach JS, nie piszemy plików .d.ts "ręcznie",
 * Bardzo często — biblioteki, które są napisane w JavaScript na npm,
 * posiadają swoje dedykowane pliki z definicjami typów.
 *
 * Zobaczymy to na przykładzie jQuery — bardzo popularnej biblioteki do obsługi DOM.
 * W przygotowanym dla Was projekcie z jQuery użyto następujących komend:
 *
 * npm i jquery
 * npm i -D @types/jquery
 *
 * Sprawdź projekt z jQuery — aby zobaczyć rezultat
 * */



export {};
