import React, { useState } from "react";

const TableComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(
    data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).length / rowsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleUpdate = (itemId) => {
    // Handle update action
    console.log("Update item with ID:", itemId);
  };

  const handleDelete = (itemId) => {
    // Handle delete action
    console.log("Delete item with ID:", itemId);
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
          onClick={() => setModalOpen(true)}
          className="h-8 px-3 mx-2 rounded-md shadow text-white bg-blue-500"
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
              <tr key={item.ItemId}>
                <td>{item.ItemId}</td>
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
                      onClick={() => handleUpdate(item.ItemId)}
                      className="bg-green-500 hover:bg-green-700 text-white p-1  rounded mr-2"
                    >
                      Entry
                    </button>
                    <button
                      onClick={() => handleUpdate(item.ItemId)}
                      className="bg-blue-500 hover:bg-blue-700 text-white p-1  rounded mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(item.ItemId)}
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
