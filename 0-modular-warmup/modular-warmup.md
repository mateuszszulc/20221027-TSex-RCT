# Modułowa rozgrzewka.

> Twój TypeScript - *ZAWSZE*, _by the end of the day_ musi stać się JavaScript'em  
> 
> _~ Paulo Typescriptelho_

W roku `2009` kiedy wydany zostaje **Node.js** jedną z jego _breaking changes_ w stosunku do klasycznego działania `JS` są moduły. 

- _Moduł_ - w świecie `JS` odnosi się do osobnego pliku, którego zakres "nie wylewa się" na zewnątrz. To sam programista determinuje, które wartości będą dostępne na zewnątrz. Inny moduł może je wtedy jawnie zaimportować.

**Node.js** wprowadza własną składnię obsługi modułów tzw. `commonJS`.

```javascript
const sth = require('./module')

moudule.exports = { 
  sthElse: 200
}
```  

---

W roku `2015` wychodzi odnowiony **JavaScript** z modułami. Składnia nazywa się `esm` (_Ecma Script Modules_) i różni się od tej z `commonjs`.

```javascript
import sth from './module.js'

export const sthElse = 200;
``` 

---

> _Jak to się ma do `TypeScript`?_


## Typescript a moduły

Generalnie w `TS` używamy "nowoczesnej" składni `esm` rodem z _bunder'ów_ ponieważ nie trzeba na końcu pliku dopisywać rozszerzenia `.js`

Więc importy w `TS` wyglądają tak:
```javascript
import sth from './module'

export const sthElse = 200;
``` 

Warto poznać składnię różnych podejść modułowych w `JavaScript`, ponieważ później, w zależności od ustawień `tsconfig.json` - będzie generowany nasz wynikowy `JS` z wybranym przez nas sposobem importowania / eksportowania modułów. Domyślnie będzie to budowanie do `commonjs`.
