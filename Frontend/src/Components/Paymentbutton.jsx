// PaymentButton.jsx
import { loadRazorpayScript } from "../useRazorPay.js";

const PaymentButton = ({ orderDetails }) => {
  const handlePayment = async () => {
    // 1. Load Razorpay SDK
    const loaded = await loadRazorpayScript();
    if (!loaded) return alert("Failed to load Razorpay. Check your connection.");

    // 2. Create order on your backend
    const { data } = await fetch("/api/scanNdine/payment/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: orderDetails.totalAmount,  // in ₹
        receipt: `order_${orderDetails.orderId}`,
      }),
    }).then(r => r.json());

    // 3. Open Razorpay modal
    const options = {
      key: import.meta.env.VITE_RAZORPAY_TEST_APIKEY,  // from .env
      amount: data.order.amount,
      currency: data.order.currency,
      name: "Your Store Name",
      description: "Order Payment",
      order_id: data.order.id,  // Razorpay order ID from step 2

      handler: async (response) => {
        // 4. Verify on backend
        const verify = await fetch("/api/scanNdine/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        }).then(r => r.json());

        if (verify.success) {
          // ✅ All good — redirect or update UI
          alert("Payment successful!");
        } else {
          alert("Payment verification failed.");
        }
      },

      prefill: {
        name: orderDetails.customerName,
        email: orderDetails.customerEmail,
        contact: orderDetails.customerPhone,
      },

      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);

    // Handle payment failure
    rzp.on("payment.failed", (response) => {
      console.error(response.error);
      alert(`Payment failed: ${response.error.description}`);
    });

    rzp.open();
  };

  return (
    <button onClick={handlePayment} className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
      Pay ₹{orderDetails.totalAmount}
    </button>
  );
};

export default PaymentButton;