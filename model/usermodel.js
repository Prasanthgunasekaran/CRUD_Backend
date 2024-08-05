const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userschema = new Schema({
    empId: {
        type: String,
        required: true
    },
    empName: {
        type: String,
        required: true
    },
    empNumber: {
        type: String,
        required: true
    },
    empEmail: {
        type: String,
        required: true
    },
}, { timestamps: true })

const user = mongoose.model('userdata', userschema)

module.exports = user;