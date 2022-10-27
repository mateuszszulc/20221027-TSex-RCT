# Migracja projektu React
                         
Zakładając, że korzystaliśmy z [create-react-app](https://create-react-app.dev). Posłużymy się dokumentacją dotyczącą dodawania `typescript` do projektu:

- [adding-typescript](https://create-react-app.dev/docs/adding-typescript/)
  
Migrować będziemy projekt:
[6-power-your-project-with-typescript](../../6-power-your-project-with-typescript)

### Ważne

> Będziemy chcieli przeprowadzić migrację etapowo "krok - po - kroku"
                                                  

Zakładamy, że:
- musimy rozciągnąć migracje w czasie
- mamy na to kilka "sprintów"
- projekt jest tak duży, że nie możemy tego zrobić "za jednym razem"

### Kolejność działań (commits)

1. Instalacja [typescript](https://www.npmjs.com/package/typescript)
    - zastosujemy początkowe kroki podobnie jak w _adding-typescript_ w _CRA_
    - doinstalujemy pozostałe potrzebne paczki z typami
2. Wygenerowanie `tsconfig.json`
3. Zezwolenie na `implicitAny`
4. Zmiana pliku `index.js` na `index.tsx`
5. Zmiana pozostałych plików na `.tsx` i `.ts`
6. Dodanie odpowiednich typów dla istniejących plików
7. Odwiedzenie dokumentacji użytych narzędzi np. [usage-with-typescript](https://redux.js.org/usage/usage-with-typescript) dla Redux
8. Dodanie odpowiednich typów dla modeli danych w aplikacji
9. Sprawdzenie ustawień typesafety + przywrócenie `noImplicitAny`.


#### Więcej:
- https://react-typescript-cheatsheet.netlify.app/docs/migration/from_js  
- https://speakerdeck.com/amhinson/convert-a-react-native-project-to-typescript-in-10-minutes

#### Przydatny plugin:
- https://plugins.jetbrains.com/plugin/17063-regex-rename-files
