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
import OrderDetail from "./Pages/OrderDetail/OrderDetail.jsx";
import CookingOrders from "./Pages/CookingOrders/CookingOrders.jsx";
import ReadyToServe from "./Pages/ReadyToServe/ReadyToServe.jsx";
import Delivered from "./Pages/Delivered/Delivered.jsx";
import SupportTickets from "./Pages/SupportTickets/SupportTickets.jsx";
import SupportDetail from "./Pages/SupportTickets/SupportDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://slash-expresso-emporium-server.onrender.com/coffees"),
      },
      {
        path: "/addCoffee",
        element: <PrivateRoutes><AddCoffeePage></AddCoffeePage></PrivateRoutes>,
      },
      {
        path: "/updateCoffee/:id",
        element: <PrivateRoutes><UpdatePage></UpdatePage></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`https://slash-expresso-emporium-server.onrender.com/coffees/${params.id}`),
      },
      {
        path: "/coffeeDetails/:id",
        element: <CoffeeDetailsPage></CoffeeDetailsPage>,
        loader: ({ params }) => fetch(`https://slash-expresso-emporium-server.onrender.com/coffees/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      // {
      //   path: "/register",
      //   element: <Register></Register>,
      // },
      {
        path: '/MyCart',
        element: <MyCart></MyCart>
      },
      {
        path: '/manage',
        element: <PrivateRoutes><ManageOrders></ManageOrders></PrivateRoutes>,
        children: [
          {
            path: `/manage`,
            element: <PrivateRoutes><PendingOrders></PendingOrders></PrivateRoutes>
          },
          {
            path: 'cooking',
            element: <PrivateRoutes><CookingOrders></CookingOrders></PrivateRoutes>
          },
          {
            path: 'readyToServe',
            element: <PrivateRoutes><ReadyToServe></ReadyToServe></PrivateRoutes>
          },
          {
            path: 'delivered',
            element: <PrivateRoutes><Delivered></Delivered></PrivateRoutes>
          },
          {
            path: 'manageProducts',
            element: <PrivateRoutes><ManageProducts></ManageProducts></PrivateRoutes>
          },
        ]

      },


      {
        path: '/checkout',
        element: <Checkout></Checkout>
      },
      {
        path: '/coffees',
        element: <AllCoffees></AllCoffees>
      },
      {
        path: "/updateOrder/:id",
        element: <PrivateRoutes><OrderDetail></OrderDetail></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`https://slash-expresso-emporium-server.onrender.com/orders/${params.id}`),
      },
      {
        path: '/supports',
        element: <PrivateRoutes><SupportTickets></SupportTickets></PrivateRoutes>
      },
      {
        path: "/complains/:id",
        element: <PrivateRoutes><SupportDetail></SupportDetail></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`https://slash-expresso-emporium-server.onrender.com/complains/${params.id}`),
      },
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
