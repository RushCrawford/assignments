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

// GET ALL //
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
    
    // BY ID //
    bountyRouter.route('/:bountyId')
    .get((req,res)=> {
        const bountyId = req.params.bountyId
        
    })
    .put((req,res)=> {

    })
    .delete((req,res)=> {

    })

module.exports = bountyRouter