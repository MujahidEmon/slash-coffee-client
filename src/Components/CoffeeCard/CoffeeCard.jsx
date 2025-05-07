
import { useContext } from "react";
import { IoEye } from "react-icons/io5";
import { MdDelete, MdEdit } from "react-icons/md";
import {  Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const CoffeeCard = ({coffee}) => {
    const {name, chef, category, photo, price, taste, supplier, _id, details} = coffee;

    const{Coffees, setCoffees} = useContext(AuthContext)
    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://slash-expresso-emporium-server.onrender.com/coffees/${_id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remaining = Coffees.filter(c => c._id !== _id)
                        setCoffees(remaining)
                    }
                })
            }
          });
    }
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
                    <Link to={`/coffeeDetails/${_id}`} className="bg-amber-100 btn"><IoEye size={25}></IoEye></Link>
                    <Link to={`/updateCoffee/${_id}`} className="btn bg-emerald-500"><MdEdit size={25}></MdEdit></Link>
                    <button onClick={() => handleDelete(_id)} className="btn bg-accent"><MdDelete size={25}></MdDelete></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;