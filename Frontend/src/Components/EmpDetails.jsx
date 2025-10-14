import { useState, useEffect } from "react";
import axios from 'axios'

export default function Employees() {
 const  [employees, setEmployees] = useState([])

useEffect(() => {
  axios.get('api/scanNdine/EmpDetails')
  .then((response) => {
    setEmployees(response.data)
  .catch((error) => {
    console.log(error)
  })
  })
})

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Employee Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {employees.map((emp) => (
          <div
            key={emp.id}
            className="bg-white p-4 rounded-xl shadow flex items-center gap-4 hover:shadow-lg transition"
          >
            
            <img
              src={emp.EmpPhoto}
              alt={emp.EmpName}
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
            />

            
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{emp.EmpName}</h3>
              <p className="text-gray-600 text-sm">{emp.ContactNo}</p>
              <p className="text-gray-500 text-sm">{emp.EmpDuty}</p>
            </div>
            {/* <button className={`mt-2 inline-flex cursor-pointer items-center text-sm p-1 ${clicked ?  "text-green-600 rounded-2xl bg-lime-300 border-2 border-green-600" : " text-red-600 bg-red-300 border-red-600"}`}
            onClick = {() => setClicked(!clicked)}>
           On Duty
        </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}
