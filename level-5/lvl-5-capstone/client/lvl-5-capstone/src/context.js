import { createContext, useState } from 'react'
import axios from 'axios'

const Context = createContext()

function ContextProvider (props) {
    const [productList, setProductList ] = useState([])

    async function getData () {
        try {
            const res = await axios.get('/products')
            setProductList(res.data)
        } catch (err) {
            console.log('err', err)
        }
    }

    return (
        <Context.Provider value={{
            getData,
            productList
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }