import { createContext } from "react"
import useCrud from "../hooks/useCrud"

const Context = createContext()

function StudantProvider({children}){
    const {register} = useCrud()

    return <Context.Provider value={{register}}>{children}</Context.Provider>
}

export  {Context, StudantProvider};