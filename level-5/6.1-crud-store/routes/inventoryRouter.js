const express = require('express')
const inventoryRouter = express.Router()

//TO ALL ROUTE
inventoryRouter.route('/')
    .get((req,res)=> {
        res.send('working')
    })


module.exports = inventoryRouter