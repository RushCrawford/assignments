const express = require('express')
const todoRouter = express.Router();
const { v4:uuidv4 } = require('uuid')

const fakeData = [{
    name: "The name",
    description: "The description of the todo",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuidv4(),
}]

// {
//     "name": "shopping",
//     "description": "get stuff from store",
//     "imageUrl": "http://www.myimage....",
//     "completed": false
// }

todoRouter.route('/')
    .get((req,res)=> {
        res.send(fakeData)        
    })
    .post((req,res)=> {
        const newData = req.body
        newData._id = uuidv4()
        fakeData.push(newData)
        res.send('Todo added')
    })


module.exports = todoRouter