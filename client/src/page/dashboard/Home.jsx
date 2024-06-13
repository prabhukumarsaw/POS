import React, { useEffect, useState } from "react";
import Card from "../../components/Card.jsx";
import CartComponent from "./CartComponent.jsx";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { searchQuery } = useOutletContext();
  const [menu, setMenu] = useState([]);
  const [filteredItem, setFilteredItem] = useState([]);
  const [selectCategory, setSelectCategory] = useState("all");
  
  //pagination

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/product/viewAllProduct")
      .then((result) => {
        setMenu(result.data.data);
        setFilteredItem(result.data.data);
        console.log(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // filtering data
  const filterItem = (category) => {
    const filtered =
      category === "ALL"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItem(filtered);
    setSelectCategory(category);
  };

 
  // show all data
const showAll = () => {
  setFilteredItem(menu);
  setSelectCategory("ALL");
};

useEffect(() => {
  const filtered = menu
    .filter((item) => (selectCategory === "ALL" ?  item.category === selectCategory : true))
    .filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  setFilteredItem(filtered);
}, [searchQuery, menu, selectCategory]);


  return (
    <>
      <div className="flex-grow flex overflow-x-hidden">
        <div className="flex-grow  overflow-y-auto bg-cover bg-center">
          <div className="flex flex-wrap items-center justify-center py-2 gap-2">
            <button
              onClick={showAll}
              className={` btn btn-sm  btn-neutral bg-blue-500 text-white btn-active uppercase px-4 py-2 text-center rounded-lg ${
                selectCategory === "all" ? "active" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => filterItem("VEGETABLE")}
              className=" btn btn-sm  btn-neutral bg-blue-500 text-white uppercase px-4 py-2 text-center rounded-lg"
            >
              Vegetables
            </button>
            <button
              onClick={() => filterItem("DAIRY")}
              className="btn btn-sm  btn-neutral bg-blue-500 text-white  uppercase px-4 py-2 text-center rounded-lg"
            >
              Dairy
            </button>
            <button
              onClick={() => filterItem("FRUIT")}
              className="btn btn-sm  btn-neutral bg-blue-500 text-white  uppercase px-4 py-2 text-center rounded-lg"
            >
              Fruits
            </button>
            
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mx-2 h-10">
            {filteredItem.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
        {/* Display All User Types */}
        <CartComponent />
      </div>
    </>
  );
};

export default Home;
