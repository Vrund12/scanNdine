// import React from "react";

// export default function OrderDetails() {
//   // Sample static data
//   const tableNumber = 5;
//   const orderItems = [
//     { name: "Margherita Pizza", quantity: 2, price: 8 },
//     { name: "Caesar Salad", quantity: 1, price: 5 },
//     { name: "Spaghetti Bolognese", quantity: 1, price: 10 },
//   ];

//   const totalAmount = orderItems.reduce(
//     (total, item) => total + item.quantity * item.price,
//     0
//   );

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
//       <h2 className="text-2xl font-bold mb-4">Order Details</h2>
//       <p className="mb-4 text-gray-700 font-medium">
//         Table Number: <span className="text-blue-500">{tableNumber}</span>
//       </p>

//       <div className="border-t border-b divide-y divide-gray-200">
//         {orderItems.map((item, index) => (
//           <div key={index} className="flex justify-between py-3">
//             <div>
//               <p className="font-semibold">{item.name}</p>
//               <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
//             </div>
//             <p className="font-medium">${item.price * item.quantity}</p>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-between mt-4 pt-4 border-t">
//         <p className="font-bold text-lg">Total:</p>
//         <p className="font-bold text-lg">${totalAmount}</p>
//       </div>

//       <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
//         Mark as Served
//       </button>
//     </div>
//   );
// }
