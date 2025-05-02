import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes/Root/Root.jsx";
import Home from "./Pages/Home/Home.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import AddCoffeePage from "./Pages/AddCoffeePage/AddCoffeePage.jsx";
import UpdatePage from "./Pages/UpdatePage/UpdatePage.jsx";
import CoffeeDetailsPage from "./Pages/CoffeeDetailsPage/CoffeeDetailsPage.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import PrivateRoutes from "./Provider/PrivateRoutes.jsx";
import MyCart from "./Pages/MyCart/MyCart.jsx";
import ManageOrders from "./Pages/Manage/ManageOrders.jsx";
import Checkout from "./Pages/Checkout/Checkout.jsx";
import { Toaster } from "react-hot-toast";
import AllCoffees from "./Pages/AllCoffees/AllCoffees.jsx";
import PendingOrders from "./Pages/PendingOrders/PendingOrders.jsx";
import ConfirmedOrders from "./Pages/ConfirmedOrders/ConfirmedOrders.jsx";
import ManageProducts from "./Pages/Manage/ManageProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
      {
        path: "/addCoffee",
        element:<PrivateRoutes><AddCoffeePage></AddCoffeePage></PrivateRoutes>,
      },
      {
        path: "/updateCoffee/:id",
        element:<UpdatePage></UpdatePage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "/coffeeDetails",
        element: <CoffeeDetailsPage></CoffeeDetailsPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/MyCart',
        element:<MyCart></MyCart>
      },
      {
        path: '/manage',
        element: <PrivateRoutes><ManageOrders></ManageOrders></PrivateRoutes>,
        children: [
          {
            path:`/manage`,
            element:<PendingOrders></PendingOrders>
          },
          {
            path:'confirmed',
            element:<ConfirmedOrders></ConfirmedOrders>
          },
          {
            path:'manageProducts',
            element:<ManageProducts></ManageProducts>
          },
        ]
        
      },
      
      
      {
        path: '/checkout',
        element: <Checkout></Checkout>
      },
      {
        path: '/coffees',
        element:<AllCoffees></AllCoffees>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </AuthProvider>
  </StrictMode>
);
