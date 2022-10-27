/**
 * TypeScript wprowadza słowo kluczowe enum, które jest specjalnie traktowane.
 *
 * Kod z Enum musi pojawić się w wynikowym JS, aby działać w Runtime.
 * Sprawdź transpilowaną wersję tego pliku.
 *
 * https://www.typescriptlang.org/docs/handbook/enums.html
 * */

enum QuickEnum {
    ZERO,
    ONE,
    TWO,
    TREE
}

let eTree = QuickEnum.TREE;
let eTwo = QuickEnum.TWO;

console.log(eTree)
console.log(eTwo)
console.log('Reverse mapping', QuickEnum[eTree])


// Oczywiście możemy podawać własne wartości dla kluczy:
// P.S. nie muszą to być numbers
enum Apartment {
    BIG = 100,
    MEDIUM = 90,
    SMALL = 10,
    LITTLE = 3
}

export {}
