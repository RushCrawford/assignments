const express = require('express')
const app = express()
const { v4:uuidv4 } = require('uuid')

app.get('/', (req,res)=> {
    res.send('New phone, who dis?')
})

app.listen(7200, ()=> {
    console.log('The server is running on port 7200')
})