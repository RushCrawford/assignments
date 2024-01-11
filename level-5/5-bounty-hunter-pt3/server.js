const express = require('express')
const app = express()
const port = process.env.PORT || 7200


app.listen(port, ()=> {
    console.log('The server is running on port 7200')
})