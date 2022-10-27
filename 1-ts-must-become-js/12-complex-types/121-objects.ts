/**
 * JavaScript posiada tzw. literały obiektowe.
 * Pozwalają one utworzyć dany obiekt — bez potrzeby definiowania jego struktury
 * Tak jak dzieje się to w językach zorientowanych obiektowo, które używają klas.
 *
 * Na początek prosty przykład....
 */

// Robiąc klasyczny obiekt w JS, wystarczy nam następujący zapis:
const myObject: { name?: string } = { };

// Teraz, spodziewamy się, że można dynamicznie rozszerzać obiekt o nowe pola i wartości
// property: value

// W klasycznym JS wystarczy dopisać nowe pole i przypisać mu wartość
// Okazuje się jednak, że w TypeScript to niemożliwe:

// Odkomentuj, aby sprawdzić:
myObject.name = 'toolbox';
// myObject.lastName = 'toolbox';

/*

Dzieje się tak poprzez "wnioskowanie typów" = inferred types

TypeScript określił już kształt obiektu na podstawie pierwszego przypisania.
Nie miał on wtedy żadnych pól, dlatego nie da się go w ten sposób rozszerzyć.
Wynika to z faktu, iż nie określiliśmy, że obiekt może posiadać pole `name` i jaką ono przyjmie wartość

 */

// Zobaczmy jak to zrobić z polem wymaganym:
const namedObject: {name: string} = {name: 'Michael'};

// Lub z polem, które jest opcjonalne:
let otherNamedObject: {name?: string};

otherNamedObject = {};
otherNamedObject.name = 'scissors';
