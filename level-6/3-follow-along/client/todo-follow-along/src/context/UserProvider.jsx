import { createContext, useReducer } from "react"
import axios from 'axios'

export const UserContext = createContext()

    const initState = { 
        user: {
            username: '',
            password: ''
        }, 
        token: '', 
        todos: [] 
    }

function userReducer (userState, action) {
    switch (action.type) {
        case 'user-data': {
            return { 
                user: action.newUser,
                token: action.newToken
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
                dispatch({ type: 'user-data', newToken: token, newUser: user })
            } catch (err) {
                console.log(err.response.data.errMsg)
            }
    }
        const login = async (credentials)=> {
            try {
                const res = await axios.post('/auth/login', credentials)
                const { user, token } = res.data
                dispatch({ type: 'user-data', newToken: token, newUser: user })
            } catch (err) {
                console.log(err.response.data.errMsg)
            }
    }


    console.log(userState)
    return (
        <UserContext.Provider 
            value={{
                ...userState,
                signup,
                login
            }}
        >
            { props.children }
        </UserContext.Provider>
    )
}
