import React, { useState } from 'react'
import Control from "../../assets/control.png"
import logo from "../../assets/logo.png"
import { HomeOutlined,ShoppingCartOutlined,ShoppingOutlined,AppstoreAddOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';


const Sidebar = () => {

// useLocation hook 
const location = useLocation().pathname;

// openState
const [open, setOpen] = useState(true);

// Menus list
const Menus = [
        { title: "Home", src: <HomeOutlined className="text-[18px]"/>,to:"/" },
        { title: "Items", src: <ShoppingOutlined className="text-[18px]"/>,to:"/items"},
        { title: "Cart", src: <ShoppingCartOutlined className="text-[18px]"/>,to:"/cart" },
        { title: "Add item", src: <AppstoreAddOutlined className="text-[18px]"/>,to:"/Additems" },
      ];   

// ==============================
      // return
// ==============================
  return (
    <div  className={` ${
        open ? "w-72" : "w-20 "
      } bg-black h-screen p-5 sticky top-0  pt-8  duration-300`}>
     <img src={Control}  className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)} alt="arrow-right" />
          <div className="flex gap-x-4 items-center">
            <img src={logo} alt="logo"  className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}/>
            <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
          </div>
          <ul className="pt-6">
          {Menus.map((Menu, index) => (
           <Link to={Menu.to} key={index}>
           <li
              
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${location === Menu.to? "bg-light-white":""}`}
            >
              {Menu.src}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
           </Link>
          ))}
        </ul>
    </div>
  )
}

export default Sidebar
