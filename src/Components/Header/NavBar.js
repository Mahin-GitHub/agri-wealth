"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiAlignJustify } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import clsx from 'clsx';




const NavBar = () => {

    const logo = "/images/logo.jpg";
    const navLinks = [{label:"Features",link:"#"},{label:"Demo", link:"#"},{label:"Documentation",link:"#"}]
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className=" sticky top-0 left-0 w-full h-fit z-[9999]  bg-gradient-to-r from-green-900 via-[#23741d] to-[#1C4119]">
            <nav >

                <div className=' container w-full text-white flex sm:flex-row items-center justify-between mx-auto my-8 ' >

                    <div className='flex items-center cursor-pointer flex-shrink-0'>
                        <Image className='rounded-full' src={logo} width={40} height={40} alt='logo'></Image>
                        <h1 className='font-extrabold text-2xl sm:text-3xl ml-3'>Agri<span className='text-[#e4fa1f]'>wealth</span></h1>
                    </div>

                    <div>
                        <div className='hidden  md:flex md:flex-row '>
                            {/* className='mx-4 text-xl hover:text-green-500 transition' */}
                            <Link className='a' href="#">Features  <span></span></Link>
                            <Link className='a' href="#">Demo  <span></span></Link>
                            <Link className='a' href="#">Documentation <span></span></Link>

                        </div>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='p-2 hover:bg-green-900 rounded-lg text-gray-400 hover:text-white focus:outline-none'>
                            {
                                isOpen ? <RxCross1 className='w-6 h-6 z-50' /> : <FiAlignJustify className='w-6 h-6' />
                            }

                        </button>

                    </div>
                    {/* Mobile Menu */}


                </div>

                {/* Sidebar Mobile Menu */}
                
                {
                    isOpen && (


                        <div className={clsx('fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full ', isOpen && "translate-x-0 transition-all duration-500 ")}>
                            <div>
                            <Image className='absolute w-[200px] h-[200px] top-0 right-0 rotate-180'  src={'/images/floral-1.png'} alt="bg-img" width={5000} height={5000} />
                            
                            </div>
                            <section className='text-black  bg-gradient-to-tr from-green-900 via-[#14b808] to-[#112210be] flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-0 flex w-56'>
                                <RxCross1 onClick={()=> setIsOpen(false)} className='mt-0 mb-8 text-3xl bg-[#585f14] text-white font-bold cursor-pointer p-2 hover:bg-green-900 rounded-lg  hover:text-white focus:outline-none'/>
                                {
                                    navLinks.map((d,i)=>{
                                        return (
                                            <div key={i}> 
                                                <Link  className='font-bold w-full p-3 rounded-full hover:text-[rgb(158,255,79)] hover:bg-gradient-to-tr hover:from-green-900 hover:via-[#14b808] hover:to-[#112210be] ' href={d.link} >{d.label}</Link>
                                            </div>

                                        )
                                    })
                                }

                            </section>

                        </div>


                        


                    )
                }
            </nav>
        </div>
    );
};

export default NavBar;