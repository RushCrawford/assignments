const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const port = process.env.PORT || 7200

//MIDDLEWARE
app.use(express.json())
app.use(morgan('dev'))

//ROUTES
app.use('/inventory', require('./routes/inventoryRouter.js'))

//DB CONNECTION
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://acrawford0221:GBXB5BMNpklRyQsk@cluster0.m5clkiw.mongodb.net/?retryWrites=true&w=majority',
    ()=> {console.log('Connected to the DB')}
)

app.listen(port, ()=> { console.log('The server is running on port 7200') })