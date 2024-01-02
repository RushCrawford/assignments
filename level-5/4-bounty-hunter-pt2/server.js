const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

app.use(express.json())

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


// get all
app.get('/bounty', (req, res) => {
    res.send(bounties)
})

// add one
app.post('/bounty', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database`)
})

// update one
app.put('/bounty/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const updatedObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updatedObject)
    res.send(updatedBounty)
})

// delete one
app.delete('/bounty/:bountyId', (req,res)=> {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send('Successfully deleted bounty')
})

app.listen(7200, () => {
    console.log('the server is running on port 7200')
})