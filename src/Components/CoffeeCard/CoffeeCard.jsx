import { FaEdit, FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { FiDelete } from "react-icons/fi";
import { IoEye } from "react-icons/io5";
import { MdDelete, MdEdit } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";


const CoffeeCard = () => {
    return (
        <div className="flex lg:w-xl w-sm p-4 px-6 gap-2 bg-[#F5F4F1] rounded-xl">
            <img className="lg:h-56  h-36" src="/src/assets/images/1.png" alt="" />
            <div className="flex flex-row w-full items-center justify-between">
                <div className="flex flex-col gap-2 items-start">
                    <p><span className="font-bold">Name: </span>Black Coffee</p>
                    <p><span className="font-bold">Chef: </span>Mujahid</p>
                    <p><span className="font-bold">Price: </span>9$</p>
                </div>
                <div className="flex flex-col justify-center gap-4 items-center">
                    <button><IoEye size={25}></IoEye></button>
                    <button><MdEdit size={25}></MdEdit></button>
                    <button><MdDelete size={25}></MdDelete></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;