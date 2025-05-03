import { GiConfirmed } from "react-icons/gi";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const OrderDetail = () => {
    const navigate = useNavigate();
    const order = useLoaderData();

    const handleUpdateOrder = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get('name')
        // const chef = form.get('chef')
        // const supplier = form.get('supplier')
        // const taste = form.get('taste')
        const tableNumber = form.get('tableNumber')
        const phone = form.get('phone')
        const status = form.get('status')

        const updatedCoffee = { name, tableNumber, status, phone }
        console.log(updatedCoffee);


        // Sending data to Server
        fetch(`https://slash-expresso-emporium-server.vercel.app/orders/${order._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Coffee Details Updated Successfully',
                        // text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Back'
                    })
                }
            })
    }
    return (
        <div className="bg-[url('https://i.ibb.co.com/fNtQhMV/1.png')] bg-cover bg-center">

            <div className="lg:max-w-7xl   mx-auto max-w-sm">
                <button onClick={() => navigate(-1)} to={'/'} className="flex items-center flex-row my-8 hover:cursor-pointer"><TiArrowBackOutline size={35} /><button className="font-rancho text-center text-3xl cursor-pointer">Back</button></button>
                <form onSubmit={handleUpdateOrder} className="max-w-4xl mx-auto">
                    <h1 className="font-semibold text-3xl text-center mb-6">Order for: {order.name}</h1>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="your_name"
                                className="mb-2 block text-sm font-medium text-gray-900"
                            >
                                Your name
                            </label>
                            <input
                                type="text"
                                id="your_name"
                                name="name"
                                defaultValue={order.name}
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                                placeholder="Bonnie Green"
                                required
                            />
                        </div>

                        {/* <div>
                                          <label
                                            htmlFor="your_email"
                                            className="mb-2 block text-sm font-medium text-gray-900"
                                          >
                                            Your email*
                                          </label>
                                          <input
                                            type="email"
                                            id="your_email"
                                            name="email"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                                            placeholder="name@flowbite.com"
                                            required
                                          />
                                        </div> */}

                        <div>
                            <label
                                htmlFor="phone-input-3"
                                className="mb-2 block text-sm font-medium text-gray-900"
                            >
                                Phone Number*
                            </label>
                            <div className="flex items-center">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        id="phone-input"
                                        name="phone"
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                                        pattern="[0-9]{11}"
                                        placeholder="01700000000"
                                        required
                                        defaultValue={order.phone}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="full_address"
                                className="mb-2 block text-sm font-medium text-gray-900"
                            >
                                Table Number
                            </label>
                            <input
                                type="text"
                                id="full-address"
                                defaultValue={order.tableNumber}
                                name="tableNumber"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                                placeholder="Enter Table Number"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="note"
                                className="mb-2 block text-sm font-medium text-gray-900"
                            >
                                Change Status
                            </label>
                            <select name="status" defaultValue={order.status} className="select block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500">
                                <option disabled={true}>Select Status</option>
                                <option >Pending</option>
                                <option >Cooking</option>
                                <option>Ready To Serve</option>
                                <option>Delivered</option>
                            </select>
                        </div>

                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
                            >
                                <GiConfirmed></GiConfirmed>
                                Update Order Status
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderDetail;