/**
 *
 * Niestety zapis z TypeScript:
 *
 *  x as Type
 *
 * Nie ma nic wspólnego z rzutowaniem. Wiemy już o tym, że mieć nie może, bo TS nie ma w runtime
 * To tylko "Asercja typu" - a to znacząca różnica.
 *
 * Zobaczmy na przykładach
 * */

interface Payment {
    value: number;
    currency: 'PLN' | 'USD' | 'EUR';
    method: 'by-cash' | 'card' | 'pay-service';
}



let payMeNow: Payment;

// To oczywiście wygeneruje błąd:
// payMeNow = {}

// ale jeśli zapiszemy to tak:
let payMeNowFake = {} as Payment

// To wtedy "oszukamy" TS, że to obiekt spełniający wymagania interface Payment, zobacz:
payMeNowFake.method.toUpperCase() // to wygeneruje Runtime Error !

// payMeNowFake to dalej pusty obiekt, ale powiedzieliśmy TS'owi, zaufaj mi — wiem co robię.
// To jest Payment, nie czepiaj się :)!

// W tym układzie to asercja typu, nie żaden type casting!
// O type-casting, prawdziwym i runtime'owym w JS można mówić tylko przy typach prostych,
// Każdy Typ można rzutować na typ prosty: number, boolean lub string, korzystając z klass obiektowych dla tych typów
// (też ściągnięte z Java, tam typy proste mają również konstruktory obiektowe)

// Przykłady:

// Runtime type cast do Number:
console.log(Number({}))
console.log(Number('203'))
console.log(Number(true))
console.log(Number(false))

//  Runtime type cast do Boolean:
console.log(Boolean({}))
console.log(Boolean(NaN)) // bo falsy
console.log(Boolean(''))
console.log(Boolean(' '))

export {}
