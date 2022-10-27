/**
 *
 * Próba uruchomienia tego pliku w Node.js — zakończy się fiaskiem.
 * Próba uruchomienia tego pliku w Przeglądarce — również zakończy się niepowodzeniem!
 *
 * node 06-node-does-not-understand.ts
 *
 * nie zadziała !
 *
 * Pomimo tego, że z pkt widzenia TS — jest ok, to nie jest to JavaScript.
 * Developerski TypeScript musi więc stać się Produkcyjnym JavaScript'em.
 *
 * Środowiskiem produkcyjnym może być: Przeglądarka albo Node.js !
 * Kompiler (transpiler) TypeScript jest w tym układzie "wpinany" w nasz deweloperski pipeline.
 * */

const hello: string = 'Hello';

console.log(hello);

/*
 - co musimy zrobić, aby uruchomić kodzik?

 - mamy 2 opcje:
    1. Instalujemy (npm install typescript) + konfigurujemy i uruchamiamy transpiler: tsc

    2. Instalujemy globalnie paczkę ts-node -> jest to REPL dla TypeScript - wtedy plik zadziała na (ts-node nazwa.ts)
* */

// #Task:
// Wykonaj obie opcje. Jednak typescript, zainstaluj również globalnie jako:
// npm install -g typescript

// wtedy będziemy mieli dostęp do "typescript compiler" = tsc
