const categoriesItem = [
  {
    id: "1",
    title: "Main Dish",
    desc: "(86 dishes)",
    Image: "/images/home/category/img1.png",
  },
  {
    id: "2",
    title: "Break Fast",
    desc: "(12 Break Fast)",
    Image: "/images/home/category/img2.png",
  },
  {
    id: "3",
    title: "Dessert",
    desc: "(48 dessert)",
    Image: "/images/home/category/img3.png",
  },
  {
    id: "4",
    title: "Browse All",
    desc: "(256 items)",
    Image: "/images/home/category/img4.png",
  },
];


const Categories = ()=> {
    return (
      <div className="section-container py-16">
        <div className="text-center">
          <p className="subtitle">
            Customer Favorites
          </p>
          <h2 className="heading">
            Popular Catagories
          </h2>
        </div>
        
        {/* Categories */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
           {
              categoriesItem.map(({id,title,desc, Image})=> {
                return (
                   <div key={id} className="shadow-lg rounded-md bg-white py-6 px-5 w-72  mx-auto  text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all">
                      <div className="flex w-full mx-auto items-center justify-center"> 
                          <img src={Image} alt="image" className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28"></img>
                      </div>
                      <div className="mt-5 space-y-1">
                         <h5>{title}</h5>
                         <p>{desc}</p>
                      </div> 
                   </div>
                )
              })
           }
        </div>
        
      </div>
    );
};

export default Categories;