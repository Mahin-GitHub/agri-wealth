"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiAlignJustify } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { FaLongArrowAltRight } from "react-icons/fa";

import clsx from 'clsx';




const NavBar = () => {

    const logo = "/images/logo.png";
    const navLinks = [{label:"Features",link:"#"},{label:"Demo", link:"#"},{label:"Documentation",link:"#"},{label:"More Products", link:"#"}]
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const [header, setHeader] = useState(false);

    const scrollHeader=()=>{
        if(window.scrollY >= 20){
            setHeader(true)
        }
        else{
            setHeader(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',scrollHeader)
        return()=>{
            window.addEventListener('scroll',scrollHeader)
        }
    },[])






    return (
        <div className={header?"fixed w-full h-fit bg-black z-[9999]" :"bg-transparent" } >
            <nav>

                <div className=' container text-white flex sm:flex-row items-center justify-between mx-auto ' >

                    <div className='flex items-center cursor-pointer flex-shrink-0'>
                        <Image className='rounded-full' src={logo} width={40} height={40} alt='logo'></Image>
                        <h1 className='font-extrabold text-sm xl:text-2xl ml-3'>Our<span className='text-[#e4fa1f]'>Products</span></h1>
                    </div>

                    <div>
                        <div className='hidden  md:flex md:flex-row '>
                            {/* className='mx-4 text-xl hover:text-green-500 transition' */}
                            <Link className='a ' href="#">Features  <span></span></Link>
                            <Link className='a ' href="#">Demo  <span></span></Link>
                            <Link className='a ' href="#">Documentation <span></span></Link>
                            <Link className='a ' href="#">More Products <span></span></Link>
                            

                        </div>
                    </div>
                    <div className='hidden md:flex justify-center items-center gap-2 p-4 bg-[#352a94] rounded-full hover:bg-[#473bb3] cursor-pointer'>
                        <div><button>Purchase</button></div>
                        <div><FaLongArrowAltRight />
                        </div>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='p-2  hover:bg-[#473bb3] rounded-lg text-white hover:text-white focus:outline-none'>
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
                            
                            <section className='text-black  bg-gradient-to-tr from-[#2b2655] via-[#080521] to-[#2b2655] flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-0 flex w-56'>
                                <RxCross1 onClick={()=> setIsOpen(false)} className='mt-0 mb-8 text-3xl text-white font-bold cursor-pointer p-2 rounded-lg  hover:bg-[#473bb3] w-10 h-10  focus:outline-none'/>
                                {
                                    navLinks.map((d,i)=>{
                                        return (
                                            <div key={i}> 
                                                <Link  className='font-bold w-full p-3 rounded-full text-white  hover:bg-gradient-to-tr hover:from-[#080521] hover:via-[#484569] hover:to-[#080521] ' href={d.link} >{d.label}</Link>
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