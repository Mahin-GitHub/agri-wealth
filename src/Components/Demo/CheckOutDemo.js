"use client";
import Image from 'next/image';
import React from 'react';
import DemoCheckOutCart from './CheckOutDemoCart';

const CheckOutDemo = () => {

    let checkOutDemoCart = [
        {img:"/images/admin.jpg",title:"Admin Panel",description:"AgriWealth offers a secure admin panel with a customizable dashboard for easy management of user data, financial statistics, and website operations."},
        {img:"/images/website.jpg",title:"Website",description:"The AgriWealth website is designed for a seamless shopping experience, featuring an attractive layout, user-friendly navigation, and responsive design, ensuring accessibility across all devices."},
        {img:"/images/user.png",title:"User Panel",description:"User panel in offers a personalized dashboard for easy account management, order tracking, and access to a wide range of products, enhancing the overall shopping experience."},
        {img:"/images/flutter.png",title:"Flutter User App",description:"The Flutter user app provides a smooth and engaging interface, enabling users to browse products, manage orders, and enjoy a seamless shopping experience on their mobile devices"}
    ]
    return (
        <div>

            {/* ~~~~~~~~~~~~~~~~~ CHECK OUT DEMO ~~~~~~~~~~~~~~~  */}


            <section className=' container'>
                <div className='text-center'>
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