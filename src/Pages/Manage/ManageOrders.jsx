import { useState } from "react";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import PendingOrders from "../PendingOrders/PendingOrders";
import ConfirmedOrders from "../ConfirmedOrders/ConfirmedOrders";
import ManageProducts from "./ManageProducts";
// import ManageProducts from "./ManageProducts";


const ManageOrders = () => {

  return (
    <div className="p-4">
      <ul className="flex">
        <NavLink
          id="homeTab"
          to="" end

          className={({ isActive }) =>
            isActive ? "bg-[url('https://i.ibb.co.com/Ws9RY1T/15.jpg')] text-white  font-semibold text-[15px] rounded-t-2xl text-center py-3 px-6 border-b-2 cursor-pointer transition-all" : "font-semibold text-[15px] rounded-t-2xl text-center py-3 px-6 border-b-2 cursor-pointer transition-all text-slate-600 hover:bg-gray-50 border-transparent"
          }
        >
          Pending Orders
        </NavLink>
        <NavLink
          to={'cooking'}
          id="homeTab"

          className={({ isActive }) =>
            isActive ? "bg-[url('https://i.ibb.co.com/Ws9RY1T/15.jpg')] text-white  font-semibold text-[15px] rounded-t-2xl text-center py-3 px-6 border-b-2 cursor-pointer transition-all" : "font-semibold text-[15px] rounded-t-2xl text-center py-3 px-6 border-b-2 cursor-pointer transition-all text-slate-600 hover:bg-gray-50 border-transparent"
          }
        >
          Cooking
        </NavLink>
        <NavLink
          to={'readyToServe'}
          id="homeTab"

          className={({ isActive }) =>
            isActive ? "bg-[url('https://i.ibb.co.com/Ws9RY1T/15.jpg')] text-white  font-semibold text-[15px] rounded-t-2xl text-center py-3 px-6 border-b-2 cursor-pointer transition-all" : "font-semibold text-[15px] rounded-t-2xl text-center py-3 px-6 border-b-2 cursor-pointer transition-all text-slate-600 hover:bg-gray-50 border-transparent"
          }
        >
          Ready To Serve
        </NavLink>
        <NavLink
          to={'delivered'}
          id="homeTab"

          className={({ isActive }) =>
            isActive ? "bg-[url('https://i.ibb.co.com/Ws9RY1T/15.jpg')] text-white  font-semibold text-[15px] rounded-t-2xl text-center py-3 px-6 border-b-2 cursor-pointer transition-all" : "font-semibold text-[15px] rounded-t-2xl text-center py-3 px-6 border-b-2 cursor-pointer transition-all text-slate-600 hover:bg-gray-50 border-transparent"
          }
        >
          Delivered
        </NavLink>
        <NavLink
          to={'manageProducts'}
          id="homeTab"

          className={({ isActive }) =>
            isActive ? "bg-[url('https://i.ibb.co.com/Ws9RY1T/15.jpg')] text-white  font-semibold text-[15px] rounded-t-2xl text-center py-3 px-6 border-b-2 cursor-pointer transition-all" : "font-semibold text-[15px] rounded-t-2xl text-center py-3 px-6 border-b-2 cursor-pointer transition-all text-slate-600 hover:bg-gray-50 border-transparent"
          }
        >
          Manage Products
        </NavLink>
      </ul>


      <Outlet></Outlet>
    </div>
  );
};

export default ManageOrders;