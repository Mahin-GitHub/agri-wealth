import React from 'react';
import Image from 'next/image';

const AgriWealthDemoCart = (props) => {
    return (
        <div>
            <section >
                <div className='border-2 p-5 rounded-2xl m-4  mx-auto hover:shadow-xl transition bg-white'>
                    <div className='flex justify-evenly items-center bg-[#E4EEE2] gap-6 rounded-xl'> 
                        <div>
                        <Image className='mx-auto rounded-xl p-4' src={props.img} width={150} height={300} alt='logo'></Image>
                        </div>
                        <div>
                        <Image className='mx-auto rounded-xl p-4' src={props.img} width={150} height={300} alt='logo'></Image>
                        </div>
                    </div>
                    
                    <h3 className='font-bold text-2xl mt-6'>{props.title}</h3>
                    <p className='text-green-300'>{props.description}</p>
                   
                </div>
            </section>
        </div>
    );
};

export default AgriWealthDemoCart;