/**
 * Typescript pozwala użyć typu tzw. :any
 *
 * Pozwala on nam uzyskać kompatybilność wsteczną i działanie rodem z JavaScript:
 * To znaczy, nasze zmienne dalej są "dynamicznie typowane"
 *
 *
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any
 * https://www.typescriptlang.org/docs/handbook/2/functions.html#never
 * https://www.typescriptlang.org/docs/handbook/2/functions.html#void
 * https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown
 *
**/

let whyIWannaDoThat: any = 12323;
whyIWannaDoThat = 'Hello';

// [!] Przypisane any do string — jest możliwe.
// (zauważ, że to niebezpieczne — np. zakomentowanie linii 10 nie powoduje, że TS pokaże błąd)
const myString: string = whyIWannaDoThat;
console.log(myString);
// Powyższe zapisy nie generują błędu. Ponieważ SPECJALNIE kazaliśmy TypeScript zachowywać się w ten sposób.

// Po co chcielibyśmy dostając te wszystkie dobroci od TS — dalej używać takiego zapisu ?!
// Okazuje się on użyteczny przynajmniej w 3 przypadkach:
// 1) Jeśli migrujesz projekt z JavaScript do TypeScript
// 2) Jeśli nie masz pewności co do typu lub nie możesz go uzyskać, ponieważ integrujesz bibliotekę JS do projektu z TS
// 3) Jeśli prototypujesz coś na szybko w kodziku i chcesz później dopisać szczegóły typu

// Bardzo podobnie zachowuje się wprowadzony jakiś czas temu (TS 3.0) typ: `unknown`;
let iReallyDoNotKnow: unknown = '12321';
iReallyDoNotKnow = 123123;
iReallyDoNotKnow = false;
iReallyDoNotKnow = 23;

// [!] Przypisanie unknown do number — nie będzie możliwe.
// ZASADNICZA RÓŻNICA między any a unknown:
// (odkomentuj) Poniższa linia generuje błąd:
// const myNumber: number = iReallyDoNotKnow;

// Dlatego unknown jest nazywany "type-safe" - musimy upewnić się, jakiego dokładnie typu jest `unknown`
// Dopiero wtedy TS pozwoli nam go przypisać do np. number:

if(typeof iReallyDoNotKnow === 'number') {
    // Teraz TS nie traktuje tego jako błąd:
    const myNumber: number = iReallyDoNotKnow;
}

// `void` oraz `never` stosowane są bardziej w przypadku funkcji czy metod, w następujący sposób:
function mySpecialProcedureThatReturnsNothing(): void {

}
// W ten sposób mamy funkcję, która nic nie zwraca.
// Czy moglibyśmy użyć słowa `undefined`? - wiedząc, że w JS funkcja, która nic nie zwraca — zwróci undefined ?
console.log(mySpecialProcedureThatReturnsNothing());
// Nie, ponieważ TypeScript oczekuje wtedy słowa kluczowego `return` w ciele funkcji.

// Funkcja, która nic nie zwraca — ponieważ w jej ciele znajduje się rzucany wyjątek, tak naprawdę da nam `never`:
function mySpecialThrow(): never {
    throw new Error('Ooooops !');
}

export {}
