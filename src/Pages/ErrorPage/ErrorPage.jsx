import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { BiArrowBack } from "react-icons/bi";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { TiArrowBackOutline } from "react-icons/ti";


const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Link to={'/'} className="flex justify-center items-center flex-row mt-12"><TiArrowBackOutline size={35} /><button className="font-rancho text-center text-3xl">Back to Home</button></Link>
            <div className="w-fit mx-auto">
                <img src="/src/assets/images/404/404.gif" className="" alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;