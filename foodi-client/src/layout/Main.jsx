import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../App.css";
import Footer from '../components/Footer';

const Main = ()=> {
    return (
       <>
          <Navbar />
          <Outlet />
          <Footer />
       </>
    );
};

export default Main;