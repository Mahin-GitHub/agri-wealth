import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    return (
        <div className=" sticky top-0 left-0 w-full h-fit z-50 bg-[#1C4119]">
            <nav className='container w-full text-white flex sm:flex-row items-center justify-between mx-auto my-8 '>

                <div className='flex items-center cursor-pointer'>

                    <Image className='rounded-full' src="/images/logo.jpg" width={40} height={40} alt='logo'></Image>
                    <h1 className='font-extrabold text-2xl sm:text-3xl ml-3'>Agri<span className='text-green-500'>wealth</span></h1>
                </div>
                <div>
                    <div className='hidden  sm:flex sm:flex-row ml-12 '>

                        <Link className='mx-4 text-xl hover:text-green-500 transition' href={"#"}>Features</Link>
                        <Link className='mx-4 text-xl hover:text-green-500 transition' href={"#"}>Demo</Link>
                        <Link className='mx-4 text-xl hover:text-green-500 transition' href={"#"}>Documentation</Link>

                    </div>
                </div>

            </nav>
        </div>
    );
};

export default NavBar;