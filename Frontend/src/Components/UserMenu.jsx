import React, { useState, useEffect} from "react";
import axios from "axios";
import OrderIdContext from "../Context/OrderIdContext";

const UserMenu = () => {
   const [menu, setmenu] = useState([])
  const [cart, setCart] = useState([]);
  const [bill, setBill] = useState([]);
const [showBill, setShowBill] = useState(false);

  //const { setOrderId } = useContext(OrderIdContext);
    useEffect(() => {
    axios.get('api/scanNdine/Menu')
    .then((response) => {
      setmenu(response.data)
    })
    .catch((error) => {
        console.log(error)
      })
  })
  //const isAvailable = menu.Availability === "available"

  // 🛒 Add item to cart
  const addToCart = (details) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.Dish === details.Dish);
      if (existing) {
        return prev.map((i) =>
          i.Dish === details.Dish ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...details, quantity: 1 }];
      }
    });
  };

  // 🧾 Place order - POST to backend
  const placeOrder = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const totalAmount = cart.reduce(
      (total, details) => total + details.Price * details.quantity,
      0
    );

    const orderData = {
      tableNo: 5, // replace with dynamic table if needed
      items: cart.map((item) => ({
        name: item.Dish,
        price: item.Price,
        quantity: item.quantity,
      })),
      totalAmount,
    };

    try {
      const response = await axios.post("/api/scanNdine/orders", orderData);
      alert("Order placed successfully!");
      setCart([]);
      setBill(response.data);
      setShowBill(true);
      console.log("✅ Order placed:", response.data);
      //const orderId = response.displayOrderId
    } catch (err) {
      console.error("❌ Error placing order:", err);
      alert("Failed to place order.");
    }
    console.log(bill)
  };
   
  return (
    <div className="bg-gradient-to-b from-orange-50 to-orange-100 min-h-screen p-4">
      <h1 className="text-4xl font-extrabold text-red-600 mb-6 text-center drop-shadow-md">
        Our Delicious Menu
      </h1>

      {/* 🥘 Menu Display */}
     
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-700 border-b-4 border-red-400 pb-2 mb-4">
            Starters
          </h2>

          <div className="flex flex-col space-y-6">
            {menu.map((details) => (
              
              <div
                key={details._id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] ${
                  details.Availability?.toLowerCase() === "available" ? "" : "opacity-60"
                }`}
              >
                <img
                  src={details.Image}
                  alt={details.Dish}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />

                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-red-700">
                      {details.Dish}
                    </h3>
                    <span className="text-lg font-bold text-red-600">
                      ₹{details.Price}
                    </span>
                  </div>

                  <p className="text-red-800 mb-3">{details.Desc}</p>

                  { details.Availability?.toLowerCase() === "unavailable" && (
                    <span className="inline-block bg-red-200 text-red-700 text-sm font-semibold px-3 py-1 rounded-full">
                      Currently Unavailable
                    </span>
                  )}

                  { details.Availability?.toLowerCase() === "available" && (
                    <button
                      onClick={() => addToCart(details)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg mt-2"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      

      {/* 🛒 Cart Section */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 border-t-2 border-red-300">
          <h3 className="text-xl font-bold text-red-700 mb-2">Your Cart</h3>
          <ul>
            {cart.map((details, i) => (
              <li key={i} className="flex justify-between mb-1">
                <span>
                  {details.Dish} x {details.quantity}
                </span>
                <span>₹{(details.Price * details.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold text-lg mt-2">
            <span>Total:</span>
            <span>
              ₹
              {cart
                .reduce((total, details) => total + details.Price * details.quantity, 0)
                .toFixed(2)}
            </span>
          </div>
          <button
            onClick={placeOrder}
            className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
          >
            Place Order
          </button>
        </div>
      )}
      {showBill && bill && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
    <div className="bg-white w-96 rounded-xl p-6 shadow-xl">
      
      <h2 className="text-2xl font-bold text-center text-red-600 mb-2">
        Digital Bill
      </h2>

      <p className="text-sm text-center text-gray-600 mb-4">
        Order ID: <span className="font-semibold">{bill.DisplayOrderId}</span>
      </p>

      <div className="space-y-2">
        {bill?.order?.items?.map((item) => (
          <div key={item._id} className="flex justify-between text-sm">
            <span>{item.name} × {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      <hr className="my-3" />

      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        {bill?.order?.totalAmount && (
          <span>₹{bill.order.totalAmount}</span>
        )}

      </div>

      <p className="text-xs text-gray-500 mt-3 text-center">
        Please take a screenshot for your reference
      </p>

      <button
        onClick={() => setShowBill(false)}
        className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
      >
         Close
        </button>
      </div>
    </div>
   )}

    </div>
  );
  
};

export default UserMenu;
