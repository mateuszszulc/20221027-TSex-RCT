// @ts-nocheck
// Komentarz powyżej wskazuje kompilerowi typescript — że ma nie analizować tego pliku...
/**
 * Zadanie 1.6.1:
 *
 * Zadanie ma 2 etapy:
 *
 * 1. PO wykonaniu poprawek w kodzie dla błędów, które są widoczne na 1 rzut oka.
 * 2. Usuń z góry: // @ts-nocheck i popraw kod tak by nie było błędów zgłaszanych przez TS
 *
 * [AD 1.] Popraw zapisy tak, aby doprowadzić do prawidłowego wyświetlenia:
 *
 * 'You reached the end! - BRAVO'
 * na konsoli...
 *
 * [AD 2.] oraz: pozbądź się wszystkich błędów z kompilatora TS
 *
 * // @ts-nocheck
 * // @ts-ignore
 * */

const MyHello = 'Hello';
console.log(MyHello, 'World')

MyHello = 'Serious';
const help = "HelpMe out!"

let do = true;
const LARGE-number = 2048

tutaj miał być komentarz, że addNumbers musi zwracać number !
function addNumbers(a , b): number {
    return a + b
}

let result: string;
result = addNumbers(10, 20);

console.log('Result is:', result);

console.log(helloStranger())

const helloStranger = (): string => 'Hello Stranger !';

function randomNumber(): string {
    return Math.random() * 100;
}

console.log('You reached the end! - BRAVO')

export {};
