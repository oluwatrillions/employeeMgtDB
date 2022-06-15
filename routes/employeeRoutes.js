const express = require('express')
const router = express.Router()

const controllers = require('../controllers/employeesController')

router.route('/')
    .get(controllers.getEmployees)
    .post(controllers.registerEmployees)
    .put(controllers.updateEmployees)
    .delete(controllers.deleteEmployees)


router.route('./:id')
    .get(controllers.getEmployee)

module.exports = router;

