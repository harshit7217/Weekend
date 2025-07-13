import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDotsFill } from "react-icons/bs";

function TopBar() {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <BsChatSquareDotsFill size={30} className="text-[var(--primary-dark)] mr-2"/>
        <h1 className="text-xl font-bold text-gray-700 ">WEEKEND</h1>
      </div>
      <div className="flex">
        <div className="hidden sm:flex items-center px-6">
          <AiOutlineClockCircle size={20} className="mr-2 text-[var(--primary-dark)]"/>
          <p className="text-sm text-gray-700">9:00 - 18:00</p>
        </div>
        <div className="hidden sm:flex items-center px-6">
          <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]" />
          <p className="text-sm text-gray-700">+123 456 789</p>
        </div>
        <button>Get a free Quote</button>
      </div>
    </div>
  );
}

export default TopBar;
