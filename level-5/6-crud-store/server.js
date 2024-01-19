const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const port = process.env.PORT || 7200
 

//MIDDLEWARE
app.use(express.json())
app.use(morgan('dev'))

//CONNECT TO DB
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://acrawford0221:GBXB5BMNpklRyQsk@cluster0.m5clkiw.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        
    },
    ()=> {'Connected to the DB'}
)

//ROUTES
// app.get('/inventory', (req,res)=> {
//     res.send('works')
// })
app.use('/inventory', require('./routes/inventoryRouter'))

//ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(port, (()=> {
    console.log('The server is running on port 7200')
}))