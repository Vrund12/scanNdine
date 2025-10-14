import { DollarSign, Users , ShoppingBag} from "lucide-react";

export default function Home() {
  return (
    // <div className="space-y-6">
    //   {/* Row 1 - Stats */}
    //   <div className="grid grid-cols-2 gap-6">
    //     {/* Revenue Card */}
    //     <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center justify-center">
    //       <DollarSign size={32} className="text-green-600 mb-2" />
    //       <h2 className="text-lg font-semibold">Total Revenue</h2>
    //       <p className="text-2xl font-bold text-gray-800 mt-2">$12,345</p>
    //     </div>

    //     {/* Customers Card */}
    //     <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center justify-center">
    //       <Users size={32} className="text-blue-600 mb-2" />
    //       <h2 className="text-lg font-semibold">Total Customers</h2>
    //       <p className="text-2xl font-bold text-gray-800 mt-2">245</p>
    //     </div>
    //   </div>

    //   {/* Row 2 - Orders List */}
    //   <div className="bg-white shadow rounded-xl p-6">
    //     <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
    //     <ul className="space-y-3">
    //       <li className="flex justify-between border-b pb-2">
    //         <span>Order #101</span>
    //         <span className="font-medium">Table 5</span>
    //       </li>
    //       <li className="flex justify-between border-b pb-2">
    //         <span>Order #102</span>
    //         <span className="font-medium">Table 2</span>
    //       </li>
    //       <li className="flex justify-between border-b pb-2">
    //         <span>Order #103</span>
    //         <span className="font-medium">Table 8</span>
    //       </li>
    //       <li className="flex justify-between">
    //         <span>Order #104</span>
    //         <span className="font-medium">Table 1</span>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
        <div className="p-6 space-y-6">
      {/* Top Row - Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Revenue Card */}
        <div className="bg-white shadow rounded-2xl p-6 flex items-center justify-between">
          <div>
            <h2 className="text-gray-500 text-sm font-medium">Total Revenue</h2>
            <p className="text-2xl font-bold mt-2">$12,450</p>
          </div>
          <DollarSign className="text-green-600 w-10 h-10" />
        </div>

        {/* Orders Card */}
        <div className="bg-white shadow rounded-2xl p-6 flex items-center justify-between">
          <div>
            <h2 className="text-gray-500 text-sm font-medium">Total Orders</h2>
            <p className="text-2xl font-bold mt-2">320</p>
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
              <tr className="border-b">
                <td className="p-3">#101</td>
                <td className="p-3">Table 5</td>
                <td className="p-3 text-green-600 font-medium">Completed</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">#102</td>
                <td className="p-3">Table 2</td>
                <td className="p-3 text-yellow-600 font-medium">Pending</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">#103</td>
                <td className="p-3">Table 8</td>
                <td className="p-3 text-red-600 font-medium">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}
