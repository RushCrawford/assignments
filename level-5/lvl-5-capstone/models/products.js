const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        ImageData: Buffer,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Products', productSchema)