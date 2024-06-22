import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomerTable from '../../components/CustomerTable';
import EditProfile from './EditProfile';

const CustomerDetail = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/customer/viewOneCustomer/${id}`)
        
        setCustomer(response.data.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCustomer();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!customer) {
    return <div>Loading...</div>;
  }
const {name, company, email, phone, address, order} = customer;
  return (
    <div className="">
      <div className="flex-grow bg-cover bg-center items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-1 my-4 px-4 z-10">
            {/* Left side content */}
            <div className="flex flex-col">
              <div className="border border-gray-800 shadow-lg rounded-2xl p-4">
                <div className="flex sm:flex">
                  <div className="relative h-32 w-32 sm:mb-0 mb-3">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                      alt="Profile"
                      className="w-32 h-32 object-cover rounded-2xl"
                    />
                    <EditProfile customer={customer} />
                  </div>
                  <div className="flex-auto sm:ml-5 justify-evenly">
                    <div className="flex items-center justify-between sm:mt-2">
                      <div className="flex items-center">
                        <div className="flex flex-col px-2">
                          <div className="w-full flex-none text-lg text-gray-900 font-bold leading-none">
                            {name}
                          </div>
                          <div className="flex-auto text-gray-600 my-1">
                            <span className="mr-3">{company}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex pt-2 text-sm text-gray-600">
                      <div className="flex-1 inline-flex items-center">
                        <p className="px-2">{email}</p>
                      </div>
                    </div>
                    <div className="flex pt-2 text-sm text-gray-600">
                      <div className="flex-1 inline-flex items-center">
                        <p className="px-2">{phone}</p>
                      </div>
                    </div>
                    <div className="flex pt-2 text-sm text-gray-600">
                      <div className="flex-1 inline-flex items-center">
                        <p className="px-2">{address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center my-4 p-4 rounded-2xl">
              <div className="flex items-center justify-between gap-3">
                <button className="btn w-1/2 no-animation">
                  <svg
                    className="w-6 h-6"
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 58 58"
                    xmlSpace="preserve"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path
                          style={{ fill: '#2CB742' }}
                          d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5 S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"
                        ></path>
                        <path
                          style={{ fill: '#FFFFFF' }}
                          d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42 c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242 c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169 c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097 c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  Send WhatsApp
                </button>
                <button className="btn w-1/2 no-animation">
                  <svg
                    className="h-6 w-6"
                    fill="#dd0303"
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 75.294 75.294"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <g>
                        {' '}
                        <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9 c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089 H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065 c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016 c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102 c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069 c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"></path>{' '}
                      </g>{' '}
                    </g>
                  </svg>
                  Send Email
                </button>
                <label></label>
              </div>
            </div>

            <div className="flex flex-col justify-center my-4 p-4  rounded-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2  bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2  bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2  bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2  bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2  bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 my-4 px-4  ">
            {/* Right side content */}
            <div className="h-screen ">
              <div className="w-full mx-auto grid gap-4 grid-cols-1">
                {/* stats */}
                <div className="grid grid-cols-12 gap-4 ">
                  <div className="col-span-12 sm:col-span-4">
                    <div className="stat p-4 relative bg-primary shadow-lg rounded-2xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-14 w-14  absolute bottom-4 right-3 text-red-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      <div className="stat-value">{customer.credit}</div>
                      <div className="stat-title py-2">CREDIT</div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-4">
                    <div className="p-4 relative bg-gray-800 border border-gray-800 shadow-lg rounded-2xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-14 w-14  absolute bottom-4 right-3 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                      </svg>
                      <div className="flex justify-between items-center ">
                        <i className="fab fa-behance text-xl text-gray-400"></i>
                      </div>
                      <div className="text-2xl text-green-500 font-medium leading-8 mt-5">
                        {order.length}
                      </div>
                      <div className="text-sm text-gray-500">
                        TOTAL ORDER
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-4">
                    <div className="p-4 relative bg-gray-800 border border-gray-800 shadow-lg rounded-2xl">
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

                <div className="flex flex-col justify-center p-4 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                  <div className="text-md text-gray-800 font-bold text-xl leading-8 mt-1">
                    Transaction
                  </div>
                  <div className=' overflow-y-auto h-80'>
                  <div className="text-gray-600 flex items-center">
                  <CustomerTable customer={customer}  />
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container m-4"></div>
      </div>
    </div>
  );
};

export default CustomerDetail;
