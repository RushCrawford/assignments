const express = require('express')
const app = express()
const port = process.env.PORT || 7200
const server = require('./server')

// app.use(server)

app.get('/', (req,res)=> {
    res.send('req.body')
})

app.listen(port, ()=> {
    console.log('The server is running on port 7200')
})