import { TiArrowBackOutline } from "react-icons/ti";
import { Link, useLoaderData } from "react-router-dom";


const CoffeeDetailsPage = () => {
    const coffee = useLoaderData();
    console.log(coffee);
    const {name, chef, taste, details, photo, price, supplier, category} = coffee
    return (
        <div className="bg-[url('https://i.ibb.co.com/fNtQhMV/1.png')] mt-8 bg-cover bg-center">

            <div className="md:max-w-4xl  bg-[#F4F3F0] p-6  mx-auto max-w-sm">
                {/* <Link to={'/'} className="flex items-center flex-row my-8 hover:cursor-pointer"><TiArrowBackOutline size={35} /><button className="font-rancho text-center text-3xl cursor-pointer">Back to Home</button></Link> */}
                <div className="bg-[#F4F3F0] mx-auto  flex lg:flex-row flex-col justify-center  max-w-5xl rounded-xl  items-center lg:px-16 px-7 lg:py-18 ">
                    <div className="lg:w-1/2">
                        <img src={photo} className="" alt="" />  
                    </div>
                    <div className="lg:w-2/3">
                    <div className="flex w-full flex-col gap-2 items-start">
                        <p><span className="font-bold">Name: </span>{name}</p>
                        <p><span className="font-bold">Chef: </span>{chef}</p>
                        <p><span className="font-bold">Supplier: </span>{supplier}</p>
                        <p><span className="font-bold">Taste: </span>{taste}</p>
                        <p><span className="font-bold">Category: </span>{category}</p>
                        <p><span className="font-bold">Price: </span>{price}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetailsPage;