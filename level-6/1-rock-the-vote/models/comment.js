const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    vote: Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model('Comments', commentSchema)