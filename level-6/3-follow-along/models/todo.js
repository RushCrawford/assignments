const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Todo', todoSchema)