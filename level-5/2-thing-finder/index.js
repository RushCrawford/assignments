const express = require('express')
const app = express()
const { v4:uuidv4 } = require('uuid')

app.use(express.json())

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

app.get('/things', (req,res)=> {
    res.send(inventoryItems)
})


app.listen(7200, ()=> {
    console.log('The server is running on port 7200')
})