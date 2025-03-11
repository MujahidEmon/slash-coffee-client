import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Hero = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogout = () => {
    logOut()
    .then(result => console.log(result.user))
    .catch
    }
    return (
        <div className="bg-[url('https://i.ibb.co.com/chyDRQL/6.jpg')]  bg-cover bg-center w-screen   lg:h-[600px] max-w-screen h-[280px] font-raleway">
            <div className="lg:ml-16 ml-10 gap-y-2 lg:gap-y-5 w-xs lg:w-2xl flex flex-col justify-center h-full">
                <p className="font-rancho text-white md:text-5xl text-3xl">Would you like a Cup of Delicious Coffee?</p>
                <p className="text-xs lg:text-base  text-white">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                {user ? <Link onClick={handleLogout} className="btn bg-[#E3B577] w-fit shadow-none border-0 font-rancho text-white text-xl">Logout</Link> : 
                <Link to={'/login'} className="btn bg-[#E3B577] w-fit shadow-none border-0 font-rancho text-white text-xl">Login</Link>
                }
            </div>
        </div>
    );
};

export default Hero;