const mongoose = require('mongoose')

const EmpSchema = new mongoose.Schema ({
    EmpName: {
        type: String,
        required: true
    },
    ContactNo: {
        type: String,
        required: true,
        unique: true
    },
    EmpDuty: {
        type: String,
        required: true,
    },
    EmpPhoto: {
        type: String,
        required: true
    }
})

const EMP = mongoose.model("Emp-Details", EmpSchema) 

module.exports = EMP