/**
 *
 * Jeśli chodzi o `interface` i `type` - reprezentują one coś, co finalnie w procesie
 * transpilacji — zniknie z kodu wynikowego. Nie istnieje w runtime.
 *
 * class — to jednoczesne zapisanie typu oraz wartości. Istnieje natywnie i będzie w kodzie wynikowym.
 */

// Zasadnicza różnica między type a interface:

// type może być aliasem typu prostego lub unią typów
type Money = number
type Flag = 'on' | 'off' | 'unset'
type SomeMoney = {
    value: number
}

// interface może być TYLKO OBIEKTOWY !
interface MyMoney {
    value: number
}

// Różnica jest również podczas rozszerzania funkcjonalności type i interface
// Dobrze to widać w dokumentacji:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

// Zarówno type jak interface, wykorzystujemy "wpinając" w istniejącą już logikę np.
const simpleSample: MyMoney = { value: 300 }
const simpleSample2: SomeMoney = { value: 100 }


//  Klasa to jednocześnie typ i wartość:

class MoneyAmount {
    constructor(public value: number) {}
}

// Dzięki temu możemy tworzyć instancje obiektów:
const moneyInstance = new MoneyAmount(200);
const moneyInstance2 = new MoneyAmount(300);

// I korzystać runtime'owo z instanceof:
console.log(moneyInstance instanceof MoneyAmount)
console.log(moneyInstance instanceof Object)

// Typescript nas pilnuje i wie jakie pola mają instancję:
console.log(moneyInstance.value);
// operacja niedozwolona:
// moneyInstance.newDynamicField = 'Hello!'
