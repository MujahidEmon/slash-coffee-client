import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom";


const CoffeeDetailsPage = () => {
    return (
        <div className="bg-[url('https://i.ibb.co.com/fNtQhMV/1.png')] bg-cover bg-center">

            <div className="lg:max-w-7xl   mx-auto max-w-sm">
                <Link to={'/'} className="flex items-center flex-row my-8 hover:cursor-pointer"><TiArrowBackOutline size={35} /><button className="font-rancho text-center text-3xl cursor-pointer">Back to Home</button></Link>
                <div className="bg-[#F4F3F0] mx-auto py-6 flex lg:flex-row flex-col justify-center  max-w-5xl rounded-xl  items-center lg:px-16 px-7 lg:py-18 ">
                    <div className="lg:w-1/2">
                        <img src="/src/assets/images/3.png" className="" alt="" />  
                    </div>
                    <div className="lg:w-2/3">
                    <div className="flex w-full flex-col gap-2 items-start">
                        <p><span className="font-bold">Name: </span>Black Coffee</p>
                        <p><span className="font-bold">Chef: </span>Mujahid</p>
                        <p><span className="font-bold">Supplier: </span>Black Coffee</p>
                        <p><span className="font-bold">Taste: </span>Black Coffee</p>
                        <p><span className="font-bold">Category: </span>Black Coffee</p>
                        <p><span className="font-bold">Price: </span>120</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetailsPage;