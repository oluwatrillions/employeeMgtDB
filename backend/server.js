const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const bcrypt = require('bcrypt')
const cors = require('cors')
const uuid = require('uuid')
const moment = require('moment')
require('dotenv').config({ path: '.env'})
const PORT = process.env.PORT 



app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(cors());

app.use('/employees', require('../routes/employeeRoutes'))

mongoose.connection.once('open', () => {
    console.log('DB connected');
})

 app.listen(PORT, (req, res) => console.log(`server is running on port ${PORT}`))
