import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppSimpleStaticData } from './71-simple-static-data/AppSimpleStaticData'
import { AppUseStateAndHooks } from './72-use-state-and-hooks/AppUseStateAndHooks'
import { AppMyOwnHook } from './73-my-own-hook/AppMyOwnHook'
import { AppFunctionAsAChildComponent } from './74-function-as-a-child-component/AppFunctionAsAChildComponent'

import 'bulma/css/bulma.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/*
* Tutaj masz listę zadań do wykonania,
* W praktyce są to osobne foldery z `root` Component.
* */
const Run = {
    Task71: AppSimpleStaticData,
    Task72: AppUseStateAndHooks,
    Task73: AppMyOwnHook,
    Task74: AppFunctionAsAChildComponent,
}

root.render(
  <React.StrictMode>
      {/*
        Tutaj poniżej podmieniasz numer zadania np. Run.Task73
        i wtedy je widać po `npm start` w przeglądarce i można zacząć rozwiązywać.
       */}
      <Run.Task72 />
  </React.StrictMode>
);
