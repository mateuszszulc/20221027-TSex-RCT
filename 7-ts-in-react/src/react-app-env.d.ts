/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
        // podpowiadaj mi składnie do:
        // process.env.REACT_APP_TITLE - że to jest i że to jest string !
        readonly REACT_APP_TITLE: string
    }
}