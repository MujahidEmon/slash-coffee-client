

const Hero = () => {
    return (
        <div className="bg-[url('https://i.ibb.co.com/chyDRQL/6.jpg')]  bg-cover bg-center w-screen border  lg:h-[600px] max-w-screen h-[280px] font-raleway">
            <div className="ml-10 gap-y-2 lg:gap-y-5 w-xs lg:w-2xl flex flex-col justify-center h-full">
                <p className="font-rancho text-white md:text-5xl text-3xl">Would you like a Cup of Delicious Coffee?</p>
                <p className="text-xs lg:text-base  text-white">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className="btn bg-[#E3B577] w-fit shadow-none border-0 font-rancho text-white text-xl">Learn More</button>
            </div>
        </div>
    );
};

export default Hero;