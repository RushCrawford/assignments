import { Context } from "./Context"
import { useContext } from "react"

function UglyList() {
    const { uglyThingsBadges } = useContext(Context)
    return (
        <div>
            <h1>Ugly things</h1>
            <div>
                {uglyThingsBadges}
            </div>
        </div>
    )
}

export default UglyList