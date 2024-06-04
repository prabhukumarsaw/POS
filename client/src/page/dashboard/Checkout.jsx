import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";


// Make sure to set appElement to satisfy accessibility requirements
Modal.setAppElement("#root");

const roomStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
   
    border: "none",
  },
};




// eslint-disable-next-line react/prop-types
const CheckoutBill = ({ isModalOpen, setModalOpen  }) => {


  const navigate = useNavigate();




  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setModalOpen(false)}
      contentLabel="Create Room Modal"
      style={roomStyles}
    >
  

  <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300">
      <h1 className="text-lg font-semibold mb-4">Checkout</h1>
      <form >
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
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Item</th>
                <th className="text-right">Quantity</th>
                <th className="text-right">Price</th>
                <th className="text-right">Total</th>
              </tr>
            </thead>
            <tbody>
                <tr >
                  <td className="text-left">tomy</td>
                  <td className="text-right">2</td>
                  <td className="text-right">$23</td>
                  <td className="text-right">$22</td>
                </tr>
            </tbody>
          </table>
          <div className="flex justify-between font-semibold mt-2">
            <span>Total:</span>
            <span>$55</span>
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
