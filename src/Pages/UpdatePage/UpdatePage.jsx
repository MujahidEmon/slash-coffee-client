import { TiArrowBackOutline } from "react-icons/ti";
import EditForm from "../../Components/EditForm/EditForm";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const UpdatePage = () => {
    const navigate = useNavigate();
    const coffee = useLoaderData();
    console.log(coffee);
    return (
        <div className="bg-[url('https://i.ibb.co.com/6bMvLDn/11.png')]">
            <div className="lg:max-w-7xl max-w-sm mx-auto ">
                <button onClick={()=>navigate(-1)} to={'/'} className="flex items-center flex-row my-8 hover:cursor-pointer"><TiArrowBackOutline size={35} /><button className="font-rancho text-center text-3xl cursor-pointer">Back</button></button>
                <div className=" bg-[#F4F3F0] lg:px-16 px-7 rounded-lg lg:py-18">
                    <div className="text-center ">
                        <h2 className="font-rancho text-4xl">Update Existing Coffee Details</h2>
                        <p className="md:w-4xl mx-auto my-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <EditForm coffee={coffee}></EditForm>
                </div>
            </div>
        </div>
    );
};

export default UpdatePage;