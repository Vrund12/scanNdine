const express = require('express')
const {GetEmpDetails, GetInvenDetails, GetOrderDetails} = require('../controllers/controller')

const router = express.Router()

router.get('/EmpDetails', GetEmpDetails)
router.get('/Inventory', GetInvenDetails)
router.get('/Order-details', GetOrderDetails)

module.exports = router