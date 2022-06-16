const mongoose = require('mongoose')
const Schema = mongoose.Schema()
const moment = require('moment')


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    position: {
        type: String,
    },
    degree: {
        type: String
    },
    createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
})

const employeeModel = mongoose.model('employee', userSchema)

module.exports = employeeModel;

