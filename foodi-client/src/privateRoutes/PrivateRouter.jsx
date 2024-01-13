import { useContext } from "react";
import { authContext } from "../contexts/AuthProvider";
import { useLocation, Nevigate } from "react-router-dom";
import {Loading} from '../components/Loading';
const PrivateRouter = ({childeren}) => {
    const {user , loading} = useContext(authContext);
    const location = useLocation();
    
    if(loading){
       return <Loading />
    }
    
    if(user){
      return childeren;
    }
    
    return (
      <Nevigate to="/signup" state={{from: location, replace : true}}></Nevigate>
    );
};

export default PrivateRouter;