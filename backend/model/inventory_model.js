const mongoose = require('mongoose')
const validator = require('validator')

const inventorySchema = new mongoose.Schema({
    id: {
        type: Number,
        unique:true,
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
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid")
            }
        }
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