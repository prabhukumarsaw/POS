import React, { useState } from "react";
import ItemModal from '../components/AddItemModal';
import ProductUpdateModel from '../components/ProductUpdateModel';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const TableComponent = ({ productData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to hold the selected product for update
  
  

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenUpdateModal = (product) => { 
    setSelectedProduct(product); // Set the selected product for update
    setIsOpenUpdate(true);
  };

  const handleCloseUpadteModal = () => {
    setIsOpenUpdate(false);
  };


  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = productData
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(
    productData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).length / rowsPerPage
  );

  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  
  const navigate = useNavigate();
  const handleDelete = (id) => {
    


    setLoading(true);
    axios
      .delete(`http://localhost:5000/api/product/deleteProduct/${id}`)
      .then(()=> {
        setLoading(false);
        alert("Deleted Successfully")
        window.location.reload();
      })
      .catch ((error) => {
        setLoading(false);
        alert('Error')
      });

    console.log("Delete item with ID:", id);
  };

  return (
    <div className="flex flex-col">
      <div className=" container">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 text-black my-4 border rounded-md"
        />
        <button
          onClick={handleOpenModal}
          className="h-8 px-3 mx-2 rounded-md shadow text-white bg-green-500"
        >
          Add Item
        </button>

        <button
          className="h-8 px-3 mx-2 rounded-md shadow   text-white bg-blue-500"
        >
          PDF
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className=" min-w-full divide-y">
          {/* Table headers */}
          <thead>
            <tr>
              <th>ItemId</th>
              <th>Name</th>
              <th>Image</th>
              <th>Total Stock</th>
              <th>Current Stock</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {currentRows.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <img src={item.image} alt={item.name} className="h-10 w-10" />
                </td>
                <td>{item.quantity}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
                <td>
                  {/* Show action buttons only for the last stock entry */}
                  <>
                   
                    <button
                      
                      onClick={() => handleOpenUpdateModal(item)}
                      className="bg-green-500 hover:bg-green-700 text-white p-1  rounded mr-2"
                    >
                      Entry/Update
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 hover:bg-red-700 text-white  p-1  rounded"
                    >
                      Delete
                    </button>
                  </>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ItemModal isOpen={isOpen} onClose={handleCloseModal} />

      
      <ProductUpdateModel isOpenUpdate={isOpenUpdate} onCloseUpdate={handleCloseUpadteModal} product={selectedProduct} />
    
      
      {/* Pagination */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() =>
            handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
          }
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-md"
        >
          🔙
        </button>
        <div>{`${currentPage} / ${totalPages}`}</div>
        <button
          onClick={() =>
            handlePageChange(
              currentPage < totalPages ? currentPage + 1 : totalPages
            )
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-md"
        >
          ➡️
        </button>
      </div>
    </div>
  );
};

export default TableComponent;
