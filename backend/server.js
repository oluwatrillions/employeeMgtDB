const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const cors = require('cors')
const dotenv = require('dotenv');

dotenv.config();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(cors());


app.get('/', (req, res) => {
    res.send('This is the home page');
})


const PORT = process.env.PORT || 3500

app.listen(PORT, (req, res) => {
    console.log(`server is running on port ${PORT}`);
})
