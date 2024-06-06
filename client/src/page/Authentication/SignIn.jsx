import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const Index = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: '',
    password: '',

  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setUserData({
      ...userData,
      [name]: value
      
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
        .post('http://localhost:5000/api/login', userData)
        .then((result) => {
          alert("Login successful!");
          navigate('main');
        }).catch((error) => {
          console.log(error);
        });
  }


  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
              }}
            ></div>
          </div>
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            {/* <div>
              <img
                src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                className="w-32 mx-auto"
              />
            </div> */}
            <div className="mt-12 flex flex-col items-center ">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
               Point of Sale(POS)
              </h1>
              <div className="w-full flex-1 mt-8">
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                  <input
                    placeholder="Enter Email"
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    className="w-full max-w-xs font-medium shadow-sm rounded-lg px-3 py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                  />

                  <input
                    placeholder="Enter Password"
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                    className="w-full max-w-xs font-medium shadow-sm rounded-lg px-3 py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                  />

                  <button  type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-80 ">
                    Sign In
                  </button>
                </form>

                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  No account? <Link to="/register" className="text-blue-500">Create one</Link>
                  </div>
                </div>

                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                  </a>
                  and its
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
