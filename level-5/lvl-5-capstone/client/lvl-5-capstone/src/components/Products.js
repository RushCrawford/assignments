import { useContext, useEffect } from 'react'
import { Context } from '../context'
import axios from 'axios'

function Products() {
    const { getData, productList } = useContext(Context)

    useEffect(()=> {
        // getData()
        axios.get('/products')
            .then(res => console.log(res))
    }, [])

    console.log(productList)

    const productTile = productList.map((product, index) => {
        return (
            <div key={index}>
                <h2>{product.name}</h2>
                <h3>{product.description}</h3>
                <h1>{`$${product.price}`}</h1>
            </div>
        )
    })
    return (
        <div>
            <h1>Products Component</h1>
            {productTile}
        </div>
    )
}

export default Products