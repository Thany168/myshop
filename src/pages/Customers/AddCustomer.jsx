import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function AddCustomer() {
  return (
    <>
      <div>
        <div>
          <div>
            <Link className="flex items-center gap-1" to={"/customer"}>
              <ArrowBackIcon className="text-sm" fontSize="small" />
              <p className="text-md">Back</p>
            </Link>
          </div>
          <div className="mt-1">
            <b className="text-xl ">Add Customer</b>
          </div>
        </div>
        <div className="mt-8 py-5 px-5 bg-white rounded">
          <div>
            <b className="text-lg">Customer Imformation</b>
            <p className="text-sm">Most Important Information about customer</p>
          </div>
          <div className="flex gap-3 mt-5">
            <div className="w-[50%]">
              <span className="text-xs text-gray-500">First Name</span>
              <input
                type="text"
                style={{ border: "1px solid gray" }}
                className="bg-transparent  rounded px-2 py-1 w-full"
              />
            </div>
            <div className="w-[50%]">
              <span className="text-xs text-gray-500">Last Name</span>
              <input
                type="text"
                style={{ border: "1px solid gray" }}
                className="bg-transparent  rounded px-2 py-1 w-full"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <div className="w-[50%]">
              <span className="text-xs text-gray-500">Email Address</span>
              <input
                type="text"
                style={{ border: "1px solid gray" }}
                className="bg-transparent  rounded px-2 py-1 w-full"
              />
            </div>
            <div className="w-[50%]">
              <span className="text-xs text-gray-500">Phone Number</span>
              <input
                type="text"
                style={{ border: "1px solid gray" }}
                className="bg-transparent  rounded px-2 py-1 w-full"
              />
            </div>
          </div>
          <div className="bg-gray-300 h-[1px] mt-[40px]" />
          <div className="mt-5">
            <b className="text-lg">Customer Address</b>
            <p className="text-sm">Shipping address information</p>
          </div>
          <div className="flex gap-3 mt-5">
            <div className="w-[50%]">
              <span className="text-xs text-gray-500">Address</span>
              <input
                type="text"
                style={{ border: "1px solid gray" }}
                className="bg-transparent  rounded px-2 py-1 w-full"
              />
            </div>
            <div className="w-[50%]">
              <span className="text-xs text-gray-500">Apartment</span>
              <input
                type="text"
                style={{ border: "1px solid gray" }}
                className="bg-transparent  rounded px-2 py-1 w-full"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <div className="w-[50%]">
              <span className="text-xs text-gray-500">City</span>
              <input
                type="text"
                style={{ border: "1px solid gray" }}
                className="bg-transparent  rounded px-2 py-1 w-full"
              />
            </div>
            <div className="w-[50%] flex justify-between">
              <div className="w-[48%]">
                <span className="text-xs text-gray-500 ">Country</span>
                {/* <input type="text"   style={{border:"1px solid gray"}} className='bg-transparent  rounded px-2 py-1 w-full' /> */}
                <select
                  name=""
                  id=""
                  style={{ border: "1px solid gray" }}
                  className="rounded px-2 py-1 w-full"
                >
                  <option value="" disabled hidden selected>
                    Choose
                  </option>
                  <option value="">China</option>
                  <option value="">USA</option>
                  <option value="">Germany</option>
                  <option value="">Jpan</option>
                </select>
              </div>
              <div className="w-[48%]">
                <span className="text-xs text-gray-500">Postal Code</span>
                <input
                  type="text"
                  style={{ border: "1px solid gray" }}
                  className="bg-transparent  rounded px-2 py-1 w-full"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="w-[48%] mt-5">
              <span className="text-xs text-gray-500">Phone</span>
              <input
                type="text"
                style={{ border: "1px solid gray" }}
                className="bg-transparent  rounded px-2 py-1 w-full"
              />
            </div>
          </div>
          <div className="bg-gray-300 h-[1px] mt-[40px]" />
          <div className="mt-5">
            <b className="text-lg">Customer Address</b>
            <p className="text-sm">Shipping address information</p>
          </div>
          <div className="w-full h-[60px] mt-5">
            <span className="text-xs text-gray-500">Phone</span>
            <textarea
              name=""
              id=""
              placeholder="Add notes about customer"
              style={{ border: "1px solid gray" }}
              className="bg-transparent  rounded px-2 py-1 h-full w-full"
            ></textarea>
          </div>
          <div className="bg-gray-300 h-[0px] mt-[40px]" />
        </div>
        <div className="bg-gray-300 h-[1px] mt-[40px]" />
        <div className="mt-5">
          <div className="flex gap-2 justify-end">
            <div>
              <button className="text-blue-400 bg-white border py-1 px-4 rounded">
                Cancel
              </button>
            </div>
            <div>
              <button className="text-white bg-blue-600 border py-1 px-4 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCustomer;
