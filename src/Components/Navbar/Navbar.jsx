import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="bg-[url('https://i.ibb.co.com/Ws9RY1T/15.jpg')] py-3 w-full">
            <div className="flex flex-row justify-center items-center gap-2">
                <img className="w-10" src="/src/assets/images/more/logo1.png" alt="" />
                <Link to={'/'} className="text-center text-3xl text-white font-rancho">Slash Coffee Emporium</Link>
            </div>
        </div>
    );
};

export default Navbar;