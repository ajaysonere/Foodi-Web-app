import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Products/Menu";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
         {
            path:"/",
            element: <Home />
         },
         {
            path:"/menu",
            element:<Menu />
         }
      ]
    }
]);

export default router;