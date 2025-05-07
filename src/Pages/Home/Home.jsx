import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Hero from "../../Components/Hero/Hero";
import { FaCoffee } from "react-icons/fa";
import { useContext, useEffect } from "react";
import ClientCoffeeCard from "../../Components/ClientCoffeeCard/ClientCoffeeCard";
import { AuthContext } from "../../Provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";



const Home = () => {
    const {Coffees} = useContext(AuthContext);
    // console.log(Coffees);
    useEffect(() => {
        AOS.init({ duration: 600, once: false });
      }, []);

    return (
        <div className="">
            <Hero></Hero>
            {/* Products section */}
            <div data-aos="fade-up" className="bg-[url('https://i.ibb.co.com/fNtQhMV/1.png')] my-10 bg-cover bg-center">
                <div className="flex flex-col items-center justify-center gap-3 my-14">
                    <p>--- Sip & Savor ---</p>
                    <h1 className="font-rancho text-3xl stroke-black lg:text-6xl drop-shadow-2xl">Our Products</h1>
                    <Link to={'/coffees'} className="flex justify-center"><button className="flex gap-1 items-center font-rancho btn shadow-none border-0 text-white text-xl bg-[#E3B577]">Show All <FaCoffee></FaCoffee></button></Link>
                </div>

                <div className=" lg:max-w-7xl mx-auto ">

                    <div className=" mx-auto w-fit grid grid-flow-row md:grid-cols-2 justify-center items-center gap-9 ">

                        {
                            Coffees.map((coffee,_id) => <ClientCoffeeCard key={_id} coffee={coffee} coffees={Coffees} ></ClientCoffeeCard>)
                        }
                        
                    </div>
                </div>
            </div>
            <Banner></Banner>



            {/* Follow Section */}
            {/* <div className="lg:max-w-7xl max-w-lg mx-auto">
                <div className="flex flex-col items-center my-14 justify-center">
                    <p>Follow Us Now</p>
                    <h1 className="font-rancho text-3xl lg:text-6xl">Follow on Instagram</h1>
                </div>
                <div className="grid mx-auto w-fit lg:grid-cols-4 lg:gap-16 gap-4 grid-cols-3">
                    <img className="lg:w-3xs lg:h-[256px] h-[112px] w-28" src="/src/assets/images/cups/Rectangle 9.png" alt="" />
                    <img className="lg:w-3xs lg:h-[256px] h-[112px] w-28" src="/src/assets/images/cups/Rectangle 10.png" alt="" />
                    <img className="lg:w-3xs lg:h-[256px] h-[112px] w-28" src="/src/assets/images/cups/Rectangle 11.png" alt="" />
                    <img className="lg:w-3xs lg:h-[256px] h-[112px] w-28" src="/src/assets/images/cups/Rectangle 12.png" alt="" />
                    <img className="lg:w-3xs lg:h-[256px] h-[112px] w-28" src="/src/assets/images/cups/Rectangle 13.png" alt="" />
                    <img className="lg:w-3xs lg:h-[256px] h-[112px] w-28" src="/src/assets/images/cups/Rectangle 14.png" alt="" />
                    <img className="lg:w-3xs lg:h-[256px] h-[112px] w-28" src="/src/assets/images/cups/Rectangle 15.png" alt="" />
                    <img className="lg:w-3xs lg:h-[256px] h-[112px] w-28" src="/src/assets/images/cups/Rectangle 16.png" alt="" />
                </div>
            </div> */}
        </div>
    );
};

export default Home;