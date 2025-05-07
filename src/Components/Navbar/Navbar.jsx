import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { CgShoppingCart } from "react-icons/cg";
import logo from "../../assets/images/more/logo1.png"

const Navbar = () => {
  const { user, cartCoffees, totalPrice, logOut } = useContext(AuthContext);
  
    const handleLogout = () => {
    logOut()
    .then(result => console.log(result.user))
    .catch
    }
  return (
    <div className="navbar bg-[url('https://i.ibb.co.com/Ws9RY1T/15.jpg')]">
      <div className="flex-1">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="">
            <div className="flex navbar-center flex-row justify-center items-center gap-2">
              <img
                className="w-10"
                src={logo}
                alt=""
              />
              <Link
                to={"/"}
                className="text-center lg:text-3xl text-xl text-white font-rancho"
              >
                Slash Coffee Emporium
              </Link>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/coffees"}>All Products</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
        {/* <Link to={'/'} className="btn btn-ghost text-xl">SLASH Coffee Emporium</Link> */}
      </div>
      <p className="font-semibold mr-3">{user?.displayName}</p>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <CgShoppingCart color="white" size={25}></CgShoppingCart>
              <span className="badge badge-sm indicator-item">{cartCoffees.length}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">{cartCoffees.length} Items</span>
              <span className="text-info">Subtotal: BDT {totalPrice}</span>
              <div className="card-actions">
                <Link to={"/MyCart"} className="btn bg-[#FCAB35] btn-block">
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost ml-4 btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-fit p-2 shadow"
          >
            {/* <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li> */}
            <li>
              {user ? <Link onClick={handleLogout} className="btn bg-[#E3B577] w-fit shadow-none border-0 font-rancho text-white text-sm">Logout</Link> :
                <Link to={'/login'} className="btn bg-[#E3B577] w-fit shadow-none border-0 font-raleway text-white text-sm">Login</Link>
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
