const express = require('express')
const {GetEmpDetails, GetInvenDetails, GetOrderDetails} = require('../controllers/controller')
const Orders = require('../models/orderDetails')

const router = express.Router()

router.get('/EmpDetails', GetEmpDetails)
router.get('/Inventory', GetInvenDetails)
router.get('/Order-details', GetOrderDetails)
router.get('/menu', GetInvenDetails)
router.post("/orders", async (req, res) => {
  try {
    const { items, totalPrice, customerName, tableNumber } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Order items are required" });
    }

    const newOrder = new Orders({
      items,
      totalPrice,
      customerName,
      tableNumber,
    });

    await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


module.exports = router