import React from "react";
import { Link } from 'react-router-dom'
import FixedBottomNavigation from "./components/FixedBottomNavigation";
function Customers() {
  return <>
    <div>
      <div className="flex justify-between ">
        <div>
          <b className="text-2xl">Customers</b>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border  px-5 py-1 text-blue-500 rounded"><Link to={'create'}>Export</Link></button>
          <button className="bg-[#1e5eff] px-5 py-1 text-white rounded"><Link to={'addcustomer'}>+ Add Customer</Link></button>
        </div>
      </div>
      <div className="w-full  px-7 bg-white mt-5 rounded">
        <FixedBottomNavigation/>
      </div>
    </div>
  </>;
}

export default Customers;
