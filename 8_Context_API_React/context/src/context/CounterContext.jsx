// 1 - Criando contexto
import { Children, createContext, useState } from "react";


export const CounterContext = createContext()

// 2 - Criando provider
export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(5)

    return(
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}

