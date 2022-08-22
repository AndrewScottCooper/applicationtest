const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Creates a Mongoose Schema for MongoDB fields
//Patient ID, Name, and OrderID
const patientSchema = new Schema({
    ID: {
        type: Number,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true,
        unique: false
    },
    OrderID:{
        type: Number,
        required : true,
        unique: true
    }

});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;