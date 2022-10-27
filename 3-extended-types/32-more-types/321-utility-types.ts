/**
 * TypeScript oferuje w swoim arsenale różne pomocnicze typy generyczne,
 * tzw. Util Types
 *
 * Za których pomocą, tworzymy nowe typy na podstawie istniejących.
 * Modyfikujemy zachowanie istniejących typów.
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html
 * */

interface Address {
    street: string;
    no: number;
    houseNo?: number;
}

interface Client {
    name: string;
    lastName: string;
    tags: string[];
    address: Address;
}

// Partial
// Przerabiamy wszystkie pola na opcjonalne:
type OptionalClient = Partial<Client>;
const client: OptionalClient = {};

// Required
// Przerabiamy wszystkie pola na wymagane:
type FlatAddress = Required<Address>;
const flatAddress: FlatAddress = { no: 10, houseNo: 1, street: 'Mickiewicza' };

// Readonly
// Przerabiamy wszystkie pola na "tylko do odczytu":
type VipClient = Readonly<Client>;
const vipClient: VipClient = {
    address: { no: 20, street: 'Dąbrowska' },
    name: 'Krzysztof',
    lastName: 'Jarzyna',
    tags: ['szczecin']
}
// Operacja niedozwolona !!
// vipClient.name = 'John';


// Record
// Tworzymy Typ Obiektowy gdzie klucze wymienione jako Union - będą jego polami,
// A wartości będą posiadać drugi z podanych w generyku Record typ:
const myRecord: Record<'superClient' | 'buyer' | 'contact', OptionalClient> = {
    superClient: { name: 'John' },
    buyer: {tags: ['trusted', 'wealthy']},
    contact: { lastName: 'Kowalsky' },
}

// Pick
// Tworzymy "podzbiór" typu obiektowego, wybierając z obiektu tylko interesujące nas pola
type User = Pick<Client, 'name' | 'lastName'>
const myUser: User = { lastName: '', name: '' }

// Omit
// Podobnie jak Pick, jednak od drugiej strony: wykluczamy wartości z naszego podzbioru.
type HouseAddress = Omit<Address, 'houseNo'>
const house: HouseAddress = { no: 1, street: 'Zamojskiego' }


export {}
