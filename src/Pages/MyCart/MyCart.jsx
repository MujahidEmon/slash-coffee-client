import { Link } from "react-router-dom";
import CartCard from "../../Components/CartCard/CartCard";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { TiArrowBackOutline } from "react-icons/ti";

const MyCart = () => {
    const { cartCoffees, totalPrice, grandTotal } = useContext(AuthContext)
    return (
        <div className="bg-[url('https://i.ibb.co.com/fNtQhMV/1.png')] bg-cover bg-center">

            <div className="max-w-5xl min-h-[calc(100vh-260px)]  max-md:max-w-xl mx-auto p-4">
                <Link to={'/'} className="flex items-center flex-row my-8 hover:cursor-pointer"><TiArrowBackOutline size={35} /><button className="font-rancho text-center text-3xl cursor-pointer">Back to Home</button></Link>
                <h1 className="text-2xl font-bold text-slate-900">Your Cart</h1>
                <div className="grid md:grid-cols-3 gap-10 mt-8">
                    {/* left side */}
                    <div className="md:col-span-2 space-y-4">
                        {cartCoffees.map((coffee, idx) => (
                            <CartCard key={idx} coffee={coffee}></CartCard>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)]">
                        <ul className="text-slate-900 font-medium space-y-4">
                            <li className="flex flex-wrap gap-4 text-sm">
                                Subtotal{" "}
                                <span className="ml-auto font-semibold">{totalPrice}</span>
                            </li>
                            <li className="flex flex-wrap gap-4 text-sm">
                                Service Charge <span className="ml-auto font-semibold">BDT 50</span>
                            </li>

                            <hr className="border-slate-300" />
                            <li className="flex flex-wrap gap-4 text-sm font-semibold">
                                Total <span className="ml-auto">{grandTotal}</span>
                            </li>
                        </ul>

                        <div className="mt-8 space-y-2">
                            <button
                                type="button"
                                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-[#E3B577] hover:bg-slate-900 text-white rounded-md"
                            >
                                <Link to={'/checkout'}>Order Now</Link>
                            </button>
                            <button
                                type="button"
                                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-slate-100 text-slate-900 border border-slate-300 rounded-md"
                            >
                                <Link to={"/"}>Continue Shopping</Link>
                            </button>
                        </div>

                        <div className="mt-4 flex flex-wrap justify-center gap-4">
                            <img
                                src="https://readymadeui.com/images/master.webp"
                                alt="card1"
                                className="w-10 object-contain"
                            />
                            <img
                                src="https://readymadeui.com/images/visa.webp"
                                alt="card2"
                                className="w-10 object-contain"
                            />
                            <img
                                src="https://readymadeui.com/images/american-express.webp"
                                alt="card3"
                                className="w-10 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
