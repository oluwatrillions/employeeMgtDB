const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const cors = require('cors')
const dotenv = require('dotenv')
const uuid = require('uuid')
const controllers = require('../controllers/employeesController')
const schema = require('../model/Schema')




require('dotenv').config({path: '..config/.env'});

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(cors());

console.log(uuid.v4());

app.use('/employees', require('../routes/employeeRoutes'))

const PORT = process.env.PORT 

app.listen(PORT, (req, res) => {
    console.log(`server is running on port ${PORT}`);
})
