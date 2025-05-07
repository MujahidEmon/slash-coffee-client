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
      .catch;
  };

  return (
    <div className="navbar relative justify-between bg-[url('https://i.ibb.co.com/Ws9RY1T/15.jpg')]">
      {/* Left Section */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button">
            <div className="flex navbar-center flex-row justify-center items-center gap-2">
              <img className="lg:w-10 w-8" src={logo} alt="" />
              <Link to={"/"} className="text-center lg:text-3xl text-lg text-white font-rancho">
                Slash Coffee Emporium
              </Link>
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/coffees"}>All Products</Link></li>
            <li>
              <button onClick={() => {
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                });
              }}>Contact Us</button>
            </li>
          </ul>
        </div>
        <div className="lg:flex lg:flex-row items-center gap-2 hidden btn-ghost text-xl">
          <img className="lg:w-10 w-8" src={logo} alt="" />
          <Link to={"/"} className="text-center lg:text-3xl text-lg text-white font-rancho">
            Slash Coffee Emporium
          </Link>
        </div>
      </div>

      {/* Center Section - FIXED */}
      <div className="navbar-center absolute left-1/2 transform -translate-x-1/2 font-bold text-white hidden lg:flex">
        <ul className="menu menu-horizontal">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/coffees"}>All Products</Link></li>
          <li>
            <button onClick={() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              });
            }}>Contact Us</button>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <p className="font-semibold mr-3">{user?.displayName}</p>
      <div className="flex-none navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <CgShoppingCart color="white" size={25} />
              <span className="badge badge-sm indicator-item">{cartCoffees.length}</span>
            </div>
          </div>
          <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold">{cartCoffees.length} Items</span>
              <span className="text-info">Subtotal: BDT {totalPrice}</span>
              <div className="card-actions">
                <Link to={"/MyCart"} className="btn bg-[#FCAB35] btn-block">View cart</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost ml-4 btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="User Avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-fit p-2 shadow">
            <li>
              {user ? (
                <Link onClick={handleLogout} className="btn bg-[#E3B577] w-fit shadow-none border-0 font-rancho text-white text-sm">Logout</Link>
              ) : (
                <Link to={'/login'} className="btn bg-[#E3B577] w-fit shadow-none border-0 font-raleway text-white text-sm">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
