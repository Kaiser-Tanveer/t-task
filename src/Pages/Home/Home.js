import React from 'react';
import Banner from './Banner';
import ProductsMenu from '../ProductsMenu/ProductsMenu';
import Spinner from '../Spinner/Spinner';

const Home = () => {
    return (
        <div>
            <Banner />
            <ProductsMenu />
            <Spinner />
        </div>
    );
};

export default Home;