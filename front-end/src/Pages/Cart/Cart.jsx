import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import Summary from "../../Components/Summary/Summary";
import { Link } from "react-router-dom";
import { Itemscontext } from "../../Context/Itemscontext";
import Message from "../../Components/Message/Message";

const Cart = () => {
  // Getting Items From local Storage
  const items = JSON.parse(localStorage.getItem("cart"));

  // useContext hook
  const { dispatch } = useContext(Itemscontext);

  // ==============================
  // return
  // ==============================

  return (
    <Layout>
      <Message />
      <div className="m-[20px]">
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">
                  {items?.length == 1 ? "1 Item" : `${items?.length} Items`}
                </h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>

              {/* item */}
              {items?.reverse().map((item) => {
                return (
                  <div
                    key={item?.id}
                    className="flex items-center border-b hover:bg-gray-100 -mx-8 px-6 py-5"
                  >
                    <div className="flex w-2/5">
                      <div className="w-20">
                        <img
                          className="h-24"
                          src={item?.img}
                          alt="item-image"
                        />
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{item?.name}</span>
                        <button
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item.id,
                            })
                          }
                          className="font-semibold hover:text-red-500  text-gray-500 text-xs"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <span className="text-center w-1/5 font-semibold text-sm">
                      {item?.price}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      {item?.price}
                    </span>
                  </div>
                );
              })}
              {/*  */}

              <Link
                to="/items"
                className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>

            <Summary items={items} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
