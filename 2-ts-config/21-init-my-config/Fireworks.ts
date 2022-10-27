/**
 *
 * Zapis funkcji jako interface nie powinien Cię dziwić.
 *
 * Po 1:
 *  - Funkcje w JS to też obiekty (tylko specjalnego przeznaczenia i zachowania)
 *
 * Po 2:
 *  - Interfejs nie może być typu prostego lub aliasować / rozszerzać typ prosty (wiec jest obiektowy tylko!)
 *  - Więc musi istnieć zapis pozwalający na zdefiniowanie go jako: interfejs funkcji
 *
 */

export interface Fireworks {
    (): string
}
