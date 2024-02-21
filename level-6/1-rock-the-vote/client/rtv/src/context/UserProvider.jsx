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
        posts: [],
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
                posts: []
            }
        }
        case 'add-post': {
            return {
                ...userState,
                posts: action.payload
            }
        }
        case 'get-user-post': {
            return {
                ...userState,
                posts: action.payload
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

    // const signup = (credentials)=> {
    //     axios.post('/auth/signup', credentials)
    //         .then(res => {console.log(res)})
    // }
        
    const signup = async (credentials)=> {
        try {
            const res = await axios.post('/auth/auth/signup', credentials)
            console.log(res)
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
            getUserPost()
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

    const addPost = async (newPost)=> {
        try {
            const res = await userAxios.post('/api/post/user', newPost)
            dispatch({ type: 'add-post', payload: res.data})
            console.log(userState.posts)
        } catch (err) {
            console.log(err.response.data.errMsg)
        }
    }

    const getUserPost = async ()=> {
        try {
            const res = await userAxios.get('api/post/user')
            dispatch({ type: 'get-user-post', payload: res.data})
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
                addPost,
                
            }}
        >
            { props.children }
        </UserContext.Provider>
    )
}