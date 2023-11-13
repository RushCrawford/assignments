import { createContext, useState } from "react";

const Context = createContext()

function ContextProvider(props) {
    const [formData, setFormData] = useState({
        title: '',
        img: '',
        description: ''
    })
    const [uglyThingsList, setUglythingsList] = useState('test context')

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }
        ))
    }

    return (
        <Context.Provider value={{
            uglyThingsList,
            setUglythingsList,
            formData,
            handleChange
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }