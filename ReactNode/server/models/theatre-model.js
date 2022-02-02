const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Theatre = new Schema(
    {
        name: { type: String, required: true },
        type: { type: [String], required: true },
        address: { type: Number, required: false },
    }
)

module.exports = mongoose.model('theatres', Theatre)


// MERN
//MVC - Model Controller