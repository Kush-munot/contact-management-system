const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
    id: {
        type: Number
    },
    contactName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Inventory', inventorySchema)