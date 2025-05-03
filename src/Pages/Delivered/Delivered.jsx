import { useEffect, useState } from "react";
import TableRow from "../../Components/TableRow/TableRow";
import Swal from "sweetalert2";

const Delivered = () => {
  const status = encodeURIComponent("Delivered");
  const url = `http://localhost:5000/orders?status=${status}`;
  const [orders, setOrders] = useState([]);

  // Function to fetch orders
  const fetchOrders = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setOrders(data);
      })
      .catch(error => {
        console.error("Error fetching orders:", error);
      });
  };

  // Polling setup
  useEffect(() => {
    fetchOrders(); // initial fetch

    const intervalId = setInterval(() => {
      fetchOrders(); // fetch every 5 seconds
    }, 5000);

    return () => clearInterval(intervalId); // cleanup on unmount
  }, [url]);

  // Delete order
  const handleDelete = (_id) => {
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
        fetch(`http://localhost:5000/orders/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Order has been deleted.", "success");
              const remaining = orders.filter((o) => o._id !== _id);
              setOrders(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Delivered Orders</h2>
        <button
          onClick={fetchOrders}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Refresh
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead className="bg-[url('https://i.ibb.co.com/Ws9RY1T/15.jpg')] whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-sm font-medium text-white">
              Name
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Table Number
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Contact No.
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Order Status
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Price
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
          {orders.map((order, idx) => (
            <TableRow key={idx} order={order} handleDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Delivered;
