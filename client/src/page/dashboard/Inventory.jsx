import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TableComponent from "../../components/TableComponent";

const StatProfile = () => {
 
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/product/viewAllProduct')
      .then((result) => {
        setProductData(result.data.data);
        console.log(result.data.data);
      }).catch((error) => {
        console.log(error);
      });
      
  }, []);

  return (
    <>
      <div className="overflow-y-auto ">
        <div className="flex-grow  bg-cover bg-center  items-center justify-center  ">
          <div className="">
            <div className="md:col-span-2 my-4 px-4  ">
              {/* <!-- Right side content --> */}
              <div className="h-screen ">
                <div className=" w-full mx-auto grid gap-4 grid-cols-1">
                  {/* <!---stats--> */}
                  <div className="text-xl px-3  font-bold text-gray-900 leading-8 ">
                    PRODUCT ACTIVITY
                  </div>
                  <div className="grid grid-cols-8 gap-4 ">
                    <div className="col-span-12 sm:col-span-4">
                      <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                        <div className="text-md text-gray-200">Today Sales</div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-14 w-14  absolute bottom-4 right-3 text-red-500"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
                          120
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-4">
                      <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                        <div className="text-md text-gray-200">Total Items</div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-14 w-14  absolute bottom-4 right-3 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        <div className="flex justify-between items-center ">
                          <i className="fab fa-behance text-xl text-gray-400"></i>
                        </div>
                        <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
                          {productData.length}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-4">
                      <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                        <div className="text-md text-gray-200">
                          Total Sales
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-14 w-14  absolute bottom-4 right-3 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        <div className="flex justify-between items-center ">
                          <i className="fab fa-codepen text-xl text-gray-400"></i>
                        </div>
                        <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
                          20
                        </div>
                      </div>
                    </div>

                    <div className="col-span-12 sm:col-span-4">
                      <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                        <div className="text-md text-gray-200">
                          Total Order
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-14 w-14  absolute bottom-4 right-3 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        <div className="flex justify-between items-center ">
                          <i className="fab fa-codepen text-xl text-gray-400"></i>
                        </div>
                        <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
                          80
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-xl px-3  font-bold text-gray-900 leading-8 ">
                    PRODUCT STOCKS
                  </div>

                  <div className="flex flex-col justify-center p-4  border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                    
                    <div className="container mx-auto ">
                      <TableComponent productData={productData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container  m-4"></div>
        </div>
      </div>
    </>
  );
};

export default StatProfile;
