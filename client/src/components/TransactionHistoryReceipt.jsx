import React from 'react';

const TransactionHistoryReceipt = ({ invoice }) => {
  // Handle case where invoice is not provided
  if (!invoice) return null;

  // Destructure invoice object
  const { date, invoiceNumber, customer, orderDetails, totals } = invoice;

  return (
   

      <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md">
        <h1 className="font-bold text-2xl my-4 text-center text-blue-600">Premium Pos Services</h1>
        <hr className="mb-2" />
        <div className="flex justify-between mb-6">
          <h1 className="text-lg font-bold">Invoice</h1>
          <div className="text-gray-700">
            <div>Date: {date}</div>
            <div>Invoice #: {invoiceNumber}</div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">Bill To:</h2>
          <div className="text-gray-700 mb-2">{customer.name}</div>
          <div className="text-gray-700 mb-2">{customer.address}</div>
          <div className="text-gray-700 mb-2">{customer.city}, {customer.state} {customer.zip}</div>
          <div className="text-gray-700">{customer.email}</div>
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
            {/* Map through orderDetails array */}
            {orderDetails.map((item) => (
              <tr key={item.productId}>
                <td className="text-left">{item.productName}</td>
                <td className="text-right">{item.quantity}</td>
                <td className="text-right">₹ {item.price.toFixed(2)}</td>
                <td className="text-right">₹ {(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between font-semibold mt-2">
          <span>Sub Total:</span>
          <span>₹ {totals && totals.subTotal ? totals.subTotal.toFixed(2) : '0.00'}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Discount:</span>
          <span>₹ {totals && totals.discountAmount ? totals.discountAmount.toFixed(2) : '0.00'}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Tax (10%):</span>
          <span>₹ {totals && totals.tax ? totals.tax.toFixed(2) : '0.00'}</span>
        </div>
        <div className="flex justify-between font-semibold mt-2">
          <span>Total:</span>
          <span>₹ {totals && totals.total ? totals.total.toFixed(2) : '0.00'}</span>
        </div>
        <div className="pt-5">
          <div className="text-gray-700 mb-2">Thank you for your business!</div>
          <div className="text-gray-700 text-sm">Please remit payment within 30 days.</div>
        </div>
      </div>
  );
};

export default TransactionHistoryReceipt;
