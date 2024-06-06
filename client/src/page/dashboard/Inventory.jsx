import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TableComponent from "../../components/TableComponent";

const StatProfile = () => {
  const data = [
    
      {
        ItemId: 1,
        name: "Apple",
        image: "https://example.com/apple.jpg",
        quantity: 10,
        price: 2.5,
        brand: "Organic Farms",
        category: "Grocery",
      },
      {
        ItemId: 2,
        name: "Bread",
        image: "https://example.com/bread.jpg",
        quantity: 15,
        price: 3,
        brand: "Baker's Delight",
        category: "Grocery",
      },
      {
        ItemId: 3,
        name: "Toothpaste",
        image: "https://example.com/toothpaste.jpg",
        quantity: 20,
        price: 2,
        brand: "Colgate",
        category: "Toiletries",
      },
      {
        ItemId: 4,
        name: "Rice",
        image: "https://example.com/rice.jpg",
        quantity: 12,
        price: 10,
        brand: "Royal Basmati",
        category: "Grocery",
      },
      {
        ItemId: 5,
        name: "Milk",
        image: "https://example.com/milk.jpg",
        quantity: 8,
        price: 3.5,
        brand: "DairyPure",
        category: "Grocery",
      },
      {
        ItemId: 6,
        name: "Soap",
        image: "https://example.com/soap.jpg",
        quantity: 18,
        price: 1.5,
        brand: "Dove",
        category: "Toiletries",
      },
      {
        ItemId: 7,
        name: "Banana",
        image: "https://example.com/banana.jpg",
        quantity: 14,
        price: 1.5,
        brand: "Tropical Farms",
        category: "Grocery",
      },
      {
        ItemId: 8,
        name: "Eggs",
        image: "https://example.com/eggs.jpg",
        quantity: 16,
        price: 4,
        brand: "Farm Fresh",
        category: "Grocery",
      },
      {
        ItemId: 9,
        name: "Shampoo",
        image: "https://example.com/shampoo.jpg",
        quantity: 22,
        price: 5,
        brand: "Pantene",
        category: "Toiletries",
      },
      {
        ItemId: 10,
        name: "Cereal",
        image: "https://example.com/cereal.jpg",
        quantity: 11,
        price: 4.5,
        brand: "Kellogg's",
        category: "Grocery",
      },
      {
        ItemId: 11,
        name: "Chicken",
        image: "https://example.com/chicken.jpg",
        quantity: 9,
        price: 8,
        brand: "Free Range Farms",
        category: "Grocery",
      },
      {
        ItemId: 12,
        name: "Yogurt",
        image: "https://example.com/yogurt.jpg",
        quantity: 17,
        price: 2.5,
        brand: "Chobani",
        category: "Grocery",
      },
      {
        ItemId: 13,
        name: "Toilet Paper",
        image: "https://example.com/toilet-paper.jpg",
        quantity: 13,
        price: 6,
        brand: "Charmin",
        category: "Toiletries",
      },
      {
        ItemId: 14,
        name: "Pasta",
        image: "https://example.com/pasta.jpg",
        quantity: 20,
        price: 2.5,
        brand: "Barilla",
        category: "Grocery",
      },
      {
        ItemId: 15,
        name: "Orange Juice",
        image: "https://example.com/orange-juice.jpg",
        quantity: 15,
        price: 3.5,
        brand: "Tropicana",
        category: "Grocery",
      },
    
  ];

  return (
    <>
      <div className="overflow-y-auto ">
        <div className="flex-grow dark:bg-gray-900 bg-cover bg-center  items-center justify-center  bg-gray-900">
          <div className="">
            <div className="md:col-span-2 my-4 px-4  ">
              {/* <!-- Right side content --> */}
              <div className="h-screen ">
                <div className=" w-full mx-auto grid gap-4 grid-cols-1">
                  {/* <!---stats--> */}
                  <div className="text-xl px-3  font-bold text-gray-200 leading-8 ">
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
                          799
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
                          Total Customer
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

                  <div className="text-xl px-3  font-bold text-gray-100 leading-8 ">
                    PRODUCT STOCKS
                  </div>

                  <div className="flex flex-col justify-center p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                    
                    <div className="container mx-auto ">
                      <TableComponent data={data} />
                    </div>
                  </div>
 
                 {/* <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col p-3  relative items-start justify-start bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                      <div className="flex flex-col w-full justify-center items-center overflow-y-displayScroll  gap-4">
                        <div className="flex flex-col p-1 bg-white shadow-md hover:shodow-lg rounded-2xl">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              <div className="flex flex-col ml-3">
                                <div className="font-medium leading-none">
                                  Delete Your Acccount ?
                                </div>
                                <p className="text-sm text-gray-600 leading-none mt-1">
                                  By deleting your account you will lose your
                                  all data
                                </p>
                              </div>
                            </div>
                            <button className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">
                              Delete
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col p-1 bg-white shadow-md hover:shodow-lg rounded-2xl">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              <div className="flex flex-col ml-3">
                                <div className="font-medium leading-none">
                                  Delete Your Acccount ?
                                </div>
                                <p className="text-sm text-gray-600 leading-none mt-1">
                                  By deleting your account you will lose your
                                  all data
                                </p>
                              </div>
                            </div>
                            <button className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-4">

                      <div className="text-md text-gray-100 font-medium leading-8 ">
                        Leaderboard (Current rank)
                      </div>
                      <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center mr-auto">
                            <div className="inline-flex w-12 h-12">
                              <img
                                src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                                alt="aji"
                                className=" relative w-12 h-12 object-cover rounded-2xl"
                              />

                              <span></span>
                            </div>

                            <div className="flex flex-col ml-3">
                              <div className="font-medium leading-none text-gray-100">
                                Aji
                              </div>
                              <p className="text-sm text-gray-500 leading-none mt-1">
                                UI/UX Designer
                              </p>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </a>
                          <a className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 ml-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center mr-auto">
                            <div className="inline-flex w-12 h-12">
                              <img
                                src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                                alt="aji"
                                className=" relative p-1 w-12 h-12 object-cover rounded-2xl"
                              />
                              <span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-green-400 opacity-75"></span>
                              <span></span>
                            </div>

                            <div className="flex flex-col ml-3 min-w-0">
                              <div className="font-medium leading-none text-gray-100">
                                Groupname
                              </div>
                              <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                                Beautiful hand-crafted SVG icons
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col ml-3 min-w-0">
                            <span className="text-xs text-gray-500 text-right mb-1">
                              9:02pm
                            </span>
                            <div className="flex">
                              <a className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                              <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-green-100 bg-green-400 rounded-full ml-2">
                                99
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center mr-auto">
                            <div className="inline-flex w-12 h-12">
                              <img
                                src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                                alt="aji"
                                className=" relative p-1 w-12 h-12 object-cover rounded-2xl"
                              />
                              <span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-gray-600 opacity-75"></span>
                              <span></span>
                            </div>

                            <div className="flex flex-col ml-3 min-w-0">
                              <div className="font-medium leading-none text-gray-100">
                                Ajimon
                              </div>
                              <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                                Jul 066, 2021, 8.25 PM
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col ml-3 min-w-0">
                            <div className="flex">
                              <h5 className="flex items-center font-medium text-gray-300 mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>{" "}
                                1800
                              </h5>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-green-400 ml-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col p-4 bg-gray-800 border border-gray-800 shadow-md hover:text-green-500 text-gray-400 hover:shodow-lg rounded-2xl transition ease-in duration-500  transform hover:scale-105 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center mr-auto">
                            <div className="-space-x-5 flex ">
                              <img
                                src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                                alt="aji"
                                className=" relative p-1 w-12 h-12 object-cover rounded-2xl border-2 border-gray-600 bg-gray-800"
                              />
                              <img
                                src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                                alt="aji"
                                className=" relative p-1 w-12 h-12 object-cover rounded-2xl border-2 border-gray-600 bg-gray-800 shadow"
                              />
                            </div>

                            <div className="flex flex-col ml-3 min-w-0">
                              <div className="font-medium leading-none text-gray-100">
                                Pending Request{" "}
                              </div>
                              <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                                Jul 066, 2021, 8.25 PM
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col ml-3 min-w-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 ml-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  */}


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
