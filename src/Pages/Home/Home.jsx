import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Hero from "../../Components/Hero/Hero";
import { FaCoffee } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";
import CoffeeCard from "../../Components/CoffeeCard/CoffeeCard";
import { useState } from "react";
import ClientCoffeeCard from "../../Components/ClientCoffeeCard/ClientCoffeeCard";


const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)
    console.log(coffees);

    return (
        <div className="">
            <Hero></Hero>
            <Banner></Banner>

            {/* Products section */}
            <div className="bg-[url('https://i.ibb.co.com/fNtQhMV/1.png')] bg-cover bg-center">
                <div className="flex flex-col items-center justify-center gap-3 my-14">
                    <p>--- Sip & Savor ---</p>
                    <h1 className="font-rancho text-3xl stroke-black lg:text-6xl drop-shadow-2xl">Our Products</h1>
                    <Link  className="flex justify-center"><button className="flex gap-1 items-center font-rancho btn shadow-none border-0 text-white text-xl bg-[#E3B577]">Show All <FaCoffee></FaCoffee></button></Link>
                </div>

                <div className=" lg:max-w-7xl mx-auto ">

                    <div className=" mx-auto w-fit grid grid-flow-row lg:grid-cols-2 justify-center items-center gap-9 ">

                        {
                            coffees.map((coffee,_id) => <ClientCoffeeCard key={_id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></ClientCoffeeCard>)
                        }
                        
                    </div>
                </div>
            </div>


            {/* Follow Section */}
            <div className="lg:max-w-7xl max-w-lg mx-auto">
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
            </div>
        </div>
    );
};

export default Home;