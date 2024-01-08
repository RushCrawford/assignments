const express = require('express')
const productRouter = express.Router()
const { v4:uuidv4 } = require('uuid')

productRouter.route('/')
    .get((req,res)=> {
        res.send('hello')
    })


module.exports = productRouter