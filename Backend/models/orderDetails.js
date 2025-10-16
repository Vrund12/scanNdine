const mongoose = require('mongoose')

const OrdersSchema = new mongoose.Schema({
    orderId: {
     type: String,
     unique: true,
     default: () => `ORD-${shortid.generate().toUpperCase()}`
    },
    tableNo: Number,
    status: String,
    totalAmount: Number,
    items: [
    {
      name: String,
      price: Number,
      quantity: Number
    }
  ]

})

const Orders = mongoose.model('Order', OrdersSchema)

module.exports = Orders