import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../App.css";
import Footer from '../components/Footer';
import { useContext } from 'react';
import { authContext } from '../contexts/AuthProvider';
import Loading from '../components/Loading';

const Main = ()=> {
    const {loading} = useContext(authContext);
    
    return (
      <>
        <div>
          {loading ? (
            <Loading />
          ) : (
            <>
              <Navbar />
              <div className="min-h-screen">
                <Outlet />
              </div>
              <Footer />
            </>
          )}
        </div>
      </>
    );
};

export default Main;