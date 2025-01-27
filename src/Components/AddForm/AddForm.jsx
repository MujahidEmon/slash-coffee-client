import Swal from 'sweetalert2'
const AddForm = () => {

  const handleAddCoffee = e => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get('name')
    const chef = form.get('chef')
    const supplier = form.get('supplier')
    const taste = form.get('taste')
    const category = form.get('category')
    const details = form.get('details')
    const photo = form.get('photo')

    const newCoffee = {name, chef, supplier, taste, category, details, photo}
    console.log(newCoffee);


    // Sending data to Server
    fetch('http://localhost:5000/coffees', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data);
      Swal.fire({
        title: 'User Added Successfully',
        // text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Back'
      })
    })
  }

  return (
    <div className="">
      <form onSubmit={handleAddCoffee}>
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
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block font-bold">Supplier</label>
            <input
              name="supplier"
              type="text"
              className="w-full text-gray-800 text-sm px-4 py-3 rounded input bg-white "
              placeholder="Enter Supplier"
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
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block font-bold">Category</label>
            <input
              name="category"
              type="text"
              className="w-full text-gray-800 text-sm px-4 py-3 rounded input bg-white "
              placeholder="Coffee Category?"
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
            />
          </div>
          <div className="">
            <label className="text-gray-600 text-sm mb-2 block font-bold">
              PhotoURL
            </label>
            <input
              name="photo"
              type="text"
              className= "w-full text-gray-800 text-sm px-4 py-3 rounded input bg-white "
              placeholder="Give a photoURL"
            />
          </div>
        </div>

        <div className="mt-8">
          
          <input className="btn font-rancho bg-[#D2B48C] w-full text-xl text-white hover:text-black" type="submit" value="Add Coffee" />
        </div>
      </form>
    </div>
  );
};

export default AddForm;
