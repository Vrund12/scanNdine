const express = require('express')
const {GetEmpDetails} = require('../controllers/controller')

const router = express.Router()

router.get('/EmpDetails', GetEmpDetails)

module.exports = router