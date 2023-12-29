const exp = require('constants');
const express = require('express')
const app = express()
const {v4: uuidv4} = require('uuid')

app.use(express.json())

const products = [
    { name: 'Artisan Loaf', price: 10, _id: uuidv4() },
    { name: 'Bagels', price: 10, _id: uuidv4() },
    { name: 'English Muffins', price: 8, _id: uuidv4() },
    { name: 'Baguette', price: 5, _id: uuidv4() },
    { name: 'Focaccia', price: 6, _id: uuidv4() }
];

app.get('/products', (req, res) => {
    // res.send("Hello world!");
    res.send(products)
});

app.post('/products',(req, res)=> {
    const newProduct = req.body
    newProduct._id = uuidv4()
    products.push(newProduct)
    res.send(`successfully added ${newProduct.name} to the database`)
})

app.listen(7200, ()=> {
    console.log('The server is running on port 7200')
})