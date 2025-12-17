const express = require('express')
const {GetEmpDetails, GetInvenDetails, GetOrderDetails,POSTRoute, markAsServed, changeAvailability} = require('../controllers/controller')

const router = express.Router()

router.get('/EmpDetails', GetEmpDetails)
router.get('/Inventory', GetInvenDetails)
router.get('/Order-details', GetOrderDetails)
router.get('/Menu', GetInvenDetails)
router.post("/orders",POSTRoute )
router.patch("/orders/:id/serve", markAsServed);
router.patch('/Inventory/:id/availability', changeAvailability)

module.exports = router