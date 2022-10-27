/**
 * Zapis (as const) to tzw. const-assertions
 *
 * Pozwala nam z istniejącego już obiektu, zrobić niemutowalny.
 *
 * https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const
 * **/


const user = { name: 'Michał', tags: ['sport'] }

user.name = 'Kasia'
user.tags.push('bicycle')

// To jest ok, ponieważ to referencja jest stała:
// Prowadzi jednak do obiektu w pamięci, ale jest mutowalny (tak jak w Java)
// teraz będzie źle:
// user = { name: 'Krzysiek' }

// Jednak jeśli zrobimy tak:
const myOtherUser = { name: 'Basia', tags: ['rock'] } as const

// Operacje niedozwolone! myOtherUser jest teraz niemutowalny!
// myOtherUser.name = 'Krzysiek'
// myOtherUser.tags.push('pop')


// Jest to równoznaczne z takim obrazem sprawy (jeśli chcemy zdefiniować typ):
interface NamedUser {
    readonly name: string
    tags: readonly string[]
}

const myTypedUser: NamedUser = { name: 'Katarzyna', tags: ['beauty', 'adventure'] }

// Operacje niedozwolone:
// myTypedUser.name = 'Ania'
// myTypedUser.tags.push('new')



export {}
