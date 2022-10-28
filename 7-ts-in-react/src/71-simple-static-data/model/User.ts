
export interface User {
    id: number;
    website?: string;
    name: string;
    email: string;
    company?: {
        catchPhrase?: string
    };
}

type UpdateUser = Omit<User, 'id'>

const user: UpdateUser = {
    email: '',
    name: ''
}

// Obrona podejścia "walk like a duck" (strukturalne typowanie w TS)

// const user: User = {
//     id: 0,
//     name: "",
//     email: ""
// } 

// Nie pozwoli nam użyć czegoś co istnieje na innej instancji (ale nie istnieje w założeniach tego interfejsu)
// console.log(user?.company?.name)