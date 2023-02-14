import React from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../Pages/Spinner/Spinner';
import { FaInfo } from 'react-icons/fa';
import { Zoom } from 'react-reveal';
import useTitle from '../Components/myHook/useTitle';

const Shop = () => {
    useTitle('Shop');
    const navigation = useNavigation()
    const products = useLoaderData();

    if (navigation.state === "loading") {
        return <Spinner />
    }
    return (
        <Zoom>
            <h2 className='text-6xl text-info py-5 text-center font-bold'>Welcome to T-Task Shop</h2>
            <div className='container mx-auto grid md:grid-cols-2 gap-6 relative'>
                {
                    products.map(product =>
                        <div
                            key={product._id}
                            className="card w-96 mx-auto bg-base-100 shadow-xl  border border-info group">
                            <figure><img src={product.img} alt="productImg" className='p-2 hover:scale-125' /></figure>
                            <div className="card-body bg-gradient-to-r from-info to-secondary rounded-b-lg">
                                <h2 className="card-title">{product.name}</h2>
                                <p className='text-xl text-secondary-focus'>Price: Rs.{product.price}</p>
                                <div className="card-actions justify-center">
                                    <Link
                                        to={`/product/${product._id}`}
                                        className="flex items-center bg-gradient-to-r from-secondary to-info shadow-lg border border-gray-600 hover:border-gray-500 p-2 rounded-md font-semibold hover:scale-110 hover:text-gray-100"><FaInfo /> DETAILS</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </Zoom>
    );
};

export default Shop;