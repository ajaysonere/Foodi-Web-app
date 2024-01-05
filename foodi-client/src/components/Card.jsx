
/* eslint-disable react/prop-types */

import {Link} from 'react-router-dom';
import {FaHeart} from 'react-icons/fa';
import { useState } from 'react';

const Card = ({item})=> {
   const [heartFilled , setHeartFilled] = useState(false);
   
   const handleHeartClicked = () => {
       setHeartFilled(!heartFilled);
   }
   
   return (
     <div>
       <div className="card w-96 bg-base-100 shadow-xl relative">
         <div
           className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${
             heartFilled ? "text-rose-500" : "text-white"
           }`}
           onClick={handleHeartClicked}
         >
           <FaHeart className=" h-5 w-5 cursor-pointer " />
         </div>
         <Link to={`/menu/${item._id}`}>
           <figure>
             <img
               src={item.image}
               alt=""
               className="hover:scale-105 transition-all duration-200 md:h-27"
             />
           </figure>
         </Link>
         <div className="card-body">
           <Link to={`/menu/${item._id}`}>
             <h2 className="card-title">{item.name}</h2>
           </Link>
           <p>{item.recipe}</p>
           <div className="card-actions justify-between items-center mt-3">
             <h5 className="font-semibold">
               <span className="text-red text-sm">$</span> {item.price}
             </h5>
             <button className="btn text-white bg-green">Buy Now</button>
           </div>
         </div>
       </div>
     </div>
   );
};

export default Card;