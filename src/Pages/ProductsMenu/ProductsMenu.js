import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductsMenu = () => {
    const products = useLoaderData();
    return (
        <div className='container mx-auto'>
            <h2 className='text-center font-bold text-4xl pb-4 text-transparent bg-clip-text bg-gradient-to-r from-info to-secondary'>Browse Categories</h2>
            <div className='grid grid-cols-4 gap-6 mb-40'>
                {
                    products.map(product =>
                        <div
                            key={product.id}
                            className='lg:flex shadow-lg hover:scale-110 bg-gradient-to-r from-info to-secondary justify-center md:justify-between items-center w-full px-6 rounded-md lg:h-24'
                        >
                            <div>
                                <img src={product.img} alt="" className='h-24' />
                            </div>
                            <div>
                                <h2 className='text-xl text-center hidden md:block font-semibold'>{product.category_name}</h2>
                            </div>
                        </div>
                    )
                }
            </div >
        </div>
    );
};

export default ProductsMenu;