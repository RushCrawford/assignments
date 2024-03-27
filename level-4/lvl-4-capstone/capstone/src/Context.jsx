import { createContext, useState } from "react";
import axios from 'axios'

const Context = createContext()

const userAxios = axios.create() // creating our own version of axios
userAxios.interceptors.request.use(config => { // configuring userAxios for our purposes
    const token = localStorage.getItem('token') // retrieve token from localStorage and save it in variable
    config.headers.Authorization = `Bearer ${token}` // adds Authorization and Bearer 'token' to the request header
    return config // returns the new object including the Authorization and token
})

const initUserState = { // creating initial state object
    user: JSON.parse(localStorage.getItem('user')) || {}, // set user to whats in localStorage or an empty object
    token: localStorage.getItem('token') || '', // set token to whats in localStorage or an empty string
    watching: JSON.parse(localStorage.getItem('watching')) || [],
    errMsg: ''
}

function ContextProvider (props) {
    const [userState, setUserState] = useState(initUserState)
    const [listOfCoins, setListOfCoins] = useState([])
    const [specificCoin, setSpecificCoin] = useState([])
    const [toggle, setToggle] = useState(false)

    const { watching } = userState


// USER AUTH FUNCTIONS //
    const register = async (credentials) => { // pass in user data as credentials
        try {
            const res = await axios.post('/api/auth/register', credentials)
            const { user, token } = res.data // pull user and token out of res.data
            localStorage.setItem('token', token) // store token in localStorage
            localStorage.setItem('user', JSON.stringify(user)) // store user data in localStorage
            setUserState(prevState => ({
                ...prevState,
                user,
                token
            })) // Update state with user data
        } catch (err) {
            errHandler(err.response.data.errMsg) // shows error message 'username already taken'
        }
    }

    const login = async (credentials) => {
        try {
            const res = await axios.post('/api/auth/login', credentials)
            const { user, token } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUserState(prevState => ({
                ...prevState,
                user,
                token
            })) // Update state with user data
            getWatched()
        } catch (err) {
            errHandler(err.response.data.errMsg)
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('watching')
        localStorage.removeItem('list-of-coins')
        setUserState({user: '', token: '', watching: [], errMsg: ''})
    }

// REQUESTS FOR DATA FROM COINCAP API //
    const getData = async ()=> {
        try {
            const res = await axios.get(`https://api.coincap.io/v2/assets`)      
            setListOfCoins(res.data.data) 
            localStorage.setItem('list-of-coins', JSON.stringify(res.data.data))
        } catch(err) {console.log('err', err)}
    }
    
    const getCoin = async (e)=> {
        console.log(e)
        try {
            const res = await axios.get(`https://api.coincap.io/v2/assets/${e}`)
            setSpecificCoin(res.data.data)
       } catch(err) {console.log('err', err)}
    }

// REQUESTS TO WATCHLIST ENDPOINT //
    const addToWatchlist = async (coin)=> {
        console.log(coin)
        try {
            const res = await userAxios.post('api/api/watchlist', {coin})
            // add star or something to coin tile to indicate being watched
        } catch (err) { errHandler(err.response.data.message) }
    }

    const getWatched = async ()=> {
        try {
            const res = await userAxios.get('api/api/watchlist')
            setUserState(prevState => ({
                ...prevState,
                watching: [...res.data]
            }))
            localStorage.setItem('watching', JSON.stringify(res.data))
        } catch (err) {
            console.log('getWatched function', err)
        }
    }

    const removeFromWatchlist = async (coinId)=> {
        console.log(coinId)
        try {
            const res = await userAxios.delete(`api/api/watchlist/${coinId}`)
            setUserState(prevState => ({
                ...prevState,
                watching: prevState.watching.filter(watch => watch.coin !== coinId)
            }))
        } catch (err) {
            errHandler(err.response.data.message)
        }
    }

// NAVIGATIONAL FUNCITONS //
    const onHome = ()=> {
        setListOfCoins([])
        setSpecificCoin([])
        setToggle(false)
    }

    const back = ()=> {
        setToggle(false)
        setUserState(prevState => ({
            ...prevState,
            errMsg: ''
        }))
    }

// ERROR HANDLER //
    const errHandler = (errMsg)=> {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    console.log(userState)

    return (
        <Context.Provider value={{
            getData,
            listOfCoins,
            getCoin,
            specificCoin,
            toggle,
            setToggle,
            onHome,
            back,
            register,
            userState,
            login,
            logout,
            addToWatchlist,
            getWatched,
            removeFromWatchlist
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }