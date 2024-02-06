const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo')

// GET ALL, POST TO ALL //
todoRouter.route('/')
    .get(async (req, res, next) => {
        try {
            const allTodos = await Todo.find()
            return res.status(200).send(allTodos)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })
    .post(async (req, res, next) => {
        try {
            req.body.user = req.auth._id
            const newTodo = new Todo(req.body)
            const savedTodo = await newTodo.save()
            return res.status(201).send(savedTodo)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })

// BY ID ROUTES //
todoRouter.route('/:todoId')
    .delete(async (req, res, next) => {
        try {
            const todoId = req.params.todoId
            const deletedTodo = await Todo.findByIdAndDelete(todoId)
            return res.status(200).send(`${deletedTodo.title} has been deleted`)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })


module.exports = todoRouter