const express = require('express')
const app = express()
const { v4:uuidv4 } = require('uuid')
const database = require('./database')
const port = process.env.PORT || 7200

// ROUTES
const todoRouter = express.Router();

todoRouter.route('/todo')
    .get((req,res)=> {
        res.send('working')
    })

app.listen(port, (()=> {
    console.log('Server is running at 7200')
}))