import { useParams } from "react-router-dom"

function ProductDetails(props) {
    const { productList } = props
    const { productId } = useParams()
    const currentProduct = productList.find(product => product._id === productId)

    return(
        <div className="product-details--container" >
            <img className="product-details--product-img" src={currentProduct.imgUrl} />
            <h3>{currentProduct.title}</h3>
            <h3>${currentProduct.price}</h3>
            <p>{currentProduct.description}</p>
        </div>
    )
}

export default ProductDetails