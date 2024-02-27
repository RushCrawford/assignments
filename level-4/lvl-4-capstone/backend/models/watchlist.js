const mongoose = require('mongoose')
const Schema = mongoose.Schema

const watchlistSchema = new Schema({
    coin: {
        type: Object,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model('Watchlist', watchlistSchema)