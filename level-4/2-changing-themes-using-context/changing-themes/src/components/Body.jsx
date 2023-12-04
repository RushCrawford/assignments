import { useContext } from "react"
import { themeContext } from "../themeContext"

export default function Body() {

    //deconstructing context to consume in the onChange
    const {handleChange} = useContext(themeContext)

    return (
        // renders the dropdown to select the theme
        <body>
            <h1>Choose Your Theme</h1>
            <div>
                <label htmlFor="theme-selector">Select a Theme: </label>
                <select onChange={handleChange}>
                    <option >Dark</option>
                    <option >Light</option>
                    <option >Vision Impaired</option>
                </select>
            </div>
        </body>
    )
}