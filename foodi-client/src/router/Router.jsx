import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Products/Menu";
import Signup from "../components/Signup";
import Updateprofile from "../Pages/Dashboard/Updateprofile";
import Cartpage from "../Pages/Products/Cartpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/update-profile",
        element: <Updateprofile />,
      },
      {
        path: '/cart-page',
        element: <Cartpage />
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
