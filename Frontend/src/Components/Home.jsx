import { DollarSign, Users , ShoppingBag, IndianRupee} from "lucide-react";
import axios from 'axios'
import {useState, useEffect} from "react"

export default function Home() {

  const [orders, setOrders]  = useState([])

  useEffect(() => {
    axios.get('api/scanNdine/Order-details')
    .then((response) => {
      setOrders(response.data)
    })
    .catch((err) => console.log(err))
  })
  const totalSum = orders.reduce((sum, order) => sum + order.totalAmount, 0)

  return (
        <div className="p-6 space-y-6">
      {/* Top Row - Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Revenue Card */}
        <div className="bg-white shadow rounded-2xl p-6 flex items-center justify-between">
          <div>
            <h2 className="text-gray-500 text-sm font-medium">Total Revenue</h2>
            <p className="text-2xl font-bold mt-2">{totalSum}</p>
          </div>
          <IndianRupee className="text-green-600 w-10 h-10" />
        </div>
        {/* Orders Card */}
        <div className="bg-white shadow rounded-2xl p-6 flex items-center justify-between">
          <div>
            <h2 className="text-gray-500 text-sm font-medium">Total Orders</h2>
            <p className="text-2xl font-bold mt-2">{orders.length}</p>
          </div>
          <ShoppingBag className="text-blue-600 w-10 h-10" />
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="p-3">Order ID</th>
                <th className="p-3">Table No.</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", padding: "10px" }}>
                  No Orders Found 📭
                </td>
              </tr>
            ) : (
              orders.map((order) => {
                return(
                <tr className="border-b" key={order._id}>
                <td className="p-3">{order.orderId}</td>
                <td className="p-3">{order.tableNo}</td>
                <td className="p-3 text-green-600 font-medium">{order.status}</td>
              </tr>
              )
                
              }))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}
