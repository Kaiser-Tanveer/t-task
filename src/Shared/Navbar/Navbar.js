import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiOutlineHome, HiOutlineShoppingCart } from 'react-icons/hi';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    // Logout Handler 
    const signOutHandler = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err));
    }

    // Creaing variable for the menu 
    const menuItems = <>
        <li><NavLink to='/' className='flex rounded-md items-center text-xl m-2 lg:text-base'><HiOutlineHome className='lg:hidden' /><span className='ml-2'>Home</span></NavLink></li>
        <li><NavLink to='/products' className='flex rounded-md items-center text-xl m-2 lg:text-base'><HiOutlineHome className='lg:hidden' /><span className='ml-2'>Shop</span></NavLink></li>
        <li><NavLink to='/cart' className='flex rounded-md items-center text-xl m-2 lg:text-base'><HiOutlineShoppingCart className='lg:hidden' /><span className='ml-2'>Cart</span></NavLink></li>
        <li><NavLink to='' className='flex rounded-md items-center text-xl m-2 lg:text-base'><HiOutlineHome className='lg:hidden' /><span className='ml-2'>Blog</span></NavLink></li>
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
                <Link className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-info to-secondary lg:ml-5">T-Task</Link>
            </div>
            <div className="hidden lg:flex items-center">
                <ul className="menu text-base-content menu-horizontal">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='bg-gradient-to-r from-info to-error p-[3px] rounded-lg hover:scale-110'>
                    <div className='bg-gray-100 p-1 rounded-md'>
                        {
                            user ?
                                <Link onClick={signOutHandler} className='flex text-xl font-semibold text-transparent bg-gradient-to-r bg-clip-text from-error to-gray-500 items-center'>
                                    Logout
                                </Link>
                                :
                                <Link to='/register' className='flex text-xl font-semibold text-transparent bg-gradient-to-r bg-clip-text from-info to-primary items-center'>
                                    Register
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;