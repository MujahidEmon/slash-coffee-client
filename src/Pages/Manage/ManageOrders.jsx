import { NavLink, Outlet } from "react-router-dom";
import { ChevronDownIcon } from "lucide-react"; // optional icon

const ManageOrders = () => {
  const activeClass =
    "bg-[url('https://i.ibb.co.com/Ws9RY1T/15.jpg')] text-white font-semibold text-[15px] md:rounded-t-2xl text-center lg:py-3 py-1 lg:px-6 px-3 border-b-2 cursor-pointer transition-all";
  const inactiveClass =
    "font-semibold text-[15px] md:rounded-t-2xl text-center py-3 px-6 border-b-2 cursor-pointer transition-all text-slate-600 hover:bg-gray-50 border-transparent";

  return (
    <div className="p-4">
      {/* Dropdown for small screens */}
      <div className="dropdown md:hidden mb-4">
        <label
          tabIndex={0}
          className="btn w-full bg-white border shadow-md justify-between text-[15px] font-semibold text-slate-700"
        >
          Select Menu
          <ChevronDownIcon className="w-4 h-4 ml-2" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu bg-white w-full shadow-lg  rounded-box mt-2"
        >
          <li>
            <NavLink to="" end className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Pending Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="cooking" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Cooking
            </NavLink>
          </li>
          <li>
            <NavLink to="readyToServe" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Ready To Serve
            </NavLink>
          </li>
          <li>
            <NavLink to="delivered" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Delivered
            </NavLink>
          </li>
          <li>
            <NavLink to="manageProducts" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Manage Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/supports" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Support Tickets
            </NavLink>
          </li>
        </ul>
      </div>

      {/* NavLink grid for md and larger screens */}
      <ul className="hidden md:grid md:grid-cols-6 grid-cols-1">
        <NavLink to="" end className={({ isActive }) => isActive ? activeClass : inactiveClass}>
          Pending Orders
        </NavLink>
        <NavLink to="cooking" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
          Cooking
        </NavLink>
        <NavLink to="readyToServe" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
          Ready To Serve
        </NavLink>
        <NavLink to="delivered" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
          Delivered
        </NavLink>
        <NavLink to="manageProducts" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
          Manage Products
        </NavLink>
        <NavLink to="/supports" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
          Support Tickets
        </NavLink>
      </ul>

      <Outlet />
    </div>
  );
};

export default ManageOrders;
