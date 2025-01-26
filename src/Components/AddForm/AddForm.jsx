const AddForm = () => {
  return (
    <div className="">
      <form>
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
          <button
            type="button"
            className="btn font-rancho bg-[#D2B48C] w-full text-xl text-white hover:text-black"
          >
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
