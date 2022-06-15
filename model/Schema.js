const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const uri = process.env.URI

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('connected');
}).catch((err) => {
    console.log(err.message);
 })
    
module.exports = mongoose.model('employeeSchema', Schema)