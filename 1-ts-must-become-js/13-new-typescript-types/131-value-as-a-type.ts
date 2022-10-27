/**
 *
 * Dowolna wartość (np. typu prostego) w JS może być typem w TS.
 *
 * W ten sposób kształt danych pozostaje niezmienny w zakresie tej "wartości / typu"
**/


// Zobaczmy wnioskowanie na wartości:
let myString = 'Hello String'

// myString = '!'

// Widzimy wyraźnie po najechaniu, że myString: string.
// Wszystko jasne.

// Jednak jeśli zrobimy tak:
const myOtherString = 'Super!'

//myOtherString = '?'

// Okaże się, że wnioskowanie pokaże:
// myOtherString: "Super!"

// Oznacza to, że myOtherString może mieć tylko jedną wartość: "Super!"
// i patrząc na tego `const` - jest to prawda.

// Dostajemy więc niejako typ, oznaczający konkretną wartość
// To tak samo jakbyśmy zapisali:

let myNumber: 399;

// W tym układzie myNumber może przyjąć tylko i wyłącznie wartość 399 !
// Błąd:
// myNumber = 112
// Ok:
myNumber = 399

// Jest to trochę nielogiczne, po co nam taki typ, skoro sam zapis:
// const myNumber = 399
// w zupełności by wystarczył i odgrywa tę samą rolę!

// Zapis nabiera sensu w połączeniu z tzw. Union Type, o którym będziemy mówić później
let myLuckyNumber: 7 | 5 | 3 = 3
// Błąd:
// myLuckyNumber = 1
// Ok:
myLuckyNumber = 5
myLuckyNumber = 7
myLuckyNumber = 3

// W tym układzie, zamiast przypisywać coś do rozległego typu :number - mamy wybór tylko spośród 3 wartości!


// Nie można jednak (dość przytomnie) iść o krok dalej i uzależniać typu,
// od istniejących wartości w kodzie:

const myStringValue = 'value!'

// To nie zadziała:
// let myValue: myStringValue = 'value!'

// Ponieważ wnioskowany typ to i tak: 'value!'
// Jest sposób na pozyskanie typu z już "wnioskowanych" wartości
// możemy to zrobić operatorem typeof (ale w kontekście TS — czyli typu)
let myValueBasedOnInferredTypeOfTheValue: typeof myStringValue;


export {};
