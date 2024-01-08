const express = require('express')
const productRouter = express.Router()
const { v4:uuidv4 } = require('uuid')

const productList = [{
    name: "Artisan Sourdough Loaf",
    description: "Our signature loaf made at 90% hydration and 33% fresh ground Kamut flour.",
    imageUrl: "http://www.myimage....",
    price: 6.99,
    _id: uuidv4()
}]

// GET AND POST ROUTES //
productRouter.route('/')
    .get((req,res)=> {
        res.send(productList)
    })
    .post((req,res)=> {
        const newProduct = req.body
        newProduct._id = uuidv4()
        productList.push(newProduct)
        res.send(`${newProduct.name} added to the product list`)
    })

// BY ID ROUTES //
productRouter.route('/:productId')
    .get((req,res)=> {
        const productId = req.params.productId
        const filteredProduct = productList.filter(product => productId === product._id)
        res.send(filteredProduct)
    })


module.exports = productRouter