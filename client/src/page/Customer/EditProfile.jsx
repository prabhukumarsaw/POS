import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const EditProfile = ({customer}) => {
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
  });

  console.log("Customer U  Data", customer);
  const navigate = useNavigate();

  useEffect(() => {
    if (customer) {
      setCustomerData(customer); // Set itemData to product data
    }
  }, [customer]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/customer/updateCustomer/${customerData.id}`, customerData)
      .then(() => {
        toast.info("Customer profile updated successfully",{
          position: "top-center",
          autoClose: 1000,
        });
      })
      .catch((error) => {
        toast("Error Profile Update")
        alert('Error updating Customer',error);
      });
  };

  return (
    <div>
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}

          <label
            htmlFor="my-drawer-4"
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
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-2 xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 min-h-full bg-base-100 text-base-content">

          <h3 className="text-xl font-semibold px-4 py-2">Update Custome Profile</h3>
            <form onSubmit={handleSubmit} className="stat">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Name</span>
                </label>
                <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
              </div>   
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  value={customerData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={customerData.email}
                  onChange={handleInputChange}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="phone"
                  name="phone"
                  value={customerData.phone}
                  onChange={handleInputChange}
                  placeholder="Update Phone No."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Company Name</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={customerData.company}
                  onChange={handleInputChange}
                  placeholder="Company"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Address</span>
                </label>
                <input
                  type="address"
                  name="address"
                  value={customerData.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
