import React from "react";

const InvoiceReceipt = ({ customer, receipt }) => {
  const { createdAt, customerId, id, orderDetails, totalAmount } = receipt;
  const { name, email, phone, address } = customer;

  return (
    <dialog id="my_modal_3" className="modal" contentLabel="Checkout Modal">
      <div className="modal-box">
        <form method="dialog">
          <h1 className="text-lg font-semibold">Receipt</h1>
          <button className="btn btn-circle btn-sm btn-error btn-outline absolute right-2 top-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </form>

        <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md">
          <h1 className="font-bold text-2xl my-4 text-center text-blue-600">
            Premium Pos Services
          </h1>
          <hr className="mb-2" />
          <div className="flex justify-between mb-6">
            <h1 className="text-lg font-bold">Invoice</h1>
            <div className="text-gray-700">
              <div>Date: {createdAt}</div>
              <div>Invoice #: {id}</div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Bill To:</h2>
            <div className="text-gray-700 mb-2">Customer ID: {customerId}</div>
            <div className="text-gray-700 mb-2">{name}</div>
            <div className="text-gray-700 mb-2">{address}</div>
            <div className="text-gray-700">{email}</div>
          </div>
          <table className="w-full pb-2">
            <thead>
              <tr>
                <th className="text-left">Item</th>
                <th className="text-right">Quantity</th>
                <th className="text-right">Price</th>
                <th className="text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.map((item) => (
                <tr key={item.itemId}>
                  <td className="text-left">{item.product.name}</td>
                  <td className="text-right">{item.quantity}</td>
                  <td className="text-right">₹ {item.price.toFixed(2)}</td>
                  <td className="text-right">
                    ₹ {(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between font-semibold mt-2">
            <span>Total:</span>
            <span>₹ {totalAmount}</span>
          </div>
          <div className="pt-5">
            <div className="text-gray-700 mb-2">Thank you for your business!</div>
            <div className="text-gray-700 text-sm">
              Please remit payment within 30 days.
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default InvoiceReceipt;
