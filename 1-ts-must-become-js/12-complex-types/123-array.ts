/**
 * Tablice są kolekcjami elementów o różnych typach.
 * W JavaScript — zawsze są one dynamiczne.
 *
 * Nawet określając wielkość tablicy, używając konstruktora,
 * można ją później zmienić dodając elementy
 *
 *
 * W tablicy elementy mają określony porządek i można się do nich odnieść po indeksach.
 * Tablica tworzona jest najczęściej za pomocą znaków: [] - to tzw. literał tablicowy
 * To wystarczy (nie używamy konstruktora).
 *
 * TypeScript pozwala nam na dokładnie określenie, jakie typy elementów będą przechowywane w tablicy.
 * */

const myNumbers = [1, 2, 3, 40];

// Poniższy zapis nie zadziała
// Generalnie TypeScript już nas do tego przyzwyczaił — wnioskowanie typów!
// myNumbers.push('234');

// Jeśli chcemy zdefiniować sami, jakie elementy przechowuje tablica:
const secretWords: string[] = [];

// Dodanie elementów do tablicy:
secretWords.push('lightning');
secretWords.push('thunder');
// tutaj również jesteśmy "pilnowani":
// secretWords.push(1233);

// Co, jeśli chcemy mieć tablice z 2 (i więcej) typami:
const twoKindsOfTypes: (string | number)[] = [];

twoKindsOfTypes.push(1123);
twoKindsOfTypes.push('23.2223');

// Więcej o tablicach:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


/** Typowanie dla tablicowych: Higher Order Functions */

// iteracja po elementach:
twoKindsOfTypes.forEach((value: string | number) => {
    console.log(value);
})

// odfiltrowanie elementów spełniających dany warunek:
const filtered = myNumbers.filter((value: number) => value > 10);

console.log(filtered);
// potwierdzenie, że po filtrowaniu tablica `myNumbers` nie uległa zmianie:
console.log(myNumbers);

// mapowanie elementów:
// wartość generyczna <string> nie musi być podawana jawnie (będzie wnioskowana)
// możesz z + Ctrl kliknąć w .map aby zobaczyć definicję typu
const mappedArray = myNumbers.map<string>((value: number) => 'Hello ' + value);

console.log(mappedArray)

export {}
