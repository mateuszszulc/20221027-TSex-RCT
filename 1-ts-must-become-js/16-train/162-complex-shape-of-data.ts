/**
 * Zadanie 1.6.2:
 *
 * Bez ingerencji w szczegóły implementacji,
 * przepraw zapisy z :any w odpowiednie typy - zgodne z założeniami programu.
 * ... tym razem mamy do czynienia z bardziej złożonymi typami
 *
 * po poprawieniu typów, zmień implementację, zastosuj funkcję `joiner`
 * - tam gdzie to możliwe (np - połączenie imie + nazwisko)
 * następnie:
 * - utwórz odpowiednie obiekty i przekaż do `giveFullName` tak aby potwierdzić poprawność działania kodu
 * */

function joiner(strTuple: [string, string]): string {
    return strTuple[0] + ' ' + strTuple[1];
}

// joiner(['', ''])

export type Sex = 'male' | 'female'

export interface User { 
    name: string, 
    lastName: string, 
    sex: Sex, 
    vipStatus: boolean 
}


function giveFullName(myUser: User): string {
    const fullName: string = myUser.name + ' ' + myUser.lastName;
    let prefix = '';
    let suffix = '';
    if (myUser.sex === 'female') {
        prefix = 'Pani';
    } else if (myUser.sex === 'male') {
        prefix = 'Pan';
    }
    if (myUser.vipStatus) {
        suffix = ' - the VIP'
    }
    return prefix + ' ' + fullName + suffix;
}

giveFullName({
    lastName: 'Kowalski',
    name: 'Michał',
    sex: 'male',
    vipStatus: true
}) //?

export { };

