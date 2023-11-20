import { useNavigate } from "react-router-dom"
import axios from 'axios'

function Products() {
    const navigate = useNavigate()

    const products = axios.get(`https://api.vschool.io/rush/todo`)

    return(
        <>
            <ul>
                <li>Artisan Loaf</li>
                <li>Bagels</li>
                <li>Scones</li>
                <li>Sandwich Bread</li>
                <li>Pretzels</li>
            </ul>
        </>
    )
}

export default Products