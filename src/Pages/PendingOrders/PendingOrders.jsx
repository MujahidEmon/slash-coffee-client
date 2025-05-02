import React from "react";
import TableRow from "../../Components/TableRow/TableRow";

const PendingOrders = () => {
    // console.log(orders);
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
          {/* {
            orders.map((order, idx) => <TableRow key={idx} order={order}></TableRow>)
        } */}
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrders;
