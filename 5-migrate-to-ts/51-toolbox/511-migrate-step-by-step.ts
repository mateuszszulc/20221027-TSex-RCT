/**
 * Jedną z niewątpliwych zalet TS, jest jego zdolność do etapowej migracji projektu.
 * Jest to ważne z punktu widzenia dowolnego projektu w Node.js
 *
 * Ponieważ TypeScript jest nadzbiorem JS - to potrafi miksować 2 typy plików w projekcie.
 * .js i .ts
 *
 * Daje również typ undefined i any oraz sposoby na ignorowanie sprawdzania całego pliku
 * lub jedynie kolejnej linii z TS.
 *
 * Masz po prostu na pokładzie cały zestaw narzędzi pozwalających na ADAPTACJE TS do
 * DOWOLNEGO projektu napisanego w Node.js. Co ważne, nie trzeba robić tej migracji
 * w jeden dzień. Można kod przeprawiać etapowo.
 *
 *
 * https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html
 * */

// 1. Typy pomocnicze "any" oraz "unknown" - gdy nie wiemy jaki typ przekazujemy dokładnie
function iCannotFindAGoodName(a: any, b:any, c: unknown) {
    return a + b + c;
}


// 2. Ignorowanie sprawdzenia danej linii
let cannotBeNumber = 'my string';
// @ts-ignore
cannotBeNumber = 123;


// 3. Ignorowanie sprawdzania dla całego pliku
// Napisz: // @ts-nocheck na górze pliku (komentarz)


// 4. Zapewnienie w stylu "ja wiem lepiej" o typie podczas pisania kodu:
interface Book {
    name: string;
    ISBN: string;
    aged?: number;
    isGood: boolean;
}

const myBook: Book = { name: 'Not enough data - but works ?!' } as Book;

// co niesie ze sobą oczywiście konsekwencje
console.log(myBook.isGood)


// Jednak nadaje się tam, gdzie możemy je ponieść: np. podczas testowania kodu ts!
//

// https://react-typescript-cheatsheet.netlify.app/docs/migration/from_js
// https://speakerdeck.com/amhinson/convert-a-react-native-project-to-typescript-in-10-minutes
