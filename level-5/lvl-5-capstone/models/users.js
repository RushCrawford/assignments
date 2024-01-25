const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        minLength: 10,
        maxLength: 10,
        required: true
    }
})

module.exports = mongoose.model('Users', userSchema)