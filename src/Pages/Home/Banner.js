import React from 'react';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';
import shopBg from '../../Assets/Banners/mainBanner.png';
import { FaShopify } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='my-10 shadow-lg container rounded-lg relative w-5/6 mx-auto'>
            <div>
                <Zoom>
                    <h2 className='text-5xl font-bold text-info md:text-info text-center lg:text-left z-10 absolute md:left-1/3 lg:left-1/2 lg:top-1/4' style={{ WebkitTextStroke: '1px rgba(239, 159, 188)' }}>Buy Your Daily<br /> Accessories <br /> Here</h2>
                </Zoom>
            </div>
            <div className='absolute left-1/4 md:left-1/2 top-2/3 z-30'>
                <Link className='btn btn-secondary font-semibold border md:border-none border-white hover:scale-110 shadow-lg' to='/products'>VISIT SHOP <FaShopify className='ml-2' /> </Link>
            </div>
            <div className='rounded-lg bg-secondary grid grid-cols-1 md:grid-cols-2 h-80 md:h-full' style={{
                clipPath: 'polygon(0 0, 100% calc(100% - 100vw), calc(100% - 50vw) 100%, 0 100%)'
            }}>
                <div className='w-full'>
                    <Zoom>
                        <img src={shopBg} className="mt-14 w-full hidden md:block" alt="Banner" />
                    </Zoom>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Banner;