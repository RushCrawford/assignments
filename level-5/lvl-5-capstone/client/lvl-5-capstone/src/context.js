import { createContext, useState } from 'react'
import axios from 'axios'

const Context = createContext()

function ContextProvider (props) {
    const [ productList, setProductList ] = useState([])
    const [ inputs, setInputs ] = useState({
        name: "",
        email: "",
        phoneNumber: ""
    })
    const [ toggle, setToggle ] = useState(false)
    // make a useState for 
    const [ userState, setUserState ] = useState([])

    const toggleForm = ()=> {
        setToggle(prev => !prev)
    }

    const handleChange = (e)=> {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs, 
            [name]: value
        }))
    }

    const addUser = (newUser)=> {
        axios.post('/users', newUser)
            .then(res => {
                console.log(res.data)
                // setInputs(newUser)
                setUserState(newUser)
                console.log(userState)
            })
            .catch(err => console.log(err))

    }

    // .post(route, favShow) .then( res => { setState(res.data) })

    const handleSubmit = (e)=> {
        e.preventDefault();
        addUser(inputs)
        console.log(inputs)
        toggleForm()
    }

    async function getData () {
        try {
            const res = await axios.get('/products')
            console.log(res.data)
            setProductList(res.data)
        } catch (err) {
            console.log('err', err)
        }
    }

    return (
        <Context.Provider value={{
            getData,
            productList,
            inputs,
            handleChange,
            toggle,
            toggleForm,
            handleSubmit,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }