import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import Card from "../../components/Card";

const SpecialDishes = () => {
    const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  const [recipes , setRecipes] = useState([]);
  
  const slider = useRef(null);
  
  useEffect( () => {
     const resData = async () => {
        const res = await fetch("/menu.json");
        const data = await res.json();
        const popular = data.filter((item) => item.category === 'popular');
        setRecipes(popular);
     }
     resData();
     
  } , [])
  

  return (
    <div className="section-container my-20">
      <div className="text-left">
        <p className="subtitle">Special Dishes</p>
        <h2 className="heading md:w-[520px]">Standout Dishes From Our Menu</h2>
      </div>
      {/* slider */}

      <Slider {...settings}>
        {
           recipes.map((item , i)=> { 
              return  <Card item={item} key={i}/>
           })
        }
      </Slider>
    </div>
  );
};

export default SpecialDishes;
