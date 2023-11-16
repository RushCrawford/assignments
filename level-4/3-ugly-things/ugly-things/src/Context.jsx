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
    

    //RENDERS POSTS ON PAGE LOAD
    useEffect(() => {
        axios.get('https://api.vschool.io/russellcrawford/thing')
            .then((res) => { setUglythingsList(res.data) })
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

        setUglythingsList(prevList => [...prevList, formData]);

        axios.post(`https://api.vschool.io/russellcrawford/thing`, formData)
            .then((response) => { console.log('resonse', response) })
            .catch((error) => { console.log('ERROR', error) })

        reset();
    }



    // 1. set up some form of conditional rendering for form inputs
        // - create state to with boolean, toggle to true with edit click,
    // 2. making those inputs and handlechange work
    // 3. making the edit function in axios

    


    return (
        <Context.Provider value={{
            uglyThingsList,
            formData,
            handleChange,
            handleSubmit
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }