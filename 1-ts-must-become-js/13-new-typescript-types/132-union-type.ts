/**
 *  Union type, to w Typescript "unia typów".
 *
 *  Połączenie kilku typów za pomocą operatora |
 *  Można to odczytywać dosłownie jako OR
 *
 *
 *  number | string
 *
 *  Oznacza to, że np. dana zmienna może być typu albo:
 *  - number,
 *  - string
 *
 *  Wydaje się to trochę dziwne, po co mi typ, który jest "albo / albo" jednak, w kontekście działania JS,
 *  nabiera to dużo więcej sensu.
 *
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
 * */

// PROBLEM:
// W JavaScript nie ma "przeładowania konstruktora" lub przeładowania metod.

// ROZWIĄZANIE:
// Union type (unia typów), to znaczy: dana zmienna/stała może być albo jednego typu, albo drugiego (...albo n-tego)

interface Currency { value: number, name: string }

class Order {

    payment(cashAmount: number | string | Currency) {
        if(typeof cashAmount === 'number') {

        } else if(typeof cashAmount === 'string') {

        } else {

        }
    }
}

new Order().payment(123.2);
new Order().payment('2333.99');
new Order().payment({value: 2003, name: 'USD'});

// PROBLEM:
// Mamy "flagi" obsługujące STAN i chcemy valid'ować ich poprawność.

// ROZWIĄZANIE:
// Union type, i to w kosmicznym wydaniu, bo tutaj dosłownie wartości są typem danych d(o . O)b !!
type Status = 'error' | 'loading' | 'pending' | 'success';

interface Request {
    data: unknown;
    status: Status;
}

const ajaxRequest: Request = { status: 'loading', data: {}  }


// UWAGA:
// W TypeScript istnieje "przeładowywanie" sygnatur typów.
// Można więc spotkać zapisy, gdzie typ będzie Overload.
// W praktyce jednak będzie to stosowane w plikach *.d.ts i używane tylko do definicji typów.
// Dalej mówimy tutaj o typach, zapisy te nie mają wpływu na runtime!

export {}


