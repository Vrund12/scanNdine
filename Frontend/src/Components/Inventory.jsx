import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import axios from 'axios'


const Inventory = () => {
 
  const [dishes, setDishes] = useState([])
  
  useEffect(() => {
    axios.get('api/scanNdine/Inventory')
    .then((response) => {
      setDishes(response.data)
    .catch((err) => console.log(err))
    })
  })

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">📦 Inventory Status</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Dish Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Availability
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                <button className='cursor-pointer border border rounded-3xl p-3'>Edit Availability</button>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dishes.map((dish) => (
              <tr key={dish.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                  {dish.Dish}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-semibold 
                    ${dish.Availability === 'available' ? 'bg-green-500' : 'bg-red-500'}`}>
                    {dish.Availability === 'available' ? (
                      <>
                        <CheckCircleIcon className="w-4 h-4 mr-1" />
                        Available
                      </>
                    ) : (
                      <>
                        <XCircleIcon className="w-4 h-4 mr-1" />
                        Unavailable
                      </>
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
