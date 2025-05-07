import { useEffect } from "react";
import icon1 from "../../assets/images/processed_icons/1.png"
import icon2 from "../../assets/images/processed_icons/2.png"
import icon3 from "../../assets/images/processed_icons/3.png"
import icon4 from "../../assets/images/processed_icons/4.png"
import "aos/dist/aos.css";
import AOS from "aos";
const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 600, once: false });
      }, []);
    return (
        <div className="bg-[url('https://i.ibb.co.com/G46T3KX8/24.jpg')] bg-cover  bg-center w-screen h-screen md:h-[600px] font-raleway bg-fixed object-contain gap-8 md:gap-16  md:flex grid justify-center items-center grid-cols-2  max-w-screen lg:p-0 p-6 text-white">
            <div data-aos="zoom-in-up"  className="flex justify-center items-center text-center flex-col lg:w-3xs w-36 gap-3">
                <img className="w-12 lg:w-16" src={icon1} alt="" />
                <h1 className="font-rancho text-3xl">Awesome Aroma</h1>
                <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div data-aos="zoom-in-up" className="flex flex-col items-center text-center lg:w-3xs w-36 gap-3">
                <img className="w-12 lg:w-16" src={icon2} alt="" />
                <h1 className="font-rancho text-3xl">High Quality</h1>
                <p className="text-sm">We served the coffee to you maintaining the best quality</p>
            </div>
            <div data-aos="zoom-in-up" className="flex flex-col items-center text-center lg:w-3xs w-36 gap-3">
                <img className="w-12 lg:w-16" src={icon3} alt="" />
                <h1 className="font-rancho text-3xl">Pure Grades</h1>
                <p className="text-sm">The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div data-aos="zoom-in-up" className="flex flex-col items-center text-center  lg:w-3xs w-36 gap-3">
                <img className="w-12 lg:w-16" src={icon4} alt="" />
                <h1 className="font-rancho text-3xl">Proper Roasting</h1>
                <p className="text-sm">Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default Banner;