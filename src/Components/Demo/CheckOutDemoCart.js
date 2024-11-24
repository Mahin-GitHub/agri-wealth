"use client";
import React from 'react';
import Image from 'next/image';
const DemoCheckOutCart = (props) => {

    return (
        <div>
            <section >
                <div className='border-2 p-5 rounded-2xl m-4  mx-auto hover:shadow-xl  hover:-translate-y-4  transition-all'>
                    <Image className='rounded-full mx-auto' src={props.img} width={60} height={60} alt='logo'></Image>
                    <h3 className='text-center font-bold text-2xl mt-6'>{props.title}</h3>
                    <p className='text-center'>{props.description}</p>
                    <p className='text-center text-blue-600 mt-5 cursor-pointer'>Explore More</p>
                </div>
            </section>
        </div>
    );
};

export default DemoCheckOutCart;