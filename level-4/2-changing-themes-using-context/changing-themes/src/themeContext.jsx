import { createContext, useContext } from "react";

const themeContext = createContext()

function themeContextProvider(props) {

    const [selectedTheme, setSelectedTheme] = useState('dark')

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

export default {themeContext, themeContextProvider}