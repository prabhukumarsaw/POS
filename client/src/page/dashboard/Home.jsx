import React, { useEffect, useState } from 'react';
import Card from '../../components/Card.jsx';
import AllFriendList from './AllFriendList.jsx';

const Home = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItem, setFilteredItem] = useState([]);
  const [selectCategory, setSelectCategory] = useState("all");
  //pagination

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        setMenu(data); // Update the menu state
        setFilteredItem(data); // Initially set filtered items to all items
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // filtering data
  const filterItem = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItem(filtered);
    setSelectCategory(category);
  };

  // show all data
  const showAll = () => {
    setFilteredItem(menu);
    setSelectCategory("all");
  };

  return (
    <>
      <div className="h-16 flex-grow flex dark:border-gray-800 py-1 px-6">
        <div className='flex flex-wrap items-center justify-center gap-2'>
          <button onClick={showAll} className={selectCategory === "all" ? "active" : ""} >All</button>
          <button onClick={() => filterItem("Vegetables")} className=' bg-blue-500 uppercase px-4 py-2 text-center rounded-md'>Vegetables</button>
          <button onClick={() => filterItem("Dairy")} className='bg-blue-500  uppercase px-4 py-2 text-center rounded-md'>Dairy</button>
          <button onClick={() => filterItem("Fruits")} className='bg-blue-500  uppercase px-4 py-2 text-center rounded-md'>Fruits</button>
        </div>
      </div>

      <div className="flex-grow flex overflow-x-hidden">
        <div className="flex-grow dark:bg-gray-900 overflow-y-auto bg-cover bg-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 m-4">
            {filteredItem.map((item) => (
              <Card key={item._id} item={item} />
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
