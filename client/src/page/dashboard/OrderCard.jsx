import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const OrderCard = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const { menuItemId, image, name, price, quantity } = item;

  const truncatedName = name.slice(0, 12) + (name.length > 10 ? "..." : "");

  return (
    <div className="max-w-2xl h-20  px-1 mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 shadow-xl rounded-lg text-gray-600 group overflow-hidden relative">
      <button
        onClick={() => removeFromCart(menuItemId)}
        className="absolute top-2 right-2 text-gray-300 hover:text-white"
      >
        ❌
      </button>
      <div className="flex justify-between py-4">
        <div className="flex">
          <div className="">
          <img
            src={image}
            alt={name}
            className="flex-none w-14 h-14 rounded-full object-cover"
            loading="lazy"
            decoding="async"
          /></div>
          <div className="ml-1">
            <p className="text-xs text-gray-800 font-semibold">{truncatedName}</p>
            <p className="rounded-lg text-black font-bold py-2 text-xs w-fit h-fit">
              ₹ {price * quantity}
            </p>
          </div>
        </div>
        <div className="flex items-center mt-5 mx-2">
          <button onClick={() => decreaseQuantity(menuItemId)} className="px-0 mr-2">
            ➖
          </button>
          <span className="text-center text-black w-2">{quantity}</span>
          <button onClick={() => increaseQuantity(menuItemId)} className="px-0 ml-2">
            ➕
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
