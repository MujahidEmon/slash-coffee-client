import Swal from "sweetalert2";

const EditForm = ({ coffee }) => {
  const { name, chef, category, photo, taste, supplier, _id, details } = coffee;

  const handleUpdateCoffee = e => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get('name')
    const chef = form.get('chef')
    const supplier = form.get('supplier')
    const taste = form.get('taste')
    const category = form.get('category')
    const details = form.get('details')
    const photo = form.get('photo')

    const updatedCoffee = { name, chef, supplier, taste, category, details, photo }
    console.log(updatedCoffee);


    // Sending data to Server
    fetch(`https://slash-expresso-emporium-server.onrender.com/coffees/${_id}`, {
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
    <div>
      <form onSubmit={handleUpdateCoffee}>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-600 text-sm mb-2 block font-bold">
              Name
            </label>
            <input
              name="name"
              type="text"
              className=" w-full text-gray-800 text-sm px-4 py-3 rounded input bg-white "
              placeholder="Enter Coffee Name"
              defaultValue={name}
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block font-bold">
              Chef
            </label>
            <input
              name="chef"
              type="text"
              className="w-full text-gray-800 text-sm px-4 py-3 rounded input bg-white "
              placeholder="Enter Chef Name"
              defaultValue={chef}
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block font-bold">
              Supplier
            </label>
            <input
              name="supplier"
              type="text"
              className="w-full text-gray-800 text-sm px-4 py-3 rounded input bg-white "
              placeholder="Enter Supplier"
              defaultValue={supplier}
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block font-bold">
              Taste
            </label>
            <input
              name="taste"
              type="text"
              className="w-full text-gray-800 text-sm px-4 py-3 rounded input bg-white "
              placeholder="What about Taste?"
              defaultValue={taste}
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block font-bold">
              Category
            </label>
            <input
              name="category"
              type="text"
              className="w-full text-gray-800 text-sm px-4 py-3 rounded input bg-white "
              placeholder="Coffee Category?"
              defaultValue={category}
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block font-bold">
              Details
            </label>
            <input
              name="details"
              type="text"
              className="w-full text-gray-800 text-sm px-4 py-3 rounded input bg-white "
              placeholder="In Brief"
              defaultValue={details}
            />
          </div>
          <div className="">
            <label className="text-gray-600 text-sm mb-2 block font-bold">
              PhotoURL
            </label>
            <input
              name="photo"
              type="text"
              className="w-full text-gray-800 text-sm px-4 py-3 rounded input bg-white "
              placeholder="Give a photoURL"
              defaultValue={photo}
            />
          </div>
        </div>

        <div className="mt-8">
          <input className="btn font-rancho bg-[#D2B48C] w-full text-xl text-white hover:text-black" type="submit" value="Update Coffee" />
        </div>
      </form>
    </div>
  );
};

export default EditForm;
