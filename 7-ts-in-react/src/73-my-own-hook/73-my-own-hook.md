# 7.3 My Own Hook

## Zadanie:
Zaprojektuj własnego hooka: `useQuotes('')`.

Jego zadaniem będzie, po użyciu w komponencie, 
- pobranie danych z `swQuotesService.getAll()`
- filtrowanie danych po przekazanym parametrze `('')`
- uruchomienie zapytania w akcji lifecycle `onMount`

Przykładowo: cytaty tylko _Yoda_, powinno dać się uzyskać poprzez wywołanie hooka razem z nazwą autora np: 

```javascript
useQuotes('Yoda')
```

Z kolei tak:
```javascript
useQuotes('')
```
dostaniemy wszystkie cytaty.

Zaimplementuj swoje rozwiązanie w komponentach i potwierdź czy działa.
Użyj odpowiednich typów.
              
#### Bonus (zadanie dodatkowe):
- Jak zaprojektować `hook`'a tak, aby dało się go wykorzystać do różnych modeli danych, przykładowo:
  - pytamy różne _endpoints_ i możemy to konfigurować z poziomu wywołnia `hooka`
  - z _back-endu_ wracają dane różnego typu
