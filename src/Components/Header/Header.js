
import React from 'react';
import NavBar from './NavBar';


const Header = () => {
    return (
        <div className='bg-[#1C4119] '>
            <header>
               
                <section className='container w-full  mt-80 p-8'>

                    <div>
                        <p className='text-green-600 text-center font-bold mt-20'>GROW YOUR FUTURE, INVEST IN AGRICULTURE</p>
                    </div>
                    <div className='py-8'>
                        <h2 className='font-bold text-2xl sm:text-5xl lg:text-6xl text-center text-white'>Agricultural Investment Platform.</h2>
                    </div>
                    <div className='flex flex-col sm:flex-row  justify-center sm:justify-between lg:justify-evenly items-center mx-auto pt-16 mb-20'>
                        <div className='animate-pulse transition pb-4'>
                            <h2 className='font-bold text-3xl text-white' >Responsive</h2>
                            <p className='text-[#A4A4A3] text-center mt-2'>Website</p>
                        </div>
                        <div className='animate-pulse transition pb-4'>
                            <h2 className='font-bold text-3xl text-white text-center '>Strong</h2>
                            <p className='text-[#A4A4A3] text-center mt-2 '>Admin Panel</p>
                        </div>
                        <div className=' animate-pulse transition pb-4'>
                            <h2 className='font-bold text-3xl text-white text-center '>36+</h2>
                            <p className='text-[#A4A4A3] text-center mt-2'>Payment Gateways</p>
                        </div>
                    </div>

                </section>
            </header>
        </div>
    );
};

export default Header;