const mongoose = require('mongoose')

async function connectMongoDB(connString){
    return mongoose.connect(connString)
}

module.exports = {connectMongoDB}