import React, { useContext, useState } from 'react';
import { CartContext } from "../../context/CartContext";
import Checkout from './Checkout';

const TotalCart = () => {
  const { calculateTotals, discount, setDiscount } = useContext(CartContext);
  const [isModalOpen, setModalOpen] = useState(false);

  const totals = calculateTotals();

  return (
    <div className="text-xs glass  text-black tracking-wider p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        <span className="text-blue-500">Total</span>
      </h2>
      <ul>
        <li className="flex justify-between items-center py-1">
          <span>Sub Total</span>
          <span className="text-black">₹ {totals.subTotal.toFixed(2)}</span>
        </li>
        <li className="flex justify-between items-center py-1">
          <span>Discount</span>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(Number(e.target.value))}
            className="text-gray-800 w-24 border-2 border-neutral-600 px-2 py-1 rounded-lg"
          />
        </li>
        <li className="flex justify-between items-center py-1">
          <span>Tax (10%)</span>
          <span className="text-black">₹ {totals.tax.toFixed(2)}</span>
        </li>
        <li className="flex justify-between items-center py-1">
          <span>Total</span>
          <span className="text-black font-semibold">₹ {totals.total.toFixed(2)}</span>
        </li>
      </ul>
      <button onClick={() => setModalOpen(true)} className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
        Checkout({totals.total.toFixed(2)})
      </button>
      <Checkout isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default TotalCart;
