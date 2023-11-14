import { createContext, useState, useEffect } from "react";
import axios from 'axios'

const Context = createContext()

function ContextProvider(props) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imgUrl: ''
    })
    const [uglyThingsList, setUglythingsList] = useState([])

    useEffect(() => {
        axios.get('https://api.vschool.io/russellcrawford/thing')
            .then((res) => {console.log(res.data)})
            .catch((err) => {console.log('ERROR', err)})
    }, [])

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

        setUglythingsList(prevList => [formData, ...prevList]);

        axios.post(`https://api.vschool.io/russellcrawford/thing`, formData)
            .then((response) => { console.log('resonse', response) })
            .catch((error) => { console.log('ERROR', error) })

    }


const uglyThingsBadges = uglyThingsList.map((badge, index) => {
    return (
        <div key={index}>
            <div>
                <h3>{badge.title}</h3>
                <h4>{badge.description}</h4>
            </div>
            <img src={badge.imgUrl} />
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