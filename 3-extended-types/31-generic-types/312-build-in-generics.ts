// w programowaniu istnieją konstrukcje które przechowują np. kolekcje elementów
// wszystkie one nie wiedzą w momencie deklarowania - jakiego typu będą to elementy
// dlatego też muszą być zadeklarowane jako klasy generyczne.
// Kolejne przykłady to oczywiście: Set i Mapa

let mySampleSet = new Set<number>();
let mySampleMap = new Map<number, string>();

// Z tego zapisu wynika, że Set będzie przechowywał wartości typu number
// A Map - wartości typu: numer jako klucz - string jako wartość

// A co gdyby te konstrukcje nie miały definicji generycznych ?

const freestyleSet = new Set<unknown>();

freestyleSet.add(1);
freestyleSet.add('hello');
freestyleSet.add('hello');
freestyleSet.add(true);

// Jednym z kluczowych wbudowanych Generyków jest oczywiście Promise,

const numericPromise = Promise.resolve(3)
// Najedź na numericPromise, aby zobaczyć wnioskowany typ: Promise<number>

async function makeStringPromise() {
    return 'Hello M8!'
}

const myStringPromise = makeStringPromise();

myStringPromise
    .then((value) => {
        console.log(value)
    })
    .catch((error?: any) => {  // zgodnie z sygnaturą typu, error może być :any !
        console.log(error)
    })


