const express = require('express')
const watchlistRouter = express.Router()
const Watchlist = require('../models/watchlist')

// GET ALL, POST ALL //
watchlistRouter.route('/')
    .get(async (req,res,next)=> {
        try {
            const currentlyWatching = await Watchlist.find({ user: req.auth._id }) // queries db for all documents in Watchlist collection that belong to the user
            res.status(200).send(currentlyWatching)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })
    .post(async (req,res,next)=> {
        try {
            req.body.user = req.auth._id // grabs the _id from the req auth property and assigns it to the user property of the req.body
            const addToWatchlist = new Watchlist(req.body) // creates a new instance of the Watchlist model and passes req.body as the data to it
            const saved = await addToWatchlist.save() // saves the new issue in db
            res.status(201).send(saved)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })

watchlistRouter.route('/:coinId')
    .delete(async (req,res,next)=> {
        try {
            const coinId = req.params.coinId // pull id out of req
            const deletedCoin = await Watchlist.findByIdAndDelete(coinId) // queries db for coin with matching id and deletes it
            return res.status(200).send(`Successfully deleted "${deletedCoin.coin.name}"`)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })

    module.exports = watchlistRouter