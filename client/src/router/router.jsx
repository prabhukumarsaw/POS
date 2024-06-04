import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/dashboard/Home";
import GlobalRoom from "../page/dashboard/GlobalRoom";
import AuthFragment from '../page/Authentication/SignIn'
import RegisterPage from '../page/Authentication/Register'


import TestPage from "../page/dashboard/TestPage";

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
        path: "globalfragment",
        element: <GlobalRoom />,
      },
      
      {
        path: "testpage",
        element: <TestPage />,
      },
      
      
    ],
  },
  

]);

export default router;
