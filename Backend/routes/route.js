const express = require('express')
const {GetEmpDetails, GetInvenDetails, GetOrderDetails,POSTRoute} = require('../controllers/controller')

const router = express.Router()

router.get('/EmpDetails', GetEmpDetails)
router.get('/Inventory', GetInvenDetails)
router.get('/Order-details', GetOrderDetails)
router.get('/Menu', GetInvenDetails)
router.post("/orders",POSTRoute )


module.exports = router