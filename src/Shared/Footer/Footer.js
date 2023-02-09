import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-info text-primary-content">
            <div>
                <h2 className='font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-secondary'>T-Task</h2>
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