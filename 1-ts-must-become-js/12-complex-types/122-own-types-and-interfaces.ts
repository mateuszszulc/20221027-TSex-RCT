/**
 *
 *  Piękno TypeScript'a polega na możliwości osobnego zapisu typu (TS) i wartości (JS)
 *
 *  W tym układzie, możemy pilnować moment przypisania, określając ten typ wcześniej.
 *  Mamy możliwość definiowania różnego rodzaju typów.
 *  Będziemy to mogli robić nawet dla już istniejącego kodu JS (szczegóły potem w plikach .d.ts)
 *
 *  Typescript wprowadza zasadniczo 2 słowa kluczowe pomagające w kodzie, zapisywać typy:
 *
 *      - type
 *      - interface
 *
 * */

type SuperUser = {
    name: string;
    isAdmin: boolean;
    age?: number;
    checkIsAdmin?(): void;
}

let myUser: SuperUser;

// Odkomentuj i przypisz nowego user'a:
myUser = {
    name: '',
    isAdmin: false
};

if(myUser.checkIsAdmin) {
   myUser.checkIsAdmin(); 
}

myUser.checkIsAdmin?.();

// Zamiennie możemy stosować do tego celu interface:
interface MySuperUser {
    name: string;
}
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces

interface MySuperUser {
    isAdmin: boolean;
    age?: number;
    checkIsAdmin?(): void;
}

let myOtherUser: MySuperUser;

// po odkomentowaniu
// Tutaj zastosuj "implement all members" lub "implement all required members" z IntelliJ'a
myOtherUser = {
    isAdmin: true,
    name: 'Michał'
}


// Zarówno interface, jak i type, może być implementowany przez class'ę
// Więc możemy używać interface’u do celów rodem z innych języków OOP.

// Interface może być używany do budowania innych:
interface MyHero extends MySuperUser {
    superPower: string
}

// Podobnie możemy zrobić z type (nieco inny zapis):
type Hero = SuperUser & { superPower: string }


// taki zapis nie będzie możliwy, ale tylko jeśli w tsconfig.json będzie istniał zapis: "strict": true
// myOtherUser.checkIsAdmin()

// To dobra opcja, ponieważ aby upewnić się, że metoda istnieje i bezpiecznie ją wywołać,
// potrzebujemy zapisu:
myOtherUser?.checkIsAdmin?.()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
