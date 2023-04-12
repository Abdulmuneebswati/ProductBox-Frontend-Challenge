import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { postItem } from "../../AxiosCalls/AxiosCalls";
import { Itemscontext } from "../../Context/Itemscontext";
import Message from "../../Components/Message/Message";

const Additems = () => {
  // useContext hook
  const { dispatch } = useContext(Itemscontext);

  // new Item to be posted state
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    img: "",
  });

  // input change function
  const handleChange = (event) => {
    setNewItem({ ...newItem, [event.target.name]: event.target.value });
  };

  // Post data function
  const handleSubmit = (event) => {
    event.preventDefault();
    postItem(dispatch, newItem);
    console.log(newItem);
  };

  // ==========================
  // return
  // ==========================
  return (
    <Layout>
      <Message />
      <div className="w-full mt-[20px]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col  items-center gap-4 ">
            <div className="w-1/2">
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Item Name
              </label>
              <input
                required
                id="name"
                name="name"
                onChange={(e) => handleChange(e)}
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                placeholder="Enter Item Name"
              ></input>
            </div>
            <div className="w-1/2">
              <label
                htmlFor="number"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Item Price
              </label>
              <input
                required
                name="price"
                type="number"
                id="number"
                onChange={(e) => handleChange(e)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Enter Item Price"
              ></input>
            </div>
            <div className="w-1/2">
              <label
                htmlFor="imageUrl"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Item Image URL
              </label>
              <input
                required
                id="imageUrl"
                name="img"
                rows="4"
                onChange={(e) => handleChange(e)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Enter Image URL"
              ></input>
            </div>
          </div>
          <div className="flex justify-center mt-[20px]">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Additems;
