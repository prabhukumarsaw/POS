import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Card = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const { id, name, brand, category, quantity,  image, price } = item;

  const handleAddtoCart = () => {
    const cartItem = { menuItemId: id, name, quantity: 1, image, price };
    addToCart(cartItem);
  };

  return (
    <button onClick={() => handleAddtoCart(item)}>
      <div
        key={item.id}
        className="card h-52 shadow-xl rounded-lg bg-white border border-gray-400"
      >
        <div className="relative rounded-t-lg  overflow-hidden">
          <figure>
            <img
              className="object-cover object-top w-full"
              src={item.image}
              alt="Mountain"
            />
          </figure>
          {/* <div className="absolute  top-0 right-0 p-1">
          <button className="indicator-item   text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
 
          </button>
          </div> */}
        </div>

        <div className=" text-left py-1 px-2">
          <p className="leading-snug text-xs text-gray-800 font-semibold">
            {item.name}
          </p>

          <div className="flex justify-between py-1">
            <p className="text-gray-600 text-xs">{brand}</p>
            <p className="text-black font-bold text-sm">₹ {price}</p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Card;
