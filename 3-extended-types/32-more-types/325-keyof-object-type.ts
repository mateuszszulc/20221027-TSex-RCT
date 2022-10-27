/**
 * Wyciąganie nowych typów na bazie istniejących.
 *
 * Przykładowo, potrzebujemy typ reprezentujący listę możliwych akcji
 * z interfejsu.
 *
 * https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
 * https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
 * */

interface UserActions {
    makeUser(name: string): void;
    getUser(id: number): string;
    updateUser({} : {name: string, age: number}): string;
    deleteUser(id: number): void;
}

type PossibleUserActions = keyof UserActions;


const actionFromSerializer: PossibleUserActions = 'makeUser';
const actionFromSerializer2: PossibleUserActions = 'getUser';


// A co jeśli obiekt z danymi już istnieje i jest wnioskowany?!
const myFancyImagination = {
    rabbit: 'white',
    john: 'Wick',
    alice: 'from->wonderland',
    that: 'is it?'
}

// ... hmmm a kto bogatemu zabroni łączyć wcześniej poznane operatory?
const myOptions: keyof typeof myFancyImagination = 'rabbit';

export {}
