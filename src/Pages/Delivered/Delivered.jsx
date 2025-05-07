import { useContext, useEffect, useState } from "react";
import TableRow from "../../Components/TableRow/TableRow";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Delivered = () => {
  const {setLoading} = useContext(AuthContext)
  const status = encodeURIComponent("Delivered");
  const url = `https://slash-expresso-emporium-server.onrender.com/orders?status=${status}`;
  const [orders, setOrders] = useState([]);

  // Function to fetch orders
  const fetchOrders = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setLoading(true);
        setOrders(data);
        setLoading(false);
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
        fetch(`https://slash-expresso-emporium-server.onrender.com/orders/${_id}`, {
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
    <div className="overflow-x-auto ">
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
