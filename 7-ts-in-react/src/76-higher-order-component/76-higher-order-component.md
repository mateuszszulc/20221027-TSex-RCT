# 7.6 Higher Order Component
   
### Background:
Wyobraźmy sobie, źe jest smutna era _Dinozaurów_, w `React` nie mamy `hooks` i nie jesteśmy poradzić sobie z istniejącym problemem inaczej jak dzięki wykorzystaniu kompozycji `HOC` (_Higher Order Component_)
         
### Problem:
Rozdajemy datę: `todayIs: Date` w dół do wszystkich potrzebujących jej komponentów bezpośrednio z [AppWithHigherOrderComponents](./AppWithHigherOrderComponents.tsx).

W przypadku [ShowUSADate](./components/ShowUSADate.tsx) oraz [ShowEUDate](./components/ShowEUDate.tsx) nie stanowi to większego wyzwania i jest ok. Ponieważ mamy je w relacji `parent-child`. 
Problem stanowi sposób dostarczenia `props`'a `date` do komponentu [IAlsoNeedADate](./components/DeeplyNestedComponentStructure/IAlsoNeedADate.tsx). Zachodzi tutaj zjawisko "props drilling" ponieważ musimy przekazać tego `props`'a przez kilka komponentów pośrednich, które w ogóle z niego nie korzystają.

### Zadanie:
Przygotuj komponent wyższego rzędu: `withDate` z odpowiednim typowaniem, tak aby można było nim otoczyć wrzucany komponent bazowy i dostarczyć do jego wnętrza `date` jako `prop`.

