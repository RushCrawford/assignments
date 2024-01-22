const express = require('express')
const app = express()

app.use((req,res,next)=> {
    req.body = { name: 'Tony' }
    next()
})

module.exports = server