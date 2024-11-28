import React from 'react';
import AgriWealthDemoCart from './AgriWealthDemoCart';


const AgriWealthDemo = () => {


    let agriWealthDemoCart = [
        { img: "/images/full-page.png", title: "Mobile App", description: "Agricultural Investment Platform" },
        { img: "/images/full-page.png", title: "Mobile App", description: "Agricultural Investment Platform" },
        { img: "/images/full-page.png", title: "Mobile App", description: "Agricultural Investment Platform" },
        { img: "/images/full-page.png", title: "Mobile App", description: "Agricultural Investment Platform" },
        { img: "/images/full-page.png", title: "Mobile App", description: "Agricultural Investment Platform" },
        { img: "/images/full-page.png", title: "Mobile App", description: "Agricultural Investment Platform" }
    ]
    return (
        <div>
            {/* ~~~~~~~~~~~~~~~~~ AGRIWEALTH  DEMO ~~~~~~~~~~~~~~~  */}

            <section className=' bg-[#F4F7E8] p-[5px]  ' >
                

                <div className='text-center'>
                    <p className='text-green-600 font-bold lg:text-xl mb-2 pt-16'>AGRIWEALTH DEMO</p>
                    <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-16'>Agriculture Investment Platform.</h2>
                </div>

                <div className=' container md:w-[80%] lg:w-[70%] flex items-center justify-between sm:justify-evenly lg:justify-around mx-auto border border-red-800 font-bold rounded-xl overflow-hidden '>
                    <div>
                        <button className=' focus:bg-green-600 focus:rounded-md  p-2 lg:p-4 focus:text-white'>Website</button>
                    </div>
                    <div>
                        <button className=' focus:bg-green-600   focus:rounded-md  p-2 lg:p-4 focus:text-white'>User Panel</button>
                    </div>
                    <div>
                        <button className=' focus:bg-green-600   focus:rounded-md p-2 lg:p-4 focus:text-white'>Admin Panel</button>
                    </div>
                    <div>
                        <button className=' focus:bg-green-600  focus:rounded-md p-2 lg:p-4 focus:text-white'>Mobile App (Available)</button>
                    </div>

                </div>


                <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:justify-around  mx-auto justify-center items-center'>

                    {
                        agriWealthDemoCart.map((data, index) => {
                            return (
                                <div key={index}>
                                    <AgriWealthDemoCart {...data} />

                                </div>
                            )
                        })
                    }

                </div>

            </section>
        </div>
    );
};

export default AgriWealthDemo;