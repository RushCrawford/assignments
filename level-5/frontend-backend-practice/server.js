const express = require('express')
const app = express()
const port = process.env.PORT || 7200

app.use(express.json())

// ROUTES //
app.use('/products', require('./routes/productRouter'))

app.listen(port, ()=> {
    console.log('The server is running on port 7200')
})