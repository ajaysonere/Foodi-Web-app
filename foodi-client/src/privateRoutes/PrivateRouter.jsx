import { useContext } from "react";
import { authContext } from "../contexts/AuthProvider";
import { useLocation, Navigate } from "react-router-dom";
import Loading from "../components/Loading";


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
      <Navigate to="/signup" state={{from: location, replace : true}}></Navigate>
    );
};

export default PrivateRouter;