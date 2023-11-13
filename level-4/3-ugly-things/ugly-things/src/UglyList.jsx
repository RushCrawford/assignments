import { Context } from "./Context"
import { useContext } from "react"

function UglyList() {
    const {uglyThingsList} = useContext(Context)
    return (
        <>
            <div>
                <h1>Ugly List</h1>
            </div>
        </>
    )
}

export default UglyList