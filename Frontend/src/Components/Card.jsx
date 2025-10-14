import React from "react";

function Card() {
  return (
    <div className=" relative w-80 h-60  bg-white rounded-2xl shadow-2xl ">
      
        <img src="https://i.pravatar.cc/150?img=1" alt=""
        className="inline-flex w-35 h-35 rounded-full object-cover mb-3 py-2 px-2"  />
      
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-black">Name</h1>
        <p className=" text-l text-gray-800">
          Role: Waiter
        </p>
        <p ></p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-s p-1 text-green-600 rounded-2xl bg-lime-300 border-2 border-green-600">
           On Duty
        </button>
      </div>
    </div>
  );
}

export default Card;
