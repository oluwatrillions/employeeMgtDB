const getEmployees = (req, res, next) => {
    res.send('This is the employees home')
    next();
}

const registerEmployees = (req, res, next) => {
    const newEmployee = {
        name: req.body.name,
        password: req.body.password
    }
    res.send(newEmployee)
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