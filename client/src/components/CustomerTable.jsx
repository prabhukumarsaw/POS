import React, { useState } from "react";
import InvoiceReceipt from "./InvoiceReceipt";

const CustomerTable = ({ customer }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  console.log("Customer transactions:", customer);

  // Ensure customer.orders is an array
  const orders = customer.order && Array.isArray(customer.order) ? customer.order : [];
 

  const openModal = (order) => {
    setSelectedOrder(order);
    document.getElementById("my_modal_3").showModal();
  };
  return (
    <div className="flex flex-grow">
      <table className="table table-pin-rows">
        {/* head */}
        <thead>
          <tr>
            <th>OrderId</th>
            <th>Transaction Date</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">
                        <span className=" text-blue-500">#</span>
                        {order.id}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
                <td
                  className="font-bold text-xs"
                  style={{ color: order.status === "paid" ? "green" : "red" }}
                >
                  {order.status}
                </td>
                <td className=" text-green-500  font-bold">
                  {order.totalAmount}
                </td>
                <th>
                  <button
                   onClick={() => openModal(order)}
                     className="btn btn-warning mr-2 btn-xs">
                    Invoice
                  </button>
                 
                </th>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No orders found.</td>
            </tr>
          )}
        </tbody>
      </table>
      {selectedOrder && <InvoiceReceipt customer={customer} receipt={selectedOrder} />}
    </div>
  );
};

export default CustomerTable;
