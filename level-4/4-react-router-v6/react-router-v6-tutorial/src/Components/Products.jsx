import { useNavigate, Link } from "react-router-dom"

function Products(props) {
    const { productList } = props
    const navigate = useNavigate()

    const products = productList.map(product => (
        <h3 className="products--each-product" key={product._id}>
            <img className="products--product-img" src={product.imgUrl} />
            <Link to={`/products/${product._id}`} >{product.title}</Link>${product.price}
            <button onClick={()=> alert('Added to Cart')} >Add To Cart</button>
        </h3>
    ))

    return(
        <>
            <button onClick={()=> navigate('/Checkout')} >Go To Cart</button>
            {products}
        </>
    )
}

export default Products