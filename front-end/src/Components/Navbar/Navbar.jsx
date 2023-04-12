import React, { useContext } from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const items = JSON.parse(localStorage.getItem("cart"));
  return (
    <div className='  navbar py-[20px] pr-[30px] flex justify-end'>
      <div className="relative">
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{ items?.length || 0}</div>
      <Link to="/cart" ><ShoppingCartOutlined className='text-[40px] cursor-pointer font-bold'/></Link>   
      </div>
    
    </div>
  )
}

export default Navbar
