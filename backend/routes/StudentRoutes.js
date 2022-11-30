const express = require('express')
const routes = express.Router()
const StudentController = require('../controllers/StudentController')

routes.post('/register', StudentController.register)
routes.get('/:id', StudentController.getStudent)
routes.get('/', StudentController.getAllStudent)
routes.patch('/update/:id', StudentController.updateStudant)
routes.delete('/delete/:id', StudentController.removeStudante)

module.exports = routes