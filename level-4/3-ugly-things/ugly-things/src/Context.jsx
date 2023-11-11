import { createContext, useState } from "react";

const Context = createContext()

function ContextProvider(props) {
    const [uglyThingsList, setUglythingsList] = useState([])
    return (
        <Context.Provider value={{
            uglyThingsList
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context}