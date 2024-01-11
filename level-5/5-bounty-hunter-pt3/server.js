const express = require('express');
const app = express();
const port = process.env.PORT || 7200;
const bountyRouter = require('./routes/bountyRouter')
app.use(express.json())

// ROUTES //
app.use('/bounty', require('./routes/bountyRouter'))

app.listen(port, ()=> {
    console.log('The server is running on port 7200')
})