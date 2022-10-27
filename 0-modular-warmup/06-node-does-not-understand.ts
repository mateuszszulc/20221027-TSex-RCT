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
 let hello = String(415) + '!';

 console.log(Number(false))
 console.log(hello)
 console.log(typeof String(415))
 console.log(String(415).charAt(0))
 
 hello = '2.89'
 
 let questionNumber = <string><unknown>1 // type assertion
 let questionNumber2 = 1 as unknown as string // type assertion inny zapis
 
 // TS, Zaufaj mi wiem co robię to jest string (choćby prawda była inna)
 
 console.log(typeof questionNumber)
 console.log(typeof questionNumber2)
 
 console.log(questionNumber2.charAt(0))
 
 Promise.resolve(1).then((n) => {
     console.log(n)
 })
 
 console.log(hello);
 
 export {} // mówię TS że to jest hermetycznie zamknięty moduł
 

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
