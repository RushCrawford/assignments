import { createContext, useState } from "react";

const themeContext = createContext()

export default function themeContextProvider(props) {

    const [selectedTheme, setSelectedTheme] = useState('dark')

    //function to set the color scheme
    const handleChange = (e) => {
        const { value } = e.target
        setSelectedTheme(
            value === 'Dark' ? 'dark'
                :
                value === 'Light' ? 'light'
                    :
                    value === 'Vision Impaired' && 'vision-impaired'
        )

    }

    return (
        <themeContext.Provider value={{
            selectedTheme,
            handleChange
        }}>
            {props.children}
        </themeContext.Provider>
    )
}

export {themeContextProvider, themeContext }