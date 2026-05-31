import React from "react";
import mockOrders from "../../../components/common/DataTable";

const Order = () => {
  return (
    <div className="p-2 bg-gray-100 min-h-screen">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold mb-4">Order Management</h1>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-100 transition">
              Export
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Add New Order
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white mb-4 rounded-t-lg shadow p-4">
        <div className="mb-4 justify-between flex items-center">
          <div className="mb-4">
            <filter className="mr-4">
              <select className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">All Statuses</option>
                <option value="Ready">Ready</option>
                <option value="Processing">Processing</option>
                <option value="Cancel">Cancel</option>
              </select>
            </filter>
            <input
              type="text"
              placeholder="Search orders..."
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4 space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              ?
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              A
            </button>
          </div>
        </div>
        <div className="bg-white rounded-b-lg shadow overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-slate-50 text-slate-500 text-sm">
                <th className="p-4">
                  <input type="checkbox" />
                </th>
                <th className="p-4">Order</th>
                <th className="p-4">Date</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Payment status</th>
                <th className="p-4">Order Status</th>
                <th className="p-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-slate-50 text-sm text-slate-700"
                >
                  <td className="p-4">
                    <input type="checkbox" />
                  </td>
                  <td className="p-4 font-medium text-slate-900">{order.id}</td>
                  <td className="p-4">{order.date}</td>
                  <td className="p-4">{order.customer}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        order.paymentStatus === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-semibold">
                      {order.orderStatus}
                    </span>
                  </td>
                  <td className="p-4 font-medium">{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
            </div>
      </div>
  );
};

export default Order;
