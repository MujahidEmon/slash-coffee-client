import { BiCartAdd } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";


const ClientCoffeeCard = ({coffee}) => {
    const {name, chef, category, photo, price, taste, supplier, _id, details} = coffee;

    const {handleAddToCart} = useContext(AuthContext)
    return (
        <div className="flex lg:w-xl w-sm p-4 px-6 gap-2 bg-[#F5F4F1] rounded-xl">
            <img className="lg:h-56  h-36" src={photo} alt="" />
            <div className="flex flex-row w-full items-center justify-between">
                <div className="flex flex-col gap-2 items-start">
                    <p><span className="font-bold">Name: </span>{name}</p>
                    <p><span className="font-bold">Chef: </span>{chef}</p>
                    <p><span className="font-bold">Supplier: </span>{supplier}</p>
                    <p><span className="font-bold">Price: </span>{price}</p>
                </div>
                <div className="flex flex-col justify-center gap-4 items-center">
                    <Link to={'/coffeeDetails'} className="bg-amber-100 btn"><IoEye size={25}></IoEye></Link>
                    <button onClick={() => handleAddToCart(coffee)} className="btn" ><BiCartAdd size={25}></BiCartAdd></button>
                </div>
            </div>
        </div>
    );
};

export default ClientCoffeeCard;