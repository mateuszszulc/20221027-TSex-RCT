/**
 * Często w JavaScript łączymy ze sobą kilka wartości, z różnych obiektów
 * w jeden obiekt z wieloma polami / metodami etc.
 *
 * Czy musimy za każdym razem "redefiniować" typ, żeby osiągnąć jego aktualny (inny) kształt ?!?!
 *
 * Na szczęście Nie,
 * z kilku typów możemy złożyć jeden:
 * */

// Interface można oczywiście połączyć konwencjonalnie za pomocą extend:

interface Numeric { luckyNumber: number }
interface Winner { userName: string }

interface NumericWinner extends Numeric, Winner {}

const lottery: NumericWinner = { luckyNumber: 7, userName: 'Janusz' }


// Jednak interfejsy można "rozszerzać" w czasie i nie jest to błąd. Przykładowo

interface Work { payment: number }
interface Work { jobName: string, placeOfWork: string }
interface Work { isCool?: boolean }

const mySuperJob: Work = { placeOfWork: 'company', jobName: 'programmer', isCool: true, payment: 15000 }


// Nie da się tego samego zrobić z typami:
type Money = { value: number };
// Odkomentuj poniższe, żeby zobaczyć błąd:
// type Money = { currency: string };

// Typy da się jednak łączyć ze sobą w inne, operatorem & - niezależnie czy to type, czy interface

type MySuperMoneyWork = Work & Money;

const myNewTypedThing: MySuperMoneyWork = { value: 1, ...mySuperJob };

// Łączymy poznane dotychczas zapisy i wykorzystujemy tutaj:
type WorkOnTheLottery = {isAwesome: boolean} & Numeric & Winner & Work;

// const whatIsThis: WorkOnTheLottery = {  }

export {}
