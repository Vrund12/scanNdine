import { useRef, useState } from "react";
import { ImagePlus, ChevronDown } from "lucide-react";
import axios from 'axios'
export default function EmpForm({closeForm}) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [preview, setPreview] = useState(null);

  const fileRef = useRef();

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", name)
    formData.append("mobile", mobile)
    formData.append("designation", designation)
    formData.append("photo", fileRef.current.files[0])

    try{
      await axios.post("api/scanNdine/AddEmployee", formData)
      alert("Employee data added successfully!")
      closeForm()
    }
    catch(error) {
     console.error("error occurred: ", error)
     alert("Submission failed. Try again")
     closeForm() 
    }

    console.log({
      name,
      mobile,
      designation,
      photo: fileRef.current.files[0],
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 overflow-y-auto p-4">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-3xl bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
  >
    {/* Header */}
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-[#0f172a]">
        Employee Information
      </h1>

      <p className="text-gray-500 mt-1 text-sm">
        Fill in the details below to add a new employee.
      </p>
    </div>

    <div className="border-t border-gray-200 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8">
        {/* Upload Section */}
        <div>
          <h2 className="text-lg font-semibold text-[#0f172a] mb-4">
            Profile Photo
          </h2>

          <div className="flex flex-col items-center">
            <div
              onClick={() => fileRef.current.click()}
              className="w-36 h-36 rounded-full border-2 border-dashed border-gray-300 
                         flex items-center justify-center overflow-hidden cursor-pointer
                         hover:border-blue-500 transition"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <ImagePlus size={40} className="text-gray-400" />
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileRef}
              onChange={handlePhoto}
              className="hidden"
            />

            <p className="mt-4 text-sm font-medium text-gray-600">
              Click to upload photo
            </p>

            <p className="text-gray-400 text-xs mt-1">
              JPG, PNG (Max 2MB)
            </p>

            <button
              type="button"
              onClick={() => fileRef.current.click()}
              className="mt-4 px-5 py-2 border border-gray-300 rounded-lg
                         text-blue-600 text-sm font-medium hover:bg-gray-50 transition"
            >
              Choose File
            </button>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-[#0f172a] mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              placeholder="Enter Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 border border-gray-300 rounded-lg px-4
                         text-sm outline-none focus:ring-2 focus:ring-blue-100
                         focus:border-blue-500"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-semibold text-[#0f172a] mb-2">
              Mobile Number <span className="text-red-500">*</span>
            </label>

            <div className="flex">
              <div
                className="h-12 px-4 border border-gray-300 border-r-0 rounded-l-lg
                           flex items-center text-sm font-semibold text-[#0f172a]"
              >
                +91
              </div>

              <input
                type="tel"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full h-12 border border-gray-300 rounded-r-lg px-4
                           text-sm outline-none focus:ring-2 focus:ring-blue-100
                           focus:border-blue-500"
              />
            </div>
          </div>

          {/* Designation */}
          <div>
            <label className="block text-sm font-semibold text-[#0f172a] mb-2">
              Designation <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <select
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="w-full h-12 border border-gray-300 rounded-lg px-4
                           text-sm appearance-none outline-none bg-white
                           focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
              >
                <option value="">Select designation</option>
                <option>Manager</option>
                <option>Chef</option>
                <option>Waiter</option>
                <option>Cashier</option>
              </select>

              <ChevronDown
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="border-t border-gray-200 mt-8 pt-6 flex justify-end gap-4">
        <button
          type="button"
          className="px-6 py-2 border border-gray-300 rounded-lg
                     text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-6 py-2 bg-[#2155d6] hover:bg-[#1d4ed8]
                     text-white text-sm font-medium rounded-lg transition"
        >
          Save Employee
        </button>
      </div>
    </div>
  </form>
</div>
  );
}

