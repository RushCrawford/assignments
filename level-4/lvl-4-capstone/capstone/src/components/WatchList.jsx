import { useContext } from "react"
import { Context } from "../Context"

function WatchList() {
    const { userState: {watching} } = useContext(Context)
    return (
        <h1>watchlist</h1>
    )
}

export default WatchList