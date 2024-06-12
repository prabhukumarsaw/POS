import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { CartContext } from "../../context/CartContext";

// Make sure to set appElement to satisfy accessibility requirements
Modal.setAppElement("#root");

const roomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    width: "50%", // Adjust this width as needed
    maxWidth: "400px", // Set a maximum width
    backgroundColor: "#F8F9F9", // Semi-transparent background
    backdropFilter: "blur(10px)", // Glass effect
    
    borderRadius: "12px",
  },
};

const CheckoutBill = ({ isModalOpen, setModalOpen }) => {
  const { cart, calculateTotals } = useContext(CartContext);
  const [totals, setTotals] = useState({});
  
  useEffect(() => {
    if (isModalOpen) {
      setTotals(calculateTotals());
    }
  }, [isModalOpen, cart, calculateTotals]);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setModalOpen(false)}
      contentLabel="Checkout Modal"
      style={roomStyles}
    >
      <div className="max-w-md mx-auto mt-8 p-4 ">
        <h1 className="text-lg font-semibold mb-4">Checkout</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Mobile Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Enter your mobile number"
              name="phone"
            />
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Bill Summary</h2>
            {/* <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Item</th>
                  <th className="text-right">Quantity</th>
                  <th className="text-right">Price</th>
                  <th className="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.menuItemId}>
                    <td className="text-left">{item.name}</td>
                    <td className="text-right">{item.quantity}</td>
                    <td className="text-right">₹ {item.price.toFixed(2)}</td>
                    <td className="text-right">₹ {(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table> */}
            <div className="flex justify-between font-semibold mt-2">
              <span>Sub Total:</span>
              <span>₹ {totals.subTotal ? totals.subTotal.toFixed(2) : '0.00'}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Discount:</span>
              <span>₹ {totals.discountAmount ? totals.discountAmount.toFixed(2) : '0.00'}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Tax (10%):</span>
              <span>₹ {totals.tax ? totals.tax.toFixed(2) : '0.00'}</span>
            </div>
            <div className="flex justify-between font-semibold mt-2">
              <span>Total:</span>
              <span>₹ {totals.total ? totals.total.toFixed(2) : '0.00'}</span>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Print
            </button>
            <button
              type="button"
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            >
              UPI
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CheckoutBill;
