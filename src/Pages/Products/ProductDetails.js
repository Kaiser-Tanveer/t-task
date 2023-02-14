import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { Zoom } from 'react-reveal';
import BookingModal from '../BookingModal/BookingModal';
import Spinner from '../Spinner/Spinner';
import useTitle from '../../Components/myHook/useTitle';

const ProductDetails = () => {
    useTitle('Details');
    const navigation = useNavigation();
    const details = useLoaderData();
    const [goods, setGoods] = useState(details)
    const [modalCondition, setModalCondition] = useState(1);
    const { _id, img, name, price, detail } = details;

    if (navigation.state === "loading") {
        return <Spinner />
    }
    return (
        <section className="bg-gray-100 text-gray-800">
            <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <Zoom>
                        <img src={img} alt="" className="object-contain drop-shadow-lg rounded-md h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </Zoom>
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <Zoom>
                        <h1 className="text-5xl font-bold leading-none text-info sm:text-6xl">
                            {name}
                        </h1>
                        <p className='text-center md:text-right text-xl font-semibold'>
                            Price: <span className='text-error'>Rs.{price}</span>
                        </p>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">
                            {detail}
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <label
                                htmlFor="booking-modal"
                                className='text-xl font-semibold bg-gradient-to-r from-info to-error py-4 px-6 rounded-md uppercase drop-shadow-lg hover:scale-110 hover:text-gray-100 hover:border hover:border-secondary hover:shadow-secondary-focus duration-500'>
                                Book
                            </label>
                        </div>
                    </Zoom>
                </div>

            </div>
            {
                modalCondition > 0 &&
                <BookingModal
                    key={_id}
                    goods={goods}
                    setGoods={setGoods}
                    setModalCondition={setModalCondition}
                />
            }
        </section>
    );
};

export default ProductDetails;