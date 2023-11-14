import { createContext, useState } from "react";

const Context = createContext()

function ContextProvider(props) {
    const [formData, setFormData] = useState({
        title: '',
        img: '',
        description: ''
    })
    const [uglyThingsList, setUglythingsList] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setUglythingsList(prevList => [formData, ...prevList])
    }

    const uglyThingsBadges = uglyThingsList.map((badge, index) => {
        return (
            <div key={index}>
                <div>
                    <h3>{badge.title}</h3>
                    <h4>{badge.description}</h4>
                </div>
                <img src={badge.url} />
                <button>edit</button>
                <button>delete</button>
            </div>
        )
    })


    return (
        <Context.Provider value={{
            uglyThingsList,
            uglyThingsBadges,
            formData,
            handleChange,
            handleSubmit
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }