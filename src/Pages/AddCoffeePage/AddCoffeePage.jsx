import { TiArrowBackOutline } from "react-icons/ti";
import AddForm from "../../Components/AddForm/AddForm";
import { Link } from "react-router-dom";


const AddCoffeePage = () => {
    return (
        <div className="lg:max-w-7xl  mx-auto max-w-sm">
            <Link to={'/'} className="flex items-center flex-row my-8 hover:cursor-pointer"><TiArrowBackOutline size={35} /><button className="font-rancho text-center text-3xl cursor-pointer">Back to Home</button></Link>
            <div className=" bg-[#F4F3F0] lg:px-16 px-7 lg:py-18">
                <div className="text-center ">
                    <h2 className="font-rancho text-4xl">Add New Coffee</h2>
                    <p className="md:w-4xl mx-auto my-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <AddForm></AddForm>
            </div>
        </div>
    );
};

export default AddCoffeePage;