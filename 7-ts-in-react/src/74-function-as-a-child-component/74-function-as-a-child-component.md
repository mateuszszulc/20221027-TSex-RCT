# 7.4 Function As A Child

## Zadanie:
Wyodrębnij logikę ładowania danych z serwisu tak, aby była "re-używalna" pomiędzy komponentami i mieszkała tylko w jednym miejscu. Zadbaj o to, aby dotychczasowy UIX nie ucierpiał po refactoring'u.

Aktualnie każdy z komponentów: `MemorableQuotes`, `OnlyYodaQuotes` pobiera dane osobno.

Chcemy zachować ten układ komponentów, obydwa zostają.
Jednak potrzebujemy jeden dodatkowy komponent jako `Provider` danych, z których obydwa `*Quotes.tsx` korzystają.

1. Zamień stan danych komponentów na przekazanie tych danych przez `props`
2. logika ładowania danych z `starWarsQuotesService.getAll()` w tej formie może istnieć w jednym miejscu w kodzie.
3. Przygotuj to miejsce - specjalny komponent, który "rozda", te dane do `MemorableQuotes`, `OnlyYodaQuotes` w postaci `props`
4. Wykorzystaj zapis `function` as a `children` (child).
5. Popraw typowanie w projekcie (nie powinniśmy mieć żadnych `:any` i wyraźnie widzieć model danych)



