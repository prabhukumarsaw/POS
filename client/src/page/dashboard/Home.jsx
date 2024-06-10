import React, { useEffect, useState } from "react";
import Card from "../../components/Card.jsx";
import AllFriendList from "./AllFriendList.jsx";
import axios from "axios";

const Home = () => {
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


  return (
    <>
      <div className="flex-grow flex overflow-x-hidden">
        <div className="flex-grow dark:bg-gray-900 overflow-y-auto bg-cover bg-center">
          <div className="flex flex-wrap items-center justify-center py-2 gap-2">
            <button
              onClick={showAll}
              className={` bg-blue-500 uppercase px-4 py-2 text-center rounded-md ${
                selectCategory === "all" ? "active" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => filterItem("VEGETABLE")}
              className=" bg-blue-500 uppercase px-4 py-2 text-center rounded-md"
            >
              Vegetables
            </button>
            <button
              onClick={() => filterItem("DAIRY")}
              className="bg-blue-500  uppercase px-4 py-2 text-center rounded-md"
            >
              Dairy
            </button>
            <button
              onClick={() => filterItem("FRUIT")}
              className="bg-blue-500  uppercase px-4 py-2 text-center rounded-md"
            >
              Fruits
            </button>
            
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 mx-2">
            {filteredItem.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
        {/* Display All User Types */}
        <AllFriendList />
      </div>
    </>
  );
};

export default Home;
