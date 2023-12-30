const express = require('express')
const app = express()
const { v4:uuidv4 } = require('uuid')

app.use(express.json())

const bounties = []

    // {
    //     "firstName": "Darth",
    //     "lastName": "Vader",
    //     "living": false,
    //     "bounty": 10000,
    //     "type": "sith"
    // }

app.get('/bounty', (req,res)=> {
    res.send(bounties)
})

app.post('/bounty', (req,res)=> {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database`)
})

app.listen(7200, ()=> {
    console.log('the server is running on port 7200')
})