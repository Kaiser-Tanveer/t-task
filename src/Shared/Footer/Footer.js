import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-sky-200 mt-20 text-gray-700">
            <div>
                <h2 className='font-bold text-3xl'>T-Task</h2>
                <p className="font-bold">
                    T-Task Company <br />Providing Web Development since 2023
                </p>
                <p>Copyright © 2023 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <Link className='hover:scale-125 hover:text-gray-100 rounded-full hover:glass hover:p-2'><FaTwitter className='text-2xl' /></Link>
                    <Link className='hover:scale-125 hover:text-gray-100 rounded-full hover:glass hover:p-2'><FaFacebookF className='text-2xl' /></Link>
                    <Link className='hover:scale-125 hover:text-gray-100 rounded-full hover:glass hover:p-2'><FaLinkedinIn className='text-2xl' /></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;