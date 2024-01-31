import { useContext, useEffect } from 'react'
import { Context } from '../context'
import axios from 'axios'

function Products() {
    const { getData, productList } = useContext(Context)

    useEffect(()=> {
        getData()
        // axios.get('/products')
        //     .then(res => console.log(res))
    }, [])

    console.log(productList)

    const productTile = productList.map((product, index) => {
        return (
            <div className='product-tile' key={index}>
                <h2>{product.name}</h2>
                <img className='product-tile-img' src={product.img}/>
                <h3>{product.description}</h3>
                <h1>{`$${product.price}`}</h1>
            </div>
        )
    })
    return (
        <div className='product-page-wrapper'>
            <h1>Currently Available for Pickup</h1>
            {productTile}
        </div>
    )
}

export default Products