"use client";

import React from 'react';
import DemoCheckOutCart from './CheckOutDemoCart';
import Image from 'next/image';

const CheckOutDemo = () => {

    let checkOutDemoCart = [
        {img:"/images/admin.jpg",title:"Admin Panel",description:"AgriWealth offers a secure admin panel with a customizable dashboard for easy management of user data, financial statistics, and website operations."},
        {img:"/images/website.jpg",title:"Website",description:"The AgriWealth website is designed for a seamless shopping experience, featuring an attractive layout, user-friendly navigation, and responsive design, ensuring accessibility across all devices."},
        {img:"/images/user.png",title:"User Panel",description:"User panel in offers a personalized dashboard for easy account management, order tracking, and access to a wide range of products, enhancing the overall shopping experience."},
        {img:"/images/flutter.png",title:"Mobile App",description:"The Flutter user app provides a smooth and engaging interface, enabling users to browse products, manage orders, and enjoy a seamless shopping experience on their mobile devices"}
    ]
    return (
        <div className=' w-full  pt-16' >

            {/* ~~~~~~~~~~~~~~~~~ CHECK OUT DEMO ~~~~~~~~~~~~~~~  */}


            <section className=' container mx-auto relative '>
            <div>
                    {/* <Image className='  w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] rounded-full absolute z-0 top-6 left-1 sm:top-12 sm:left-4 md:top-16 md:left-16 animate-spin  ' src='/images/spinner-bg.png' width={100} height={100} alt='spinner'/> */}
                </div>
                <div className='text-center z-10'>
                    <p className='font-bold text-red-600 sm:text-xl lg:text-2xl mt-8 mb-4'>CHECK OUT OUR DEMOS</p>
                    <h2 className='font-bold text-2xl sm:text-3xl lg:text-5xl mb-12'>Access All Demo Links Here</h2>
                </div>
                <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto justify-center items-center mb-12'>

                    {
                        checkOutDemoCart.map((data,index)=>{
                            return(
                                <div key={index}>
                                    <DemoCheckOutCart {... data} />

                                </div>
                            )
                        })
                    }

                </div>
            </section>




             
        </div>
    );
};

export default CheckOutDemo;