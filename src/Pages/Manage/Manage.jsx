import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "../../Components/CoffeeCard/CoffeeCard";
import { FaCoffee } from "react-icons/fa";

const Manage = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)
    console.log(coffees);
    return (
        <div className="bg-[url('https://i.ibb.co.com/fNtQhMV/1.png')] bg-cover bg-center">
                <div className="flex flex-col items-center justify-center gap-3 mb-14">
                    <p>--- Sip & Savor ---</p>
                    <h1 className="font-rancho text-3xl stroke-black lg:text-6xl drop-shadow-2xl">Our Popular Products</h1>
                    <Link to={'/addCoffee'} className="flex justify-center"><button className="flex gap-1 items-center font-rancho btn shadow-none border-0 text-white text-xl bg-[#E3B577]">Add Coffee <FaCoffee></FaCoffee></button></Link>
                </div>

                <div className=" lg:max-w-7xl mx-auto ">

                    <div className=" mx-auto w-fit grid grid-flow-row lg:grid-cols-2 justify-center items-center gap-9 ">

                        {
                            coffees.map((coffee,_id) => <CoffeeCard key={_id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
                        }
                        
                    </div>
                </div>
            </div>
    );
};

export default Manage;