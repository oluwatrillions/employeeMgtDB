const mongoose = require('mongoose')
const Schema = require('../model/employeeSchema')

const getEmployees = (req, res, next) => {
    res.send('This is the employees home')
    next();
}

const registerEmployees = async (req, res, next) => {
    try {
        const newEmployee = new Schema({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            degree: req.body.degree,
        })
    } catch (error) {
        console.log(error);
    }
    
    if (!newEmployee.name || !newEmployee.email || !newEmployee.password) {
    return res.status(400).json({'error': "Please enter a name or password"})
    }
    
    const result = {
        
    }

    next();
}

const updateEmployees = (req, res, next) => {
    res.json()
     next();
}

const deleteEmployees = (req, res, next) => {
    res.json()
     next();
}

const getEmployee = (req, res, next) => {
    res.json()
     next();
}


module.exports = {
    getEmployees,
    registerEmployees,
    updateEmployees,
    deleteEmployees,
    getEmployee
}