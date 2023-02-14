import React from 'react';
import Banner from './Banner';
import ProductsMenu from '../ProductsMenu/ProductsMenu';
import useTitle from '../../Components/myHook/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner />
            <ProductsMenu />
        </div>
    );
};

export default Home;