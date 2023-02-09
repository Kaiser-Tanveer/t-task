import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
        <>
            <Navbar />
            <div className='mt-20'>
                <Outlet />
            </div>
        </>
    );
};

export default Main;