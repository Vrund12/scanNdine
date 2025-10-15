const EMP = require('../models/empDetails')
const Inventory = require('../models/inventory')

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

module.exports = {
   GetEmpDetails,
   GetInvenDetails
}