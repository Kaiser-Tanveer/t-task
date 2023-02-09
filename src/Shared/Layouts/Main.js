import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <>
            <Navbar />
            <div className='mt-20'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Main;