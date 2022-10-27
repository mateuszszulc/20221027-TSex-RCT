// Oszukujemy tsc, że mamy React zainstalowany (w rzeczywistości to jedynie definicje)
import * as React from './React'
// Jednak import zostanie, więc gdybyśmy wpięli ten plik w projekt Reaktowy przed krokiem "bundle" - to by zadziałało.
/**
 * Typescript rozumie składnię "JSX", razem z opcją "jsx" w tsconfig.json
 *
 *
 * Spróbuj wykonać na tej ścieżce:
 * ```
 * tsc
 * ```
 *
 * // Jeśli nie byłoby importu u góry to:
 * Dostaniemy error, związany z brakiem React (bo nie mamy go tutaj zainstalowanego - w ./15-bonus-...)
 * Jednak pomimo tego, JSX zostanie przepisany poprawnie na JS
 *
 * Teraz "zapewniamy" TS o React z odpowiednim plikiem definicji typów.
 * W wariancie pokazowym to wystarczy.
* */

export function HelloWorld() {
    return (
        <div className="hello-world" >
          <p style={{color: 'blue'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias animi aut commodi facilis itaque obcaecati! Accusamus autem cumque enim ex harum in, maiores mollitia repellat ullam, voluptas voluptate voluptates!
          </p>
        </div>
    )
}
