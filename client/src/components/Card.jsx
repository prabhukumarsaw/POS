import React, { useContext } from "react";
import { Link } from "react-router-dom";



const Card = ({item}) => {
  const {id, name, brand, category, image, price,} = item;
  const handleAddtoCart = (item)=>{
    const cartItem = {menuItenId:id, name, quantity: 1, image, price,};
    console.log("cartItem", cartItem);
  }

  return (
    <button onClick={()=> handleAddtoCart(item)}>
    <div key={item.id} className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 shadow-xl rounded-lg text-white-900"  style={{background:'#353D48'}}>
      <div className="relative rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src={item.image}
          alt="Mountain"
        />
        <div className="absolute top-0 right-0 p-2">
          
            <h1 className="ml-auto text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-green-500 text-grey-300 rounded-md">
            <span class="text-xl text-blue-500">1</span>
            </h1>
        
        </div> 
        
      </div>
      
              

      <div className="p-3 flex items-center justify-between "  >
        <div className="flex items-center">
          <div className="ml-2 flex flex-col">
            <div className="leading-snug text-sm text-white  font-bold">{item.name}</div>
            <div className="leading-snug text-xs text-gray-400 pr-1">{item.brand}</div>
          </div>
        </div>
        <Link to='' className="h-8 px-3 text-md font-bold border-blue-400 rounded-md">₹ 
        { item.price}
        </Link>
      </div>
    </div>
    </button>
  );
};



export default Card;
