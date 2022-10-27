/**
 * Co, jeśli chcemy mieć obiekt — który jest dynamiczny ?
 * Co, jeśli to ma dalej działać jak w JS... jednak coś tam chcielibyśmy mieć z tego typechecking :)
 *
 * ... i o tym twórcy TS — pomyśleli.
 * */

interface DynamicObject {
    [key: string]: string
}

const dynamicObject: DynamicObject = {
    sample: 'field'
}

dynamicObject.other = 'field'


// Jako klucze obiektu, możesz zastosować tylko 3 typy:
// symbol, string, number
interface AllKindsOfKeys {
    [key: symbol]: string,
    [key: number]: string,
    [key: string]: string,
}


interface ArrayLike {
    [key: number]: (string | number)[]
}

const arrayLikeObject: ArrayLike = {
    1: ['this', 'is', 'it'],
    2: [2, 3, 4, 1, '2'],
    3: [9, 1, 2, 33]
}

// Bardziej elastyczne podejście dzięki połączeniu [key] + generic type

interface ArrayLikeGeneric<T> {
    [key: number]: T
}

const stringMapper: ArrayLikeGeneric<string> = {};
const booleanMapper: ArrayLikeGeneric<boolean> = {};
const tupleMapper: ArrayLikeGeneric<[number, string]> = {
    0: [1, 'make'],
    1: [2, 'it-up'],
};

interface BooleanArrayLike extends ArrayLikeGeneric<boolean> {}

const booleanArrayLike: BooleanArrayLike = {
    0: true,
    1: false
}

export {}
