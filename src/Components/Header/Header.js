
import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';


const Header = () => {
    return (
        <div className='h-[100vh] bg-gradient-to-r from-green-900 via-[#23741d] to-[#1C4119]  relative '>
            <div>
                <Image className='absolute animate-pulse w-[150px] h-[150px] md:w-[250px] md:h-[250px] xl:w-[400px] xl:h-[400px] top-0 left-0 rotate-90 z-0' src={'/images/floral-1.png'} alt="bg-img" width={5000} height={5000} />
                <Image className='absolute animate-pulse w-[150px] h-[150px] md:w-[250px] md:h-[250px] xl:w-[400px] xl:h-[400px] top-0 right-0 rotate-180 z-0' src={'/images/floral-1.png'} alt="bg-img" width={5000} height={5000} />

            </div>
            <header>

                <section className='container w-full  mt-80 p-8 z-20 '>

                    <div>
                        <p className='motion text-sm md:text-lg   motion-preset-typewriter-[39] '>GROW YOUR FUTURE, INVEST IN AGRICULTURE</p>
                    </div>
                    <div className='py-8'>
                        <h2 className='font-bold text-2xl sm:text-5xl lg:text-6xl text-center text-white '>Agricultural Investment Platform.</h2>
                    </div>
                    <div className='flex flex-col sm:flex-row  justify-center sm:justify-between lg:justify-evenly items-center mx-auto pt-16 mb-20'>
                        <div className='pb-4'>
                            <h2 className='font-bold text-3xl text-white' >Responsive</h2>
                            <p className='text-[#A4A4A3] text-center mt-2'>Website</p>
                        </div>
                        <div className='pb-4'>
                            <h2 className='font-bold text-3xl text-white text-center '>Strong</h2>
                            <p className='text-[#A4A4A3] text-center mt-2 '>Admin Panel</p>
                        </div>
                        <div className='pb-4'>
                            <h2 className='font-bold text-3xl text-white text-center '>36+</h2>
                            <p className='text-[#A4A4A3] text-center mt-2'>Payment Gateways</p>
                        </div>
                    </div>


                </section>

            </header>
            <div className='mb-32'>
                <Image className='w-full lg:h-[400px] 2xl:h-[600px] absolute bottom-[-40px] sm:bottom-[-80px] md:bottom-[-120px] lg:bottom-[-140px] xl:bottom-[-90px] 2xl:bottom-[-130px] ' src={'/images/banner-bottom.png'} alt="BannerBottom" width={3000} height={3000}></Image>
            </div>
            {/* <div className='w-52 h-52 border-x-2 bg-transparent border-green-800 bg-green-950 z-0 rounded-full animate-pulse absolute top-[10px] left-[200px]'></div>
            <div className='w-52 h-52 border-y-2 bg-transparent border-green-800 bg-green-950 z-1 rounded-full animate-pulse absolute top-[100px] right-[200px] '></div> */}
        </div>
    );
};

export default Header;