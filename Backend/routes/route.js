const express = require('express')
const {GetEmpDetails, GetInvenDetails, GetOrderDetails,POSTRoute, markAsServed, changeAvailability} = require('../controllers/controller')
const Razorpay = require("razorpay");
const crypto = require("crypto");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_TEST_APIKEY,
  key_secret: process.env.RAZORPAY_TEST_SECRETKEY,
}); 
const router = express.Router()

router.get('/EmpDetails', GetEmpDetails)
router.get('/Inventory', GetInvenDetails)
router.get('/Order-details', GetOrderDetails)
router.get('/Menu', GetInvenDetails)
router.post("/orders",POSTRoute )
router.patch("/orders/:id/serve", markAsServed);
router.patch('/Inventory/:id/availability', changeAvailability)
router.post("/payment/create-order", async (req, res) => {
  const { amount, currency = "INR", receipt } = req.body;
  // amount must be in paise (multiply ₹ by 100)

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
    });
    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/payment/verify
router.post("/payment/verify", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    // ✅ Payment is genuine — update your DB here
    res.json({ success: true, message: "Payment verified" });
  } else {
    // ❌ Signature mismatch — possible tampering
    res.status(400).json({ success: false, message: "Invalid signature" });
  }
});


module.exports = router