import { FaEdit, FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { FiDelete } from "react-icons/fi";
import { IoEye } from "react-icons/io5";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";


const CoffeeCard = ({coffee}) => {
    const {name, chef, category, photo, taste, supplier, details} = coffee;
    return (
        <div className="flex lg:w-xl w-sm p-4 px-6 gap-2 bg-[#F5F4F1] rounded-xl">
            <img className="lg:h-56  h-36" src={photo} alt="" />
            <div className="flex flex-row w-full items-center justify-between">
                <div className="flex flex-col gap-2 items-start">
                    <p><span className="font-bold">Name: </span>{name}</p>
                    <p><span className="font-bold">Chef: </span>{chef}</p>
                    <p><span className="font-bold">Supplier: </span>{supplier}</p>
                </div>
                <div className="flex flex-col justify-center gap-4 items-center">
                    <Link to={'/coffeeDetails'} className="bg-amber-100 btn"><IoEye size={25}></IoEye></Link>
                    <Link to={'/updateCoffee'} className="btn bg-emerald-500"><MdEdit size={25}></MdEdit></Link>
                    <Link className="btn bg-accent"><MdDelete size={25}></MdDelete></Link>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;