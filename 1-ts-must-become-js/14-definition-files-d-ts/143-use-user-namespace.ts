// Specjalny zapis importu jedynie jako typ
// Będzie to usunięte w momencie, gdy TS stanie się JS.
import type { User } from './142-sample-namespace'
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export

const user: User = {
    get info() {
        return {
            id: 'fddbfd42-5a7c-4fff-8421-c978e4e509f0',
            userName: 'MyUser',
            description: 'no description provided'
        }
    }
}

/**
    Import `type` zapobiegnie przy pisaniu tego typu składni:
    console.log(user instanceof User)

    Chodzi o to, że 142-sample-namespace definiuje klasę, która teoretycznie może być dostępna
    np. w Przestrzeni globalnej.

    Faktycznie — nie posiada implementacji! I my o tym wiemy, dlatego nie chcemy, aby była traktowana jako wartość.
    Czyli faktyczna "class"

    Więcej w module [4-classes](/4-classes)
 **/
