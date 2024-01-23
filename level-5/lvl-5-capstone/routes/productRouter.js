const express = require('express')
const productRouter = express.Router()
const Products = require('../models/products')

// TO ALL ROUTES //
productRouter.route('/')
    .get(async(req,res,next)=> {
        try{
            const products = await Products.find()
            return res.status(200).send(products)
        } catch(err) {
            res.status(500)
            return next(err)
        }
    })
    .post(async(req,res,next)=> {
        try {
            const newProduct = new Products(req.body)
            const savedProduct = await newProduct.save(Products)
            return res.status(201).send(savedProduct)
        } catch(err) {
            res.status(500)
            return next(err)
        }
    })

// BY ID ROUTES //
productRouter.route('/:productId')
    .get(async(req,res,next)=> {
        try {
            const requestedProduct = await Products.findById(req.params.productId)
            return res.status(200).send(requestedProduct)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })
    .put(async(req,res,next)=> {
        try {
            const updatedProduct = await Products.findByIdAndUpdate(req.params.productId)
            req.body
            return res.status(201).send(updatedProduct)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })
    .delete(async(req,res,next)=> {
        try {
            const deletedProduct = await Products.findByIdAndDelete(req.params.productId)
            return res.status(201).send(`${deletedProduct.name} removed from the DB`)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })

module.exports = productRouter