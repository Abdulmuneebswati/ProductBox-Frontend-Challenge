import React, { useContext, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import { Itemscontext } from "../../Context/Itemscontext";
import { DeleteOutlined } from "@ant-design/icons";
import Message from "../../Components/Message/Message";
import { getAllItems, removeItem } from "../../AxiosCalls/AxiosCalls";
import { Link } from "react-router-dom";

const Items = () => {
  // useContext hook
  const { items, dispatch } = useContext(Itemscontext);

  // Getting Items From local Storage
  const cartItems = JSON.parse(localStorage.getItem("cart"));

  // useEffect
  useEffect(() => {
    getAllItems(dispatch);
  }, []);

  // ==============================
  // return
  // ==============================
  return (
    <Layout>
      <Message />
      <div className="flex  justify-center"></div>
      <div className="flex mt-[20px] mb-[20px] flex-wrap gap-[30px] items-center justify-center">
        {items?.map((item) => {
          return (
            <div
              key={item.id}
              className="card relative  w-[30%] h-[30%] flex flex-col justify-center py-10 px-5 bg-white rounded-lg shadow-2xl"
            >
              <div
                onClick={() => removeItem(dispatch, item.id)}
                className="absolute h-[34px] bg-black rounded-full w-[34px] top-2  right-4 cursor-pointer flex justify-center items-center hover:transform hover:scale-[1.2]"
              >
                {" "}
                <DeleteOutlined className="text-white" />{" "}
              </div>
              <div className="prod-title">
                <p className="text-2xl uppercase text-gray-900 font-bold">
                  {item.name}
                </p>
              </div>
              <div className="prod-img">
                <img
                  src={item.img}
                  className="w-full object-cover h-[300px] object-center"
                />
              </div>
              <div className="prod-info grid gap-10">
                <div>    
                  <Link to={`/items/${item.id}`} className="mt-[20px] underline">
                    Click here to go the item Page
                  </Link>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                  <p className="font-bold text-xl">{item.price} $</p>
                  {cartItems?.find((carted) => carted.id === item.id) ? (
                    <button
                      disabled={true}
                      className="px-2 text-[14px] py-2 transition ease-in duration-200 uppercase rounded-full bg-gray-800 text-white border-2 border-gray-900 focus:outline-none"
                    >
                      Already Added To The Cart
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        dispatch({ type: "ADD_TO_CART", payload: item })
                      }
                      className="px-2 text-[14px]  py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Items;
