import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { CartContext } from "../../context/CartContext";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

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
    width: "58%", // Adjust this width as needed
    maxWidth: "80%", // Set a maximum width
    backgroundColor: "#ffffff", // Semi-transparent background
    backdropFilter: "blur(10px)", // Glass effect
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "12px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const CheckoutBill = ({ isModalOpen, setModalOpen }) => {
  const { cart, calculateTotals } = useContext(CartContext);
  const [totals, setTotals] = useState({});
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const handleCreditCheckout = async (paymentMethod) => {
    try {
      if (paymentMethod === 'credit' && !phone) {
        toast.error("Please enter a valid phone number.");
        return;
      }

      const response = await axios.post("http://localhost:5000/api/customer/addCustomer", {
        phone,
        totalAmount: parseFloat(totals.total),
      });

      let message = 'Order placed successfully!';
    
      toast.success(message, { position: "top-center", autoClose: 1000 });
      console.log("Checkout Response:", response.data);
      setModalOpen(false);
    } catch (error) {
      console.error("Checkout Error:", error);
      toast.error("Failed to place the order. Please try again.");
    }
  };

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
      <div className="grid grid-cols-12 m-1">
        {/* summary */}
        <div className="col-span-7">
          <div className="">
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Bill Summary</h2>
              <table className="table table-xs overflow-y-auto">
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
              </table>
            </div>
          </div>
        </div>

        {/* bill */}
        <div className="col-span-5">
          <div className="p-2">
            <div className="flex justify-center">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Mobile Number
                  </label>
                  <input
                    className="input input-bordered input-md max-w-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="text"
                    placeholder="Customer Mobile No."
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-2">Net Payable</h2>
                  <div className="flex justify-between text-sm text-gray-500 font-semibold mt-2">
                    <span>Sub Total:</span>
                    <span>₹ {totals.subTotal ? totals.subTotal.toFixed(2) : '0.00'}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 font-semibold">
                    <span>Discount:</span>
                    <span>₹ {totals.discountAmount ? totals.discountAmount.toFixed(2) : '0.00'}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 font-semibold">
                    <span>Tax (10%):</span>
                    <span>₹ {totals.tax ? totals.tax.toFixed(2) : '0.00'}</span>
                  </div>
                  <div className="flex justify-between font-semibold mt-2">
                    <span>Total:</span>
                    <span>₹ {totals.total ? totals.total.toFixed(2) : '0.00'}</span>
                  </div>
                </div>
                <div className="flex justify-between gap-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-success text-white py-2 px-4 rounded"
                    
                  >
                    Cash
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-info text-white py-2 px-4 rounded"
                    // onClick={() => handleCheckout('card')}
                  >
                    Card
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCreditCheckout('credit')}
                    className="btn btn-sm btn-error text-white py-2 px-4 rounded"
                  >
                    Credit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CheckoutBill;
