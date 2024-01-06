import Banner from "../../components/Banner";
import Categories from "./Categories";
import Services from "./Services";
import SpecialDishes from "./SpecialDishes";
import Testimonials from "./Testimonials";

const Home = ()=> {
   return (
      <>
         <Banner />
         <Categories />
         <SpecialDishes />
         <Testimonials />
         <Services />
      </>
   );
};

export default Home;