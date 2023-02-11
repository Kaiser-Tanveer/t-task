import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className='h-[100vh] mt-[40vh]'>
            <h1 className='text-8xl text-center text-transparent animate-pulse bg-gradient-to-r bg-clip-text from-[#e15b64] to-[#c0efff] font-bold'>T-Task</h1>
            <div className='flex mx-auto justify-center'>
                <MagnifyingGlass
                    visible={true}
                    height="180"
                    width="180"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{}}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor='#c0efff'
                    color='#e15b64'
                />
            </div>
        </div>
    );
};

export default Spinner;