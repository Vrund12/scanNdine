const express = require('express')
const {GetEmpDetails, GetInvenDetails} = require('../controllers/controller')

const router = express.Router()

router.get('/EmpDetails', GetEmpDetails)
router.get('/Inventory', GetInvenDetails)

module.exports = router