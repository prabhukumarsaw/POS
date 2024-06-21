// src/routes/index.js (or wherever you define your router)
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/dashboard/Home";
import Pos from "../page/dashboard/Home";
import Inventory from "../page/dashboard/Inventory";
import AuthFragment from '../page/Authentication/SignIn';
import RegisterPage from '../page/Authentication/Register';
import Customer from "../page/Customer/Customer";
import History from "../page/History/History";
import CustomerDetail from "../page/Customer/CustomerDetail";

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
        path: "pos",
        element: <Pos />,
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
        path: "/main/customer/customerdetail/:id",
        element: <CustomerDetail />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },
]);

export default router;
