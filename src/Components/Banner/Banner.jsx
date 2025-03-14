

const Banner = () => {
    return (
        <div className="bg-[#ECEAE3] h-[450px] lg:h-[200px] gap-8 lg:gap-16  lg:flex grid justify-center items-center grid-cols-2  max-w-screen lg:p-0 p-6">
            <div className="flex flex-col lg:w-3xs w-36 gap-1">
                <img className="w-12 lg:w-16" src="/src/assets/images/icons/1.png" alt="" />
                <h1 className="font-rancho text-3xl">Awesome Aroma</h1>
                <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className="flex flex-col lg:w-3xs w-36 gap-1">
                <img className="w-12 lg:w-16" src="/src/assets/images/icons/2.png" alt="" />
                <h1 className="font-rancho text-3xl">High Quality</h1>
                <p className="text-sm">We served the coffee to you maintaining the best quality</p>
            </div>
            <div className="flex flex-col lg:w-3xs w-36 gap-1">
                <img className="w-12 lg:w-16" src="/src/assets/images/icons/3.png" alt="" />
                <h1 className="font-rancho text-3xl">Pure Grades</h1>
                <p className="text-sm">The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className="flex flex-col lg:w-3xs w-36 gap-1">
                <img className="w-12 lg:w-16" src="/src/assets/images/icons/4.png" alt="" />
                <h1 className="font-rancho text-3xl">Proper Roasting</h1>
                <p className="text-sm">Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default Banner;