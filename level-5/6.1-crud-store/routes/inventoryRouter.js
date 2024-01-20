const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')
const inventory = require('../models/inventory.js')

//TO ALL ROUTE
inventoryRouter.route('/')
    .get((req,res,next)=> {
        Inventory.find((err,inventory)=> {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(inventory)    
        })
    })
    .post((req,res,next)=> {
        const newItem = new Inventory(req.body)
        newItem.save((err, savedItem)=> {
            if(err){
                res.status(500)
                return next(err)
            }
            res.status(201).send(savedItem)
        })
    })

//BY ID ROUTE
inventoryRouter.route('/:inventoryId')
    .delete((req,res,next)=> {
        inventory.findOneAndDelete(
            {_id: req.params.inventoryId}, 
            (err,deletedItem)=> {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(`Successfully deleted ${deletedItem.name} from the DB`)
        })
    })
    .put((req,res,next)=> {
        inventory.findOneAndUpdate(
            { _id: req.params.inventoryId },
            req.body,
            { new: true },
            (err, updatedItem)=> {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedItem)
            }
        )
    })


module.exports = inventoryRouter