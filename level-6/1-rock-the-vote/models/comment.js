const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    dateOfComment: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true
    }
})

module.exports = mongoose.model('Comment', commentSchema)