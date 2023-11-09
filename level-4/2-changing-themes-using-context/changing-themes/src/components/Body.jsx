import { useContext } from "react"
import { themeContext } from "../themeContext"

export default function Body(props) {

    const context = useContext(themeContext)

    return (
        <body>
            <h1>Choose Your Theme</h1>
            <div>
                <label htmlFor="theme-selector">Select a Theme: </label>
                <select onChange={props.handleChange}>
                    <option >Dark</option>
                    <option >Light</option>
                    <option >Vision Impaired</option>
                </select>
            </div>
        </body>
    )
}