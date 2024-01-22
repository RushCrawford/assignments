const express = require('express');
const bountyRouter = express.Router();
const Bounty = require('../models/bountyModel')

// TO ALL ROUTES //
bountyRouter.route('/')
    .get((req,res,next)=> {
        Bounty.find((err, bounties)=> {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
    })
    .post((req,res,next)=> {
        const savedBounty = new Bounty(req.body)
        savedBounty.save((err,newBounty)=> {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newBounty)
        })
    })
    
// BY ID ROUTES //
bountyRouter.route('/:bountyId')
    .get((req,res,next)=> {
        Bounty.findOne(
            {_id: req.params.bountyId},
            (err, requestedBounty)=> {
                if (err) {
                    res.status(500)
                    return next(err)
                } 
                return res.status(200).send(requestedBounty)
            }
        )
    })
    .put((req,res,next)=> {
        
    })
    .delete((req,res,next)=> {
        Bounty.findOneAndDelete(
            {_id: req.params.bountyId},
            (err, deletedBounty)=> {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                res.status(200).send(`${deletedBounty.firstName} ${deletedBounty.lastName} removed from bounty list.`)
            }
        )
    })

module.exports = bountyRouter