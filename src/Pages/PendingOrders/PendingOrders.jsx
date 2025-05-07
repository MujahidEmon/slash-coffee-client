import { useContext, useEffect, useState } from "react";
import TableRow from "../../Components/TableRow/TableRow";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const PendingOrders = () => {
  // loading orders using context
  const { loading, setLoading } = useContext(AuthContext);
  const url = `https://slash-expresso-emporium-server.onrender.com/orders?status=Pending`;
  const [orders, setOrders] = useState([])
  console.log(orders);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setLoading(true);
        setOrders(data);
        setLoading(false);
      })
      setLoading(false)
  }, [])

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
        fetch(`https://slash-expresso-emporium-server.onrender.com/orders/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = orders.filter(o => o._id !== _id)
              setOrders(remaining)
            }
          })
      }
    });
  }

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
          {
            orders.map((order, idx) => <TableRow handleDelete={handleDelete} key={idx} order={order}></TableRow>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrders;
