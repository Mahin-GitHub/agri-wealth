import React from 'react';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='bg-[#222831] p-8'>
            <div className='container flex flex-col justify-center items-center mx-auto my-auto gap-8'>
                <div className='flex items-center cursor-pointer mt-20'>

                    <Image className='rounded-full' src="/images/logo.jpg" width={40} height={40} alt='logo'></Image>
                    <h1 className='font-extrabold text-2xl sm:text-3xl ml-3 text-white'>Agri<span className='text-green-500'>wealth</span></h1>
                </div>
                <div>
                    <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-16 text-center text-white'>Cultivating Prosperity,
                        One Investment at a Time</h2>
                    <p className='text-gray-400 text-center'>We create the application with love and care to assure our customer
                        to get everything for start</p>
                </div>
                <div className='mb-20'>
                <button className='font-bold bg-[#F4F7E8] p-4 rounded-full flex justify-center items-center gap-2'>Purchase Now<FaArrowRightLong />
                </button>
                </div>

            </div>


        </div>
    );
};

export default Footer;