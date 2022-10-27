# 7.2 Use state and hooks

## Zadanie:

Chcemy zbudować aplikację, która nie tylko pobierze z serwisu, ale i wyświetli odpowiednio użytkowników, pozwalając ich wyszukiwać za pomocą [SearchBox](./shared/SearchBox.tsx)

Wykorzystaj odpowiednie `hooks` i połącz logikę, przygotuj odpowiednie typy dla danych i dla obsługi `props` w komponentach.

Połącz logikę tak, aby faktycznie po starcie aplikacji:
- [ ] Dane w `UsersPanel.tsx` pobierały się z serwisu [usersService](./services/users.service.ts)
- [ ] Dało się "odfiltrowywać" (szukać) po `.name` dla użytkownika za pomocą `SearchBox.tsx`
