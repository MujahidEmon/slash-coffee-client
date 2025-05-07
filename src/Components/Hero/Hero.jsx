import { Link } from "react-router-dom";
import { motion } from "motion/react"

const Hero = () => {
    
    return (
        <div className="bg-[url('https://i.ibb.co.com/sdttpXWZ/17.jpg')] md:bg-[url('https://i.ibb.co.com/chyDRQL/6.jpg')]  items-center bg-cover  bg-center w-screen h-screen lg:h-[600px] font-raleway bg-fixed object-contain">

            <motion.div initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.3,
                scale: { type: "spring", visualDuration: 0.3, bounce: 0.2 },
            }}
             className="lg:ml-16 ml-3 gap-y-6 lg:gap-y-5 w-xs md:w-2xl flex flex-col  justify-center h-full">
                <p className="font-rancho text-white  md:text-left lg:text-5xl lg:font-bold font-normal text-6xl">Would you like a Cup of Delicious Coffee?</p>
                <p className="text-base text-justify text-white">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                {/* {user ? <Link onClick={handleLogout} className="btn bg-[#E3B577] w-fit shadow-none border-0 font-rancho text-white text-xl">Logout</Link> : 
                <Link to={'/login'} className="btn bg-[#E3B577] w-fit shadow-none border-0 font-rancho text-white text-xl">Login</Link>
                } */}
                <Link to={'/coffees'} className="btn bg-[#E3B577] w-fit shadow-none border-0 font-rancho text-white lg:text-sm text-xs">Show All Coffees</Link>
            </motion.div>
        </div>
    );
};

export default Hero;