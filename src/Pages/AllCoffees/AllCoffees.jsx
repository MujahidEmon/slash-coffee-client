import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ClientCoffeeCard from "../../Components/ClientCoffeeCard/ClientCoffeeCard";

const AllCoffees = () => {
    const { Coffees } = useContext(AuthContext);
    return (
        <div>
            <h1 className="text-2xl md:text-4xl my-9 lg:text-5xl font-bold text-center">Get Your Best Coffees Here</h1>
            <div className=" mx-auto w-fit grid grid-flow-row md:grid-cols-2 justify-center items-center gap-9 ">

                {
                    Coffees.map((coffee, _id) => <ClientCoffeeCard key={_id} coffee={coffee} coffees={Coffees} ></ClientCoffeeCard>)
                }

            </div>
        </div>
    );
};

export default AllCoffees;