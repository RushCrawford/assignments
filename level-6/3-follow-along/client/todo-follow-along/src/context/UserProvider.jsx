import { createContext, useReducer } from "react"
import axios from 'axios'

export const UserContext = createContext()

const userAxios = axios.create()    // creating our own version of axios

userAxios.interceptors.request.use(config => {  // configuring it how we want
    const token = localStorage.getItem('token') // grab token 
    config.headers.Authorization = `Bearer ${token}` // add authorization bearer token header
    return config   // return the configuration object
})

    const initState = { 
        user: JSON.parse(localStorage.getItem('user')) || {}, 
        token: localStorage.getItem('token') || '', 
        todos: [],
        errMsg: ''
    }

function userReducer (userState, action) {
    switch (action.type) {
        case 'received-user-data': {
            return { 
                ...userState,
                user: action.newUser,
                token: action.newToken
            }
        }
        case 'logout': {
            return {
                user: '',
                token: '',
                todos: []
            }
        }
        case 'add-todo': {
            return {
                ...userState,
                todos: action.payload
            }
        }
        case 'get-user-todo': {
            return {
                ...userState,
                todos: action.payload
            }
        }
        case 'show-err-msg': {
            return {
                ...userState,
                errMsg: action.payload
            }
        }
        default:
            return userState
    }
}

export default function UserProvider (props) {
    const [ userState, dispatch ] = useReducer(userReducer, initState)
        
    const signup = async (credentials)=> {
        try {
            const res = await axios.post('/auth/signup', credentials)
            const { user, token } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({ type: 'received-user-data', newToken: token, newUser: user })
        } catch (err) {
            handleAuthErr(err.response.data.errMsg)
        }
    }

    const login = async (credentials)=> {
        try {
            const res = await axios.post('/auth/login', credentials)
            const { user, token } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            getUserTodo()
            dispatch({ type: 'received-user-data', newToken: token, newUser: user })
        } catch (err) {
            handleAuthErr(err.response.data.errMsg)
        }
    }

    const logout = async ()=> {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        dispatch({type: 'logout'})
    }

    const addTodo = async (newTodo)=> {
        try {
            const res = await userAxios.post('/api/todo/user', newTodo)
            dispatch({ type: 'add-todo', payload: res.data})
            console.log(userState.todos)
        } catch (err) {
            console.log(err.response.data.errMsg)
        }
    }

    const getUserTodo = async ()=> {
        try {
            const res = await userAxios.get('api/todo/user')
            dispatch({ type: 'get-user-todo', payload: res.data})
        } catch (err) {
            console.log(err.rsponse.data.errMsg)
        }
    }

    const handleAuthErr = (errMsg)=> {
        dispatch({ type: 'show-err-msg', payload: errMsg})

    }
console.log(userState)
    return (
        <UserContext.Provider 
            value={{
                userState,
                signup,
                login,
                logout,
                addTodo,
                
            }}
        >
            { props.children }
        </UserContext.Provider>
    )
}
