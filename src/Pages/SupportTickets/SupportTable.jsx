import { BsEye} from "react-icons/bs";
import { Link } from "react-router-dom";

const SupportTable = ({complain, handleDelete}) => {
    return (
        <tr className="even:bg-blue-50">
            <td className="p-4 text-[15px] text-slate-600 font-medium">
                {complain.phone}
            </td>
            <td className="p-4 text-[15px] text-slate-600 font-medium">
                {complain.email}
            </td>
            <td className="p-4 text-[15px] text-slate-900 font-medium">{complain.service}</td>
            <td className="p-4 text-[15px] text-slate-600 font-medium">{complain.message}</td>
            
            <td className="p-4">
                <div className="flex items-center">
                    <button className="mr-3" title="Edit">
                        <Link to={`/complains/${complain._id}`}><BsEye size={25}></BsEye></Link>
                    </button>
                    <button onClick={() => handleDelete(complain._id)} title="Delete">
                        <span><svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 fill-red-500 hover:fill-red-700"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                data-original="#000000"
                            />
                            <path
                                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                data-original="#000000"
                            />
                        </svg></span>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default SupportTable;