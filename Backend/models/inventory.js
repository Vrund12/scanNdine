const mongoose = require('mongoose')

const InvenSchema = new mongoose.Schema({
    Dish: {
        type: String,
        required: true,
        unique: true
    },
    Availability: {
        type: String,
        required: true,        
    },
    Price: {
        type: String,
        required: true
    }
})

const Inventory = mongoose.model('Inventory', InvenSchema)

module.exports = Inventory