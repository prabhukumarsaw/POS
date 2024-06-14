import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CustomerTable from '../../components/CustomerTable';

const CustomerDetail = () => {
  const [customer, setCustomer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
    .get(`http://localhost:5000/api/customer/viewOneCustomer/${id}`)
      .then((result) => {
        setCustomer(result.data.data);
        console.log(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!customer) {
    return <div>No customer data available.</div>;
  }
  
  return (
    <div className="overflow-y-auto ">
    <div className="flex-grow  bg-cover bg-center  items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className="md:col-span-1 my-4 px-4   z-10">
          {/* <!-- Left side content --> */}
          <div className="flex flex-col ">
            <div className=" border border-gray-800 shadow-lg  rounded-2xl p-4">
              <div className="flex sm:flex">
                <div className=" relative h-32 w-32  sm:mb-0 mb-3">
                  <img
                    src="f"
                    alt="aji"
                    className=" w-32 h-32 object-cover rounded-2xl"
                  />
                  <Link
                    to="/editProfile"
                    className="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex-auto sm:ml-5 justify-evenly">
                  <div className="flex items-center justify-between sm:mt-2">
                    <div className="flex items-center">
                      <div className="flex flex-col px-2">
                        <div className="w-full flex-none text-lg text-gray-900 font-bold leading-none">
                        {customer.name}
                        </div>
                        <div className="flex-auto text-gray-600 my-1">
                          <span className="mr-3 ">
                          {customer.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex pt-2  text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center">
                      <p className="px-2">{customer.email}</p>
                    </div>
                  </div>
                  <div className="flex pt-2  text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center">
                      <p className="px-2">{customer.phone}</p>
                    </div>
                  </div>
                  <div className="flex pt-2  text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center">
                      <p className="px-2">{customer.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center my-4 p-4 border-gray-800 shadow-md hover:shadow-lg rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
              <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2  bg-orange-400" />
  <input type="radio" name="rating-4" className="mask mask-star-2  bg-orange-400" />
  <input type="radio" name="rating-4" className="mask mask-star-2  bg-orange-400" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2  bg-orange-400" />
  <input type="radio" name="rating-4" className="mask mask-star-2  bg-orange-400" />
</div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 my-4 px-4  ">
          {/* <!-- Right side content --> */}
          <div className="h-screen ">
            <div className=" w-full mx-auto grid gap-4 grid-cols-1">
              

              {/* <!---stats--> */}
              <div className="grid grid-cols-12 gap-4 ">
                <div className="col-span-12 sm:col-span-4">
                  <div className="stat p-4 relative  bg-primary  shadow-lg  rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-14 w-14  absolute bottom-4 right-3 text-red-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <div className="stat-value">
                      {customer.credit}
                    </div>
                    <div className="stat-title py-2">CREDIT</div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
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
                    <div className="text-2xl text-green-500 font-medium leading-8 mt-5">
                      99
                    </div>
                    <div className="text-sm text-gray-500">
                      TOTAL ORDER
                    </div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-14 w-14  absolute bottom-4 right-3 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                    </svg>
                    <div className="flex justify-between items-center ">
                      <i className="fab fa-codepen text-xl text-gray-400"></i>
                    </div>
                    <div className="text-2xl text-yellow-500 font-medium leading-8 mt-5">
                      50
                    </div>
                    <div className="text-sm text-gray-500">REWARD</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-4  border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                <div className="text-md text-gray-800 font-bold text-xl leading-8 mt-1">
                  Transaction
                </div>
                <div className=" text-gray-600 flex items-center ">
                  <CustomerTable/>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>

      <div className="container  m-4"></div>
    </div>
  </div>
  );
};

export default CustomerDetail;
