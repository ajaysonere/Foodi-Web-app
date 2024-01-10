import { useEffect, useState } from "react";
import Card  from '../../components/Card';
import { FaFilter } from "react-icons/fa";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage , setCurrentPage] = useState(1);
  const [itemPerPage] = useState(9);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch("/menu.json");
        const data = await res.json();
        setMenu(data);
        setFilteredItems(data);
      };

      fetchData();
    } catch (error) {
      console.log(`error while fetching data ${error}`);
    }
  }, []);

  //   filter data
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategories(category);
    setCurrentPage(1);
  };
  
  // Show all
  const showAllData = ()=> {
     setFilteredItems(menu);
     setSelectedCategories('all');
     setCurrentPage(1);
  }
  
  
  // filter 
  const handleSortChange = (option) => {
      setSortOption(option);
      
      let sortedItem = [...filteredItems];
      
      switch(option){
         case "A-Z": sortedItem.sort((a,b) => a.name.localeCompare(b.name));
                     break;
         case "Z-A": sortedItem.sort((a,b) => b.name.localeCompare(a.name));
                     break;
         case "low-to-high": sortedItem.sort((a,b) => a.price - b.price);
                     break;
         case "high-to-low": sortedItem.sort((a,b) => b.price - a.price);
                     break;
        default: 
              break;
      }
      
      setFilteredItems(sortedItem);
      setCurrentPage(1);
  }
  
  // Pagination
  
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = filteredItems.slice(indexOfFirstItem , indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Menu section */}
      <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC]to-100%">
        <div className="py-60 flex flex-col justify-center items-center gap-8">
          {/* Left */}
          <div className="text-center space-y-7 px-2">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug">
              For the Love of Delicious
              <span className="text-green"> Food </span>
            </h2>
            <p className="text-xl text-[#4A4A4A] md:w-4/5 mx-auto">
              come with family and feel the joy of the mouthwatering food such
              as greek salad , Lasange , Butternut, Pumpkin, Tokusen, Olivas
              Rellenas and more for a moderate cost.
            </p>
            <button className="btn bg-green px-8 py-3 font-semobold text-white rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* menu shop container */}

      <div className="section-container">
        {/* filter btns and options */}
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-10">
          {/* btns */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap mb-10">
            <button
              onClick={showAllData}
              className={selectedCategories === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => filterItems("salad")}
              className={selectedCategories === "salad" ? "active" : ""}
            >
              Salad
            </button>
            <button
              onClick={() => filterItems("pizza")}
              className={selectedCategories === "pizza" ? "active" : ""}
            >
              Pizza
            </button>
            <button
              onClick={() => filterItems("soup")}
              className={selectedCategories === "soup" ? "active" : ""}
            >
              Soups
            </button>
            <button
              onClick={() => filterItems("dessert")}
              className={selectedCategories === "dessert" ? "active" : ""}
            >
              Desserts
            </button>
            <button
              onClick={() => filterItems("drinks")}
              className={selectedCategories === "drinks" ? "active" : ""}
            >
              Drinks
            </button>
          </div>

          {/* filter btns */}
          <div className="flex  justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="h-4 w-4 text-white" />
            </div>
            {/* select filter */}
            <select
              name="sort"
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-2  px-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high"> Low To High </option>
              <option value="high-to-low"> High To Low </option>
            </select>
          </div>
        </div>
        {/* Product cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {currentItem.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </div>
      </div>
      
      {/* Pagination */}
       <div className="flex justify-center my-8">
           {
              Array.from({length: Math.ceil(filteredItems.length/itemPerPage)}).map((_ , index) => {
                  return (
                     <button key={index+1} onClick={() => paginate(index+1)} className={`mx-1 px-3 py-1 rounded-full  ${currentPage === index+1 ? "bg-green text-white" : "bg-gray-200"}`}>
                        {index+1}
                     </button>
                  )
              })
           }
       </div>
    </div>
  );
};

export default Menu;
