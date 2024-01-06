const express = require('express')
const app = express()
const port = process.env.PORT || 7200

app.use(express.json())

// ROUTES //
app.use('/todo', require('./routes/todoRouter'))


app.listen(port, (()=> {
    console.log('Server is running at 7200')
}))