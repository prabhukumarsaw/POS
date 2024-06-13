import React, { useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import CreateRoom from "../page/dashboard/Checkout";
import DateTime from "../components/DateTime";
import Home from "../page/dashboard/Home";

const Main = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };


  return (
    <div>
      
        <div className=" h-screen flex overflow-hidden text-sm">
          <div className=" w-20 flex-shrink-0 border-r  flex-col hidden sm:flex">
            <div className="h-16 text-blue-500 flex items-center justify-center">
              <svg
                className="w-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 54 33"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex mx-auto flex-grow mt-4 flex-col  space-y-4">
              <Link
                to=""
                className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center bg-blue-100 text-blue-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </Link>
              <Link
                to="inventory"
                className="h-10 w-12 dark:bg-gray-700 dark:text-white rounded-md flex items-center justify-center hover:bg-sky-700"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </Link>

              <Link 
              to='customer'
              className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center hover:bg-sky-700">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </Link>
              <Link
                to="history"
                className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center hover:bg-sky-700"
              >
                <span className="relative flex-shrink-0">
                  <img
                    className="w-7 h-7 rounded-full"
                    src=""
                    alt="profile"
                  />
                  <span className="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900"></span>
                </span>
              </Link>
            </div>
          </div>
          <div className="flex-grow overflow-hidden h-full flex flex-col">
  <div className="h-16 flex w-full border-b px-10 items-center">
    <div className="flex flex-col mx-2">
      <h1 className="text-3xl font-bold">
        Premium <span className="text-green-500">POS</span>
      </h1>
      <DateTime />
    </div>
    <div className="ml-14 flex ">
    <div className="form-control w-60">
    <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search for Rice, Oil, etc."
                className="input input-bordered md:w-auto"
              />
    </div>
    </div>
    <div className="ml-auto flex items-center space-x-7">
      
      <button
        onClick={() => setModalOpen(true)}
        className="h-8 px-3 rounded-md shadow text-white bg-blue-500"
      >
        +
      </button>
      <CreateRoom isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      <button className="h-8 px-3 rounded-md shadow text-white bg-red-500">
        Leave
      </button>
    </div>
  </div>
  
  <Outlet context={{ searchQuery }} />
</div>

        </div>
    </div>
  );
};

export default Main;
