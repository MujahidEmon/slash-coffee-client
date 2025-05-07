import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion } from "motion/react"

const Hero = () => {
    
    return (
        <div className="bg-[url('https://i.ibb.co.com/chyDRQL/6.jpg')] bg-cover bg-center w-screen h-[280px] lg:h-[600px] font-raleway bg-scroll lg:bg-fixed">

            <motion.div initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
             className="lg:ml-16 ml-10 gap-y-2 lg:gap-y-5 w-xs lg:w-2xl flex flex-col justify-center h-full">
                <p className="font-rancho text-white lg:text-5xl text-xl">Would you like a Cup of Delicious Coffee?</p>
                <p className="text-xs lg:text-base  text-white">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                {/* {user ? <Link onClick={handleLogout} className="btn bg-[#E3B577] w-fit shadow-none border-0 font-rancho text-white text-xl">Logout</Link> : 
                <Link to={'/login'} className="btn bg-[#E3B577] w-fit shadow-none border-0 font-rancho text-white text-xl">Login</Link>
                } */}
                <Link to={'/coffees'} className="btn bg-[#E3B577] w-fit shadow-none border-0 font-rancho text-white lg:text-sm text-xs">Show All Coffees</Link>
            </motion.div>
        </div>
    );
};

export default Hero;