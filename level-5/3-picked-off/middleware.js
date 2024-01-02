const express = require('express')
const app = express()

app.use((res,req,next)=> {
    req.body = { name: 'Tony' }
    next()
})