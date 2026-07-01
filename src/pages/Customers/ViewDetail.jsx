import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Rating } from "@mui/material";
import CustomerTable from "./components/CustomerTable";
import ChipsArray from "./components/ChipsArray";
function ViewDetail() {
  const location = useLocation();
  const customer = location.state;
  const selectCountry=customer.address.split(" ").pop();
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
            <b className="text-2xl ">Customer Information</b>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <div className=" w-[70%] ">
            <div className="bg-white rounded px-5 py-5  ">
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <div>
                    <Avatar
                      src={customer.name}
                      alt={customer.name}
                      sx={{
                        width: 70,
                        height: 70,
                        backgroundColor: "#a1a7c4",
                        fontWeight: 700,
                        fontSize: "2rem",
                      }}
                    />
                  </div>
                  <div>
                    <b className="text-md">{customer.name}</b>
                    <br />
                    <p className="mt-2 text-sm">
                      {selectCountry} <br />
                      {customer.orders.length} Orders <br />
                      Customer for 2 years
                    </p>
                  </div>
                </div>
                <div>
                  <Rating
                    className="mt-3"
                    name="half-rating"
                    defaultValue={4.5}
                    precision={0.5}
                  />
                </div>
              </div>
              <div className="bg-gray-300 h-[1px] mt-[40px]" />
              <div className="mt-5">
                <b className="text-lg">Customer Note</b>
              </div>
              <div className="w-full h-[60px] mt-5">
                <span className="text-md text-gray-500">Notes</span>
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
            <div className=" mt-7 bg-white rounded px-5 py-5  ">
              <div>
                <b>Customer Ordrs</b>
              </div>
              <div>
                <CustomerTable customer={customer} />
              </div>
            </div>
          </div>
          <div className=" w-[28%]">
            <div className="bg-white rounded px-5 py-5 ">
              <div className="flex justify-between">
                <b>Overview</b>
                <p className="text-blue-700 cursor-pointer">Edit</p>
              </div>
              <div className="mt-3">
                <p className="text-gray-400">Address</p>
                <textarea
                  className=" h-24 resize-none "
                  defaultValue={customer.address}
                ></textarea>
              </div>
              <div className="mt-3">
                <p className="text-gray-400">Email Address</p>
                <input className="" type="text" defaultValue={customer.email} />
              </div>
              <div className="mt-3">
                <p className="text-gray-400">Phone</p>
                <input className="" type="text" defaultValue={customer.phone} />
              </div>
              <div className="bg-gray-300 h-[1px] mt-4" />
              <div className="mt-5">
                <p className="text-red-600">Delete Customer</p>
              </div>
            </div>

            <div className=" mt-5 bg-white rounded px-5 py-5 ">
              <div>
                <b>Tags</b>
              </div>
              <div className="mt-3">
                <span className="text-xs text-gray-500">Add Tags</span>
                <input
                  type="text"
                  placeholder="Enter tag name"
                  style={{ border: "1px solid gray" }}
                  className="bg-transparent  rounded px-2 py-1 w-full"
                />
              </div>
              <div className="mt-3 ">
                <ChipsArray customer={customer} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 h-[1px] mt-8" />
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

export default ViewDetail;
