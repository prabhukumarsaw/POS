import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/dashboard/Home";
import Inventory from "../page/dashboard/Inventory";
import AuthFragment from '../page/Authentication/SignIn'
import RegisterPage from '../page/Authentication/Register'


import TestPage from "../page/dashboard/TestPage";
import Customer from "../page/Customer/Customer";
import History from "../page/History/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthFragment />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
 
  {
    path: "main",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "customer",
        element: <Customer />,
      },
      
      {
        path: "history",
        element: <History />,
      },
      
      
    ],
  },
  

]);

export default router;
