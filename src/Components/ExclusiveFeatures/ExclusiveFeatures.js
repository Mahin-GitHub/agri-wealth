import React from 'react';
import ExclusiveFeaturesCart from './ExclusiveFeaturesCart';

const ExclusiveFeatures = () => {
    let exclusiveFeatures = [
        {icon:"/images/flutter.png",title:"KYC Management"},
        {icon:"/images/user.png",title:"Informative Dashboard"},
        {icon:"/images/flutter.png",title:"Responsive Design"},
        {icon:"/images/flutter.png",title:"Multi Language Supported"},
        {icon:"/images/flutter.png",title:"RTL Supported"},
        {icon:"/images/flutter.png",title:"35+ Automated Gateways"},
        {icon:"/images/flutter.png",title:"Manual Gateways"},
        {icon:"/images/flutter.png",title:"Push Notification"},
        {icon:"/images/flutter.png",title:"SMS Notification"},
        {icon:"/images/flutter.png",title:"Email Notifiaction"},
        {icon:"/images/flutter.png",title:"Manage Logo & SEO"},
        {icon:"/images/flutter.png",title:"Deposit"},
        {icon:"/images/flutter.png",title:"Payout/Withdraw"},
        {icon:"/images/flutter.png",title:"7+ Automated Withdraw"},
        {icon:"/images/flutter.png",title:"Plan Management"},
        {icon:"/images/flutter.png",title:"Schedule Management"},
        {icon:"/images/flutter.png",title:"Transaction Log"},
        {icon:"/images/flutter.png",title:"Commision Log"},
        {icon:"/images/flutter.png",title:"Support Ticket"},
        {icon:"/images/flutter.png",title:"User Management"},
        {icon:"/images/flutter.png",title:"Manage Content"},
        {icon:"/images/flutter.png",title:"Referral Bonus"},
        {icon:"/images/flutter.png",title:"Referral Comission"},
        {icon:"/images/flutter.png",title:"Clean Code"},
        {icon:"/images/flutter.png",title:"Developer Friendly"},
        {icon:"/images/flutter.png",title:"Well Documentation"},


    ]
    return (
        <div>
            <section >
                <div className='container'>
                    <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center'>Get Access to Exclusive Features</h2>
                </div>

                <div className=' container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:w-[85%] xl:grid-cols-5 gap-4 mx-auto justify-center items-center'>

                    {
                        exclusiveFeatures.map((data,index)=>{
                            return(
                                <div key={index}>
                                    <ExclusiveFeaturesCart {... data} />

                                </div>
                            )
                        })
                    }

                </div>
            </section>
        </div>
    );
};

export default ExclusiveFeatures;