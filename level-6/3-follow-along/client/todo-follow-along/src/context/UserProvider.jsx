import { createContext, useReducer } from "react"
import axios from 'axios'

export const UserContext = createContext()

    const initState = { 
        user: {}, 
        token: '', 
        todos: [] 
    }

function userReducer (userState, action) {
    switch (action.type) {
        case 'user-data': {
            return {
                user: user,
                token: token
            }
        }
    }
}

export default function UserProvider (props) {
    const [ userState, dispatch ] = useReducer(userReducer, initState)

    const signup = (credentials)=> {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data
                dispatch({
                    type: 'user-data',
                    user,
                    token
                })
            })
            .catch(err => console.log(err.response.data.errMsg))
            console.log(userState)
    }

    const login = (credentials)=> {
        axios.post('/auth/login', credentials)
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data.errMsg))
    }

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
