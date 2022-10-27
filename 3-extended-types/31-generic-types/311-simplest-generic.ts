/**
 * Typy generyczne w TypeScript działają na bardzo podobnych zasadach jak w innych językach typowanych z OOP.
 * Jeśli znasz np. typy generyczne w Java / C# - zrozumienie poniższych zapisów - nie będzie więc problemem.
 *
 * Typy generyczne pozwalają poszerzyć re-używalność naszego kodu.
 *
 * Często jest tak, że np. wymyślony przez nas typ danych lub klasa - przechowują w sobie inne dane.
 * Dane te mogą być jednak dowolnego typu.
 * Na etapie projektowania metod w klasie czy parametrów przesyłanych do naszej funkcji - nie jesteśmy
 * w stanie określić jakiego typu dane będziemy obsługiwać.
 * Jednocześnie — typ :any czy :unknown nie są dla nas rozwiązaniem, ponieważ tworząc nową
 * instancje klasy - chcemy mieć dalej podpowiadanie składni związane z typem, który finalnie użyliśmy przy jej konstruowaniu.
 *
 * Z pomocą przychodzą nam: typy generyczne, które pozwalają na właśnie taką elastyczność.
 *
 * Zobaczmy przykłady....
 * */

// Najbardziej oczywistym typem generycznym są tablice (Arrays).
// W momencie jej definiowania "dopisujemy" co faktycznie będzie przechowywać:

let undefinedArray: Array<string>;
const mySampleArray: Array<string | number> = [];

mySampleArray.push(1120);
mySampleArray.push('23');
// błąd (Array zawiera albo string albo number):
// mySampleArray.push(true);

// Może nie być to oczywiste, ponieważ najczęściej i najwygodniej zapisujemy typ tablicowy tak:
let undefinedArray2: string[];
const myOtherArray: (string | number)[] = [];

// Jest to istotne z pkt. Widzenia JSX. Gdzie korzystamy również z zapisów np. <div>
// TS wprowadził (jedynie dla tablic) specjalną możliwość zapisu z type[]:

interface User {
    name: string
}

const userCollection: User[] = [ { name: 'Mike'}, { name: 'Ana'}, {name: 'John'}, {name: 'Bianca'} ]

export {}
