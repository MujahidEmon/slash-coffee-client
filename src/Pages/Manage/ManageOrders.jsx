import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import PendingOrders from "../PendingOrders/PendingOrders";
import ConfirmedOrders from "../ConfirmedOrders/ConfirmedOrders";
import ManageProducts from "./ManageProducts";
// import ManageProducts from "./ManageProducts";


const ManageOrders = () => {
    const [activeTab, setActiveTab] = useState("home");
    const orders = useLoaderData()
    console.log(orders);
  return (
    <div className="p-4">
      <ul className="flex">
        <li
          id="homeTab"
          onClick={() => setActiveTab("home")}
          className={` font-semibold text-[15px] text-center rounded-t-2xl py-3 px-6 border-b-2 cursor-pointer transition-all ${
            activeTab === "home"
              ? " bg-[url('https://i.ibb.co.com/Ws9RY1T/15.jpg')] text-white "
              : "text-slate-600 hover:bg-gray-50 border-transparent"
          }`}
        >
          Pending Orders
        </li>
        <li
          id="contentTab"
          onClick={() => setActiveTab("content")}
          className={` font-semibold text-[15px] rounded-t-2xl text-center py-3 px-6 border-b-2 cursor-pointer transition-all ${
            activeTab === "content"
              ? "bg-[url('https://i.ibb.co.com/Ws9RY1T/15.jpg')] text-white "
              : "text-slate-600 hover:bg-gray-50 border-transparent"
          }`}
        >
          Confirmed Orders
        </li>
        <li
          id="profileTab"
          onClick={() => setActiveTab("profile")}
          className={` font-semibold text-[15px] rounded-t-2xl text-center py-3 px-6 border-b-2 cursor-pointer transition-all ${
            activeTab === "profile"
              ? "bg-[url('https://i.ibb.co.com/Ws9RY1T/15.jpg')] text-white  "
              : "text-slate-600 hover:bg-gray-50 border-transparent"
          }`}
        >
          Manage Products
        </li>
      </ul>

      {/* Home Content */}
      {activeTab === "home" &&<PendingOrders></PendingOrders>}

      {/* Content Content */}
      {activeTab === "content" && <ConfirmedOrders></ConfirmedOrders>}

      {/* Profile Content */}
      {activeTab === "profile" && <ManageProducts></ManageProducts>}
    </div>
  );
};

export default ManageOrders;