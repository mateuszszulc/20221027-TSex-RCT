/**
 * TypeScript sprawdza strukturę danych i ich kształt.
 *
 * Co oznacza, że możemy bezkarnie robić coś bardzo dziwnego...
 * */

// Zauważ, że: klasa jest zapisem pozwalającym jednocześnie na użycie jako typ i wartość.
class Dog {
    name: string;
    breed: string;
}

class Cat {
    name: string;
    breed: string;
    // hello: string;
}

const barkingDog: Dog = new Dog();
const barkingCat: Cat = new Dog(); // Ok ---- JAK TO ?! nie ma błędu ?!

// Nie ma — bo TypeScript jest strukturalnie (a nie nominalnie) typowany.

// Zapis powyżej nie przejdzie w językach Nominalnie typowanych, bo Kot i Pies — to 2 różne rzeczy.

/**
 * TypeScript patrzy na to, czy typ Cat zawiera się w typie Dog,
 * czyli, innymi słowy, czy Dog ma wszystkie pola wymagane przez Cat.
 * jeśli tak — to pozwala na przypisanie.
 *
 * Nie pozwoli, jeśli dodasz choć jedno pole więcej do Cat — wtedy, Dog nie posiadając wymaganego pola czy metody,
 * nie da się przypisać do Cat.
 *
 * Wszystko jednak sprowadza się do porównania struktury danych.
 * */

export { }
