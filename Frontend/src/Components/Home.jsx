import { DollarSign, Users , ShoppingBag, IndianRupee} from "lucide-react";
import axios from 'axios'
import {useState, useEffect} from "react"
import OrderIdContext from "../Context/OrderIdContext";

export default function Home() {

  const [allorders, setAllOrders]  = useState([])
  const [ActiveOrders, setActiveOrder] = useState([])
  //const {orderId} = useContext(OrderIdContext)

  useEffect(() => {
    axios.get('api/scanNdine/Order-details')
    .then((response) => {
      
      const formattedOrders = response.data.map( details => ({
        ...details,
       DisplayOrderId: details._id.toString()
                            .slice(-6)
                            .toUpperCase()
      }))
      const PendingOrders = response.data.filter((order) => order.status===     'pending').map(orders => ({
        ...orders, DisplayOrderId: orders._id.toString()
                                              .slice(-6)
                                              .toUpperCase()
      }))

      setActiveOrder(PendingOrders)
      setAllOrders(formattedOrders)
    })
    .catch((err) => console.log(err))
  }, [])

  const markAsServed = async (orderId) => {
  try {
    await axios.patch(`/api/scanNdine/orders/${orderId}/serve`);

    // Remove order from UI (not DB)
    setActiveOrder((prev) => prev.filter((order) => order._id !== orderId));
  } catch (err) {
    console.error("Error updating order status", err);
    alert("Failed to update order");
  }
};

 
  const totalSum = allorders.reduce((sum, order) => sum + order.totalAmount, 0)

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
            <p className="text-2xl font-bold mt-2">{allorders.length}</p>
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
          <th className="p-3">Action</th>
        </tr>
      </thead>

      <tbody>
        {ActiveOrders.length === 0 ? (
          <tr>
            <td colSpan="4" className="text-center p-4">
              No Orders Found 📭
            </td>
          </tr>
        ) : (
          ActiveOrders.map((order) => (
            <tr className="border-b" key={order._id}>
              <td className="p-3">{order.DisplayOrderId}</td>
              <td className="p-3">{order.tableNo}</td>

              <td className="p-3 font-medium text-yellow-600">
                {order.status}
              </td>

              <td className="p-3">
                <button
                  onClick={() => markAsServed(order._id)}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm"
                >
                  Mark Served
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
</div>

    </div>

  );
}
