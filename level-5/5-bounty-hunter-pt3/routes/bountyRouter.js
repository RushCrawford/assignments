const express = require('express');
const bountyRouter = express.Router();
const Bounty = require('../models/bountyModel')

const bounties = [
    {
        firstName: "Darth",
        lastName: "Vader",
        living: false,
        bounty: 10000,
        type: "sith",
    },
    {
        firstName: "Mace",
        lastName: "Windu",
        living: true,
        bounty: 10000,
        type: "jedi",
    }
]

// TO ALL MOUNT PATH //
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
    .post((req,res)=> {
        const newBounty = req.body
        bounties.push(newBounty)
        res.send(newBounty)
    })
    
// BY ID MOUNT PATH //
bountyRouter.route('/:bountyId')
    .get((req,res)=> {
        const bountyId = req.params.bountyId
        const requrestedBounty = bounties.filter(bounty => bountyId === bounty._id)
        res.send(requrestedBounty)
    })
    .put((req,res)=> {
        const bountyId = req.params.bountyId
        const newData = req.body
        const bountyToUpdate = bounties.findIndex(bounty => bountyId === bounty._id)
        const updatedBounty = Object.assign(bounties[bountyToUpdate], newData)
        res.send(updatedBounty)
    })
    .delete((req,res)=> {
        const bountyId = req.params.bountyId
        const bountyToDelete = bounties.findIndex(bounty => bountyId === bounty._id)
        bounties.splice(bountyToDelete, 1)
        res.send(bounties)
    })

module.exports = bountyRouter