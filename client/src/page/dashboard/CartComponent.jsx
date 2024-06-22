import React, { useContext, useState } from "react";
import OrderCard from "./OrderCard";
import TotalCart from "./TotalCart";
import { CartContext } from "../../context/CartContext";

const CartComponent = () => {
  const { cart, clearCart, orderId } = useContext(CartContext);

  return (
    <>
      <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-3/5 overflow-y-auto lg:block hidden p-5">
        <div className=" flex justify-between text-xs text-gray-400 tracking-wider">
          <h2 className="font-semibold text-lg  text-gray-500 ">
            Orders <span className="text-black text-lg "><span className=" text-blue-600">#</span>{orderId}</span>{" "}
          </h2>
          <button className="btn-xs p-1"
           onClick={clearCart}
           >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#cc0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
           </button>
        </div>
        <div className="grid grid-row-3 pt-2 mx-1">
          {/* Add your OrderCard components here */}
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item, index) => <OrderCard item={item} key={index} />)
          )}
        </div>
        <div className="absolute bottom-0.5 w-60 mr-1">
          <TotalCart />
        </div>
      </div>
    </>
  );
};

export default CartComponent;
