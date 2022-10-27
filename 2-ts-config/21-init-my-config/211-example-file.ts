/**
 *
 * Poleceniem `tsc --init`, generujemy plik tsconfig.json
 *
 * Zadanie:
 *
 * Upewnij się, że jesteś na tej ścieżce [21-init-my-config](/2-ts-config/21-init-my-config/) w terminalu.
 * 1. Wykonaj polecenie:
 *
 * ```
 * tsc --init
 * ```
 *
 * jeśli nie działa — zainstaluj globalnie typescript:
 *
 * ```
 * npm i -g typescript
 * ```
 *
 * i spróbuj ponownie.
 *
 * 2. Ustal w tsconfig.json:
 *  - "outDir": "dist"
 *  - "rootDir": "src"
 *
 * 3. Spakuj istniejące pliki do katalogu ./src/*.ts
 *
 * 4. Uruchom polecenie "tsc" w terminalu i sprawdź, co się stanie.
 * */

import type { Fireworks } from './Fireworks'

const myFunction: Fireworks = () => 'Boom!'

console.log(myFunction())


