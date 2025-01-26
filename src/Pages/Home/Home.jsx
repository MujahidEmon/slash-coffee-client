import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Hero from "../../Components/Hero/Hero";
import { FaCoffee } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";


const Home = () => {
    return (
        <div className="">
            <Hero></Hero>
            <Banner></Banner>

            {/* Products section */}
            <div className="bg-[url('https://i.ibb.co.com/fNtQhMV/1.png')] bg-cover bg-center">
                <div className="flex flex-col items-center justify-center gap-3 my-14">
                    <p>--- Sip & Savor ---</p>
                    <h1 className="font-rancho text-3xl stroke-black lg:text-6xl drop-shadow-2xl">Our Popular Products</h1>
                    <Link className="flex justify-center"><button className="flex gap-1 items-center font-rancho btn shadow-none border-0 text-white text-xl bg-[#E3B577]">Add Coffee <FaCoffee></FaCoffee></button></Link>
                </div>
            </div>


            {/* Follow Section */}
            <div className="lg:max-w-7xl max-w-xs mx-auto">
                <div className="flex flex-col items-center my-14 justify-center">
                    <p>Follow Us Now</p>
                    <h1 className="font-rancho text-6xl">Follow on Instagram</h1>
                </div>
                <div className="grid lg:grid-cols-4 lg:gap-16 gap-7 grid-cols-2">
                    <img className="lg:w-3xs lg:h-[256px] h-[112px] w-28" src="/src/assets/images/cups/Rectangle 9.png" alt="" />
                    <img className="lg:w-3xs lg:h-[256px] h-[112px] w-28" src="/src/assets/images/cups/Rectangle 10.png" alt="" />
                    <img className="lg:w-3xs lg:h-[256px] h-[112px] w-28" src="/src/assets/images/cups/Rectangle 11.png" alt="" />
                    <img className="lg:w-3xs lg:h-[256px] h-[112px] w-28" src="/src/assets/images/cups/Rectangle 12.png" alt="" />
                    <img className="lg:w-3xs lg:h-[256px] h-[112px] w-28" src="/src/assets/images/cups/Rectangle 13.png" alt="" />
                    <img className="lg:w-3xs lg:h-[256px] h-[112px] w-28" src="/src/assets/images/cups/Rectangle 14.png" alt="" />
                    <img className="lg:w-3xs lg:h-[256px] h-[112px] w-28" src="/src/assets/images/cups/Rectangle 15.png" alt="" />
                    <img className="lg:w-3xs lg:h-[256px] h-[112px] w-28" src="/src/assets/images/cups/Rectangle 16.png" alt="" />
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;