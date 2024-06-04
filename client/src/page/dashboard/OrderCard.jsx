import React from "react";

const OrderCard = () => {
  return (
    <figcaption className="flex items-center space-x-2 gap-1 p-2 m-2 ">
      <img
        src="https://www.foodiesfeed.com/wp-content/uploads/2023/09/fresh-vegetables.jpg"
        alt=""
        className="flex-none w-14 h-14 rounded-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="flex-auto">
        <div className="mt-0.5 dark:text-slate-300">
          Pouring honey on pancakes
        </div>
        <span className="text-blue-500"> RS 99</span>
      </div>
      <div className="flex-auto">
      <button
        className="h-8 px-3 p-2 space-x-4 rounded-md shadow text-white bg-blue-500"
      >
        -
      </button>
      <div className="flex-auto  text-center">
        <span className="text-green-500">5</span>
      </div>
      <button
        className="h-8 px-3 p-2 rounded-md shadow text-white bg-blue-500"
      >
        +
      </button>
      </div>
    </figcaption>
  );
};

export default OrderCard;
