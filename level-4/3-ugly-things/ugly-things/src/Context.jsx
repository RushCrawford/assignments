import { createContext, useState, useEffect } from "react";
import axios from 'axios'

const Context = createContext()

function ContextProvider(props) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imgUrl: ''
    })
    const [uglyThingsList, setUglyThingsList] = useState([])
    
    

    // renders posts on page load
    useEffect(() => {
        axios.get('https://api.vschool.io/russellcrawford/thing')
            .then((res) => { setUglyThingsList(res.data) })
            .catch((err) => { console.log('ERROR', err) })
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }
        ))
    }

    const reset = ()=> {setFormData({
        title: '',
        description: '',
        imgUrl: ''
    })}

    const handleSubmit = (e) => {
        e.preventDefault();

        setUglyThingsList(prevList => [...prevList, formData]);

        axios.post(`https://api.vschool.io/russellcrawford/thing`, formData)
            .then((response) => { console.log('resonse', response) })
            .catch((error) => { console.log('ERROR', error) })

        reset();
    }

    return (
        <Context.Provider value={{
            uglyThingsList,
            setUglyThingsList,
            formData,
            handleChange,
            handleSubmit,           
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }