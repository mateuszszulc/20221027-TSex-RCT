/**
 * Ten plik to zestawienie deklaracji.
 *
 * Nie będzie zawierał ŻADNYCH danych.
 * jedynie informacje o typach, czyli tym jaki kształt będą miały nasze dane!
 *
 * Zauważ, że jest to bardzo wygodne, ponieważ TypeScript service — może korzystać z tych plików zarówno
 * w projektach JS, jak i TS !.
 * */

export declare interface MathInterface {
    sum(a: number, b: number): number;
    divide(a: number, b :number | 0): number;
}

declare let mathOLib: MathInterface;

