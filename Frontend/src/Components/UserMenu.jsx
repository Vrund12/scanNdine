import React, { useState } from "react";
import axios from "axios";

const menu = {
  Starters: [
    {
      name: "Garlic Bread",
      desc: "Toasted bread with garlic, butter, and herbs.",
      price: 4.99,
      available: true,
      image:
        "https://imgs.search.brave.com/cxGx7pEQypsG9i7ngpjiN1FqF-GL_UX6z0pqiqRwxU8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zb3V0/aGVybmJpdGUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA5L0Jlc3QtR2Fy/bGljLUJyZWFkLTIu/anBn",
    },  
    {
      name: "Bruschetta",
      desc: "Grilled bread topped with fresh tomatoes and basil.",
      price: 5.49,
      available: false,
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    },
  ],
  Mains: [
    {
      name: "Margherita Pizza",
      desc: "Classic pizza with fresh tomatoes and mozzarella.",
      price: 9.99,
      available: true,
      image:
        "https://imgs.search.brave.com/ckubvZvQ_kvJUne1oUFltvDWpVKG6P0xzoD-vNEZ8hQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbGFzc2ljLW1h/cmdhcml0YS1waXp6/YS13aXRoLW1venph/cmVsbGEtdG9tYXRv/ZXMtYmFzaWwtaXRh/bGlhbi1waXp6YS1j/b21wb3NpdGlvbi13/aXRoLWluZ3JlZGll/bnRzLXdoaXRlLXRh/YmxlLXRvcC12aWV3/LWZvb2QtZmxhdC1s/YXlfMjA3MTI2LTIx/NzkuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA",
    },
    {
      name: "Chicken Alfredo",
      desc: "Creamy Alfredo pasta with grilled chicken.",
      price: 12.49,
      available: true,
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

const UserMenu = () => {
  const [cart, setCart] = useState([]);

  // 🛒 Add item to cart
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
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
      (total, item) => total + item.price * item.quantity,
      0
    );

    const orderData = {
      customerName: "John Doe", // replace with real user if needed
      tableNumber: 5, // replace with dynamic table if needed
      items: cart.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalAmount,
    };

    try {
      const response = await axios.post(
        "http://192.168.66.167:3000/api/orders",
        orderData
      );
      console.log("✅ Order placed:", response.data);
      alert("Order placed successfully!");
      setCart([]);
    } catch (err) {
      console.error("❌ Error placing order:", err);
      alert("Failed to place order.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-orange-50 to-orange-100 min-h-screen p-4">
      <h1 className="text-4xl font-extrabold text-red-600 mb-6 text-center drop-shadow-md">
        Our Delicious Menu
      </h1>

      {/* 🥘 Menu Display */}
      {Object.entries(menu).map(([category, items]) => (
        <section key={category} className="mb-8">
          <h2 className="text-2xl font-bold text-red-700 border-b-4 border-red-400 pb-2 mb-4">
            {category}
          </h2>

          <div className="flex flex-col space-y-6">
            {items.map((item, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] ${
                  !item.available ? "opacity-60" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />

                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-red-700">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-red-600">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="text-red-800 mb-3">{item.desc}</p>

                  {!item.available && (
                    <span className="inline-block bg-red-200 text-red-700 text-sm font-semibold px-3 py-1 rounded-full">
                      Currently Unavailable
                    </span>
                  )}

                  {item.available && (
                    <button
                      onClick={() => addToCart(item)}
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
      ))}

      {/* 🛒 Cart Section */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 border-t-2 border-red-300">
          <h3 className="text-xl font-bold text-red-700 mb-2">Your Cart</h3>
          <ul>
            {cart.map((item, i) => (
              <li key={i} className="flex justify-between mb-1">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold text-lg mt-2">
            <span>Total:</span>
            <span>
              ₹
              {cart
                .reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )
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
    </div>
  );
};

export default UserMenu;
