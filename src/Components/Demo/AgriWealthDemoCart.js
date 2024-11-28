import React from 'react';
import Image from 'next/image';

const AgriWealthDemoCart = (props) => {
    return (
        <div>
            <section >
                <div className='container border-2 xl:w-[500px] xl:h-[500px] md:gap-6 rounded-lg mx-auto hover:shadow-xl transition bg-white'>
                    <div className=' w-full h-[400px] xl:h-[400px]   overflow-hidden   bg-[#E4EEE2] relative  rounded-xl '> 
                        <div>
                        <Image className='mx-auto w-full rounded-lg p-4 absolute hover:-translate-y-[1310px] sm:hover:-translate-y-[1120px] md:hover:-translate-y-[1570px] lg:hover:-translate-y-[1870px] 2xl:hover:-translate-y-[3145px] transition-transform duration-[10s] ease-linear' src={props.img} width={10000} height={10000} alt='logo'></Image>
                        </div>
                        
                    </div>
                    
                   <div className='p-4'>
                   <h3 className='font-bold text-2xl'>{props.title}</h3>
                   <p className='text-green-300'>{props.description}</p>
                   </div>
                   
                </div>
            </section>
        </div>
    );
};

export default AgriWealthDemoCart;