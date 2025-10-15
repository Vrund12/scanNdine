const EMP = require('../models/empDetails')
const Inventory = require('../models/inventory')
const Orders = require('../models/orderDetails')

async function GetEmpDetails (req, res) {
    try{
        const details = await EMP.find()
         res.json(details)    
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

async function GetInvenDetails (req, res) {
    try{
        const details = await Inventory.find()
        res.json(details)
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
}

async function GetOrderDetails (req, res) {
    try{
        const details = await Orders.find()
        res.json(details)
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
}

module.exports = {
   GetEmpDetails,
   GetInvenDetails,
   GetOrderDetails
}