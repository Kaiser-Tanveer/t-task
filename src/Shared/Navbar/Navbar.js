import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiOutlineHome, HiOutlineUserCircle } from 'react-icons/hi';

const Navbar = () => {
    const menuItems = <>
        <li><NavLink to='/' className='flex items-center text-xl m-2 lg:text-base'><HiOutlineHome className='lg:hidden' /><span className='ml-2'>Home</span></NavLink></li>
        <li><NavLink to='*' className='flex items-center text-xl m-2 lg:text-base'><HiOutlineHome className='lg:hidden' /><span className='ml-2'>Dashboard</span></NavLink></li>
        <li><NavLink to='*' className='flex items-center text-xl m-2 lg:text-base'><HiOutlineHome className='lg:hidden' /><span className='ml-2'>Blog</span></NavLink></li>
    </>
    return (
        <div className="navbar fixed top-0 glass p-0 pr-5 mx-auto shadow-lg z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <HiMenu className='text-2xl' />
                    </label>
                    <ul tabIndex={0} className="menu -ml-2 duration-1000 h-[100vh] w-[50vw] menu-compact dropdown-content mt-3 p-2 shadow-xl bg-gray-100">
                        {menuItems}
                    </ul>
                </div>
                <Link className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-info to-secondary ml-5">T-Task</Link>
            </div>
            <div className="hidden lg:flex items-center">
                <ul className="menu text-base-content menu-horizontal">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {/* {
                    user?.photoURL ?
                        <Link className='flex items-center'>
                            <img src={user.photoURL} alt="" className='w-10 rounded-full' />
                        </Link>
                        :
                    } */}
                <HiOutlineUserCircle className='text-2xl' />
            </div>
        </div>
    );
};

export default Navbar;