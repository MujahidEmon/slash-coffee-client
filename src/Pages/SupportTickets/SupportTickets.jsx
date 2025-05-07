import { useEffect, useState } from "react";
import SupportTable from "./SupportTable";
import { TiArrowBackOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SupportTickets = () => {
    const navigate = useNavigate()
    const [complains, setComplains] = useState([])
    useEffect(() => {
        fetch('https://slash-expresso-emporium-server.onrender.com/complains')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setComplains(data)
        })
    },[])




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
                    fetch(`https://slash-expresso-emporium-server.onrender.com/complains/${_id}`,{
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
                            const remaining = complains.filter(o => o._id !== _id)
                            setComplains(remaining)
                        }
                    })
                }
              });
        }
    return (
        <div className="overflow-x-auto p-4">
            <button onClick={() => navigate(-1)} to={'/'} className="flex items-center flex-row mb-8 hover:cursor-pointer"><TiArrowBackOutline size={35} /><button className="font-rancho text-center text-3xl cursor-pointer">Back</button></button>
            <table className="min-w-full bg-white">
                <thead className="bg-[url('https://i.ibb.co.com/Ws9RY1T/15.jpg')] whitespace-nowrap">
                    <tr>
                        <th className="p-4 text-left text-sm font-medium text-white">
                            Phone
                        </th>
                        <th className="p-4 text-left text-sm font-medium text-white">
                            Email
                        </th>
                        <th className="p-4 text-left text-sm font-medium text-white">
                            Service
                        </th>
                        <th className="p-4 text-left text-sm font-medium text-white">
                            Message
                        </th>
                        <th className="p-4 text-left text-sm font-medium text-white">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="whitespace-nowrap">
                    {complains.map((complain, idx) => (
                        <SupportTable key={idx} handleDelete={handleDelete} complain={complain}   />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SupportTickets;