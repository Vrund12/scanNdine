const EMP = require('../models/empDetails')

async function GetEmpDetails (req, res) {
    try{
        const details = await EMP.find()
         res.json(details)    
        
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

module.exports = {
   GetEmpDetails
}