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

// GET ALL //
todoRouter.route('/')
    .get((req,res)=> {
        res.send(fakeData)   
    })
    .post((req,res)=> {
        const newData = req.body
        newData._id = uuidv4()
        fakeData.push(newData)
        res.send(`${newData.name} added to the list`)
    })

// GET,DELETE,UPDATE ONE //
todoRouter.route('/:todoId')
    .get((req,res)=> {
        const todoId = req.params.todoId
        const filteredTodo = fakeData.filter(todo => todoId === todo._id)
        res.send(filteredTodo)        
    })
    .delete((req,res)=> {
        const todoId = req.params.todoId
        const todoIndex = fakeData.findIndex(todo => todoId === todo._id)
        fakeData.splice(todoIndex, 1)
        res.send('Deleted successfully')
    })
    .put((req,res)=> {
        const todoId = req.params.todoId
        const newData = req.body
        const todoIndex = fakeData.findIndex(todo => todoId === todo._id)
        const updatedTodo = Object.assign(fakeData[todoIndex], newData)
        res.send('Updated successfully')
    })



module.exports = todoRouter