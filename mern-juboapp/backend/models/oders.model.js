const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Creates a Mongoose Schema for MongoDB fields
//Order ID, and message
const patientSchema = new Schema({
    Id: {
        type: Number,
        required: true,
        unique: true
    },
    Message: {
        type: String,
        required: true,
        unique: false
    },

}); 
const Order = mongoose.model('Order', exerciseSchema);

module.exports = Order;