const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

// {
//     "firstName": "Darth",
//     "lastName": "Vader",
//     "living": false,
//     "bounty": 10000,
//     "type": "sith"
// }

app.use(express.json())

const bounties = []

app.get('/bounty', (req, res)=> {
    res.send(bounties)
})

app.post('/bounty', (req, res)=> {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Bounty for ${newBounty.firstName} ${newBounty.lastName} successfully added.`)
})


app.listen(7200, ()=> {
    console.log('The server is running on port 7200')
})