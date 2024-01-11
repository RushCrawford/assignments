const express = require('express');
const bountyRouter = express.Router();
const { v4:uuidv4 } = require('uuid')
// const fakeDatabase = require('./fakeDatabase');

const bounties = [
    {
        firstName: "Darth",
        lastName: "Vader",
        living: false,
        bounty: 10000,
        type: "sith",
        _id: uuidv4()
    },
    {
        firstName: "Mace",
        lastName: "Windu",
        living: true,
        bounty: 10000,
        type: "jedi",
        _id: uuidv4()
    }
]

// TO ALL MOUNT PATH //
bountyRouter.route('/')
    .get((req,res)=> {
        res.send(bounties)
    })
    .post((req,res)=> {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(bounties)
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