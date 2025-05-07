import { TiArrowBackOutline } from "react-icons/ti";
import {  useLoaderData, useNavigate } from "react-router-dom";

const SupportDetail = () => {
    const navigate = useNavigate();
    const complain = useLoaderData();
    console.log(complain);
    const {phone, email, message, service} = complain
    return (
        <div className="bg-[url('https://i.ibb.co.com/fNtQhMV/1.png')] my-8 bg-cover bg-center">

            <div className="md:max-w-xl  bg-[#F4F3F0] p-6 text-black  mx-auto max-w-sm">
                <button onClick={() => navigate(-1)} className="flex items-center flex-row  hover:cursor-pointer"><TiArrowBackOutline size={35} /><button className="font-rancho text-center text-3xl cursor-pointer">Back </button></button>
                <div className="bg-[#F4F3F0] mx-auto  flex lg:flex-row flex-col justify-center max-w-xl rounded-xl  items-center lg:px-16 px-7 md:py-7 ">
                    <div className="flex w-full flex-col gap-2 items-start">
                        <p><span className="font-bold">Phone: </span>{phone}</p>
                        <p><span className="font-bold">Email: </span>{email}</p>
                        <p><span className="font-bold">Service: </span>{service}</p>
                        <p><span className="font-bold">Message: </span>{message}</p>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SupportDetail;