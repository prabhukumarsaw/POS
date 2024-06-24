import React from 'react';

const TransactionHistoryReceipt = React.forwardRef(({ invoice }, ref) => {

  // Handle case where invoice is not provided
  if (!invoice) return null;

  // Destructure invoice object
  const { createdAt, id, customer, orderDetails, totalAmount } = invoice;

  console.log("receipt", ref);

  return (
   

      <div   className=" bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md">
        
        <h1 className="font-bold text-2xl my-2 -mt-6 text-center text-blue-600">Premium Pos Services</h1>
        <hr className="mb-2" />
        <div className="flex justify-between mb-6">
        <div className="text-gray-700">
            
            <div className='font-extralight text-xs '>Invoice #: {id}</div>
            <div className=' font-extralight text-xs'>Date: {createdAt}</div>
          </div>
          <h1 className="text-lg font-bold">Invoice</h1>
          
        </div >
        <div className="mb-5" >
          <h2 className="text-md font-bold mb-1">Bill To:</h2>
          <div className="text-gray-700 text-xs mb-1">{customer.name}</div>
          <div className="text-gray-700 text-xs mb-1">{customer.address}</div>
          <div className="text-gray-700 text-xs mb-1">{customer.email}</div>
        </div>
        <table className="table table-xs  w-full pb-1">
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
              <tr key={item.productId} className='text-gray-700'>
                <td className="text-left text-xs">{item.product.name}</td>
                <td className="text-right text-xs font-semibold">{item.quantity}</td>
                <td className="text-right text-xs">{item.price.toFixed(2)}</td>
                <td className="text-right text-xs">{" "}₹{(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='divider'></div>
        <div className="flex justify-between font-semibold mt-2">
          <span>Sub Total:</span>
          <span>₹ {totalAmount }</span>
        </div>
        <div className="flex justify-between font-semibold mt-2">
          <span>Tax: </span>
          <span>₹ 0.0</span>
        </div>
        
        <div className="flex justify-between font-semibold mt-2">
          <span>Total:</span>
          <span>₹ {totalAmount && totalAmount.total ? totalAmount.total.toFixed(2) : totalAmount}</span>
        </div>
        <div className="pt-5">
          <div className="text-gray-700 mb-2">Thank you for your business!</div>
          <div className="text-gray-700 text-sm">Please remit payment within 30 days.</div>
        </div>
      </div>
      
  );
});

export default TransactionHistoryReceipt;
