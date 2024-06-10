import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpenUpdate, onCloseUpdate, product}) => {
  const [itemData, setItemData] = useState({
    name: "",
    brand: "",
    quantity: 0,
    category: "",
    image: "",
    price: 0.0
  });

  console.log("product  Dattaa", product);

  useEffect(() => {
    if (product) {
      setItemData(product); // Set itemData to product data
    }
  }, [product]);

  const navigate = useNavigate();
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === "quantity" || name === "price" ? Number(value) : value;
    setItemData({
      ...itemData,
      [name]: parsedValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/product/updateProduct/${itemData.id}`, itemData)
      .then(() => {
        alert("Product updated successfully");
        onCloseUpdate();
        window.location.reload();
      })
      .catch((error) => {
        alert('Error updating product',error);
      });
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${
        isOpenUpdate ? "" : "hidden"
      }`}
    >
     <div className="bg-white border-4 rounded-lg shadow-lg relative w-full max-w-xl m-6 sm:w-auto">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl text-black font-semibold">Update Product</h3>
          <button
            onClick={onCloseUpdate}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="product-modal"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <form  onSubmit={handleSubmit} >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="product-name"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={itemData.name}
                  onChange={handleInputChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Fruits Vegetables Beverages and more..."
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={itemData.category}
                    onChange={handleInputChange}
                  class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                >
                  <option value="">Select category</option>
                  <option value="FRUIT">FRUIT</option>
                  <option value="VEGETABLE">VEGETABLE</option>
                  <option value="DAIRY">DAIRY</option>
                  {/* <option value="FruBeveragesits">Beverages</option>
                  <option value="Vegetables">Vegetables</option> */}
                </select>
              </div>
  
{/* <div className="mt-4">
  <label
    htmlFor="photo-upload"
    className="text-sm font-medium text-gray-900 block mb-2"
  >
    Upload Photo
  </label>
  <input
    id="photo-upload"
    name="photo"
    type="file"
    accept="image/*"
    className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md p-2"
  />
</div> */}

<div>
                <label
                  htmlFor="photo"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  name="image"
                  value={itemData.image}
                  onChange={handleInputChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Enter Image url link"
                  required=""
                />
              </div>

              <div>
                <label
                  htmlFor="quantity"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  value={itemData.quantity}
                  onChange={handleInputChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Electronics"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="brand"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  value={itemData.brand}
                  onChange={handleInputChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Electronics"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={itemData.price}
                  onChange={handleInputChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="$2300"
                  required=""
                />
              </div>

              <div className="p-6 border-t border-gray-200 rounded-b">
          <button
            className="text-white min-w-full bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
          >
            Update
          </button>
        </div>
            </div>

            
          </form>
        </div>

        
      </div>
    </div>
  );
};

export default Modal;
