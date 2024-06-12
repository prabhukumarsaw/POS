import React, { useContext, useState } from "react";
import OrderCard from "./OrderCard";
import TotalCart from "./TotalCart";
import { CartContext } from "../../context/CartContext";

const AllFriendList = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-3/5 overflow-y-auto lg:block hidden p-5">
        <div className="text-xs text-gray-400 tracking-wider">
          <h2 className="text-xl font-bold text-white ">
            Orders <span className="text-blue-500">#1,</span>{" "}
          </h2>
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

export default AllFriendList;
