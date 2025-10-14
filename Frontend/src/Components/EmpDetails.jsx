import {React, useState} from "react"


export default function Employees() {
  const employees = [
    { name: "John Doe", role: "Chef",phone: "+91 98765 43210" ,img: "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" },
    { name: "Sarah Lee", role: "Waiter",phone: "+91 98765 43210" ,img: "https://www.w3schools.com/howto/img_avatar2.png" },
    { name: "Mike Ross", role: "Manager",phone: "+91 98765 43210" ,img: "https://www.w3schools.com/howto/img_avatar.png" },
    { name: "Harvey Spectre", role: "Waiter",phone: "+91 98765 43210" ,img: "https://www.w3schools.com/howto/img_avatar.png" },
  ];
  
  const [clicked, setClicked] = useState(false)

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Employee Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {employees.map((emp, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow flex items-center gap-4 hover:shadow-lg transition"
          >
            
            <img
              src={emp.img}
              alt={emp.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
            />

            
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{emp.name}</h3>
              <p className="text-gray-600 text-sm">{emp.phone}</p>
              <p className="text-gray-500 text-sm">{emp.role}</p>
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
