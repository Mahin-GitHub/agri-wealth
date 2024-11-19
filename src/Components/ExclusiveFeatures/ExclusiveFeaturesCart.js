import React from 'react';
import Image from 'next/image';

const ExclusiveFeaturesCart = (props) => {
    return (
        <div>
            <section >
                <div className='border-2 px-12 py-[100px] rounded-2xl m-4  mx-auto shadow-xl transition  '>
                    <Image className='rounded-full mx-auto' src={props.icon} width={60} height={60} alt='logo'></Image>
                    <h3 className='text-center font-bold text-xl mt-6'>{props.title}</h3>
                    <p className='text-center'>{props.description}</p>
                </div>
            </section>
        </div>
    );
};

export default ExclusiveFeaturesCart;