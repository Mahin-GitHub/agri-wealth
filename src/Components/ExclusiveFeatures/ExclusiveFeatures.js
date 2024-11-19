import React from 'react';
import ExclusiveFeaturesCart from './ExclusiveFeaturesCart';

const ExclusiveFeatures = () => {
    let exclusiveFeatures = [
        {icon:"/images/flutter.png",title:"KYC Management"},
        {icon:"/images/user.png",title:"Informative Dashboard"},
        {icon:"",title:"Responsive Design"},
        {icon:"",title:"Multi Language Supported"},
        {icon:"",title:"RTL Supported"},
        {icon:"",title:"35+ Automated Gateways"},
        {icon:"",title:"Manual Gateways"},
        {icon:"",title:"Push Notification"},
        {icon:"",title:"SMS Notification"},
        {icon:"",title:"Email Notifiaction"},
        {icon:"",title:"Manage Logo & SEO"},
        {icon:"",title:"Deposit"},
        {icon:"",title:"Payout/Withdraw"},
        {icon:"",title:"7+ Automated Withdraw"},
        {icon:"",title:"Plan Management"},
        {icon:"",title:"Schedule Management"},
        {icon:"",title:"Transaction Log"},
        {icon:"",title:"Commision Log"},
        {icon:"",title:"Support Ticket"},
        {icon:"",title:"User Management"},
        {icon:"",title:"Manage Content"},
        {icon:"",title:"Referral Bonus"},
        {icon:"",title:"Referral Comission"},
        {icon:"",title:"Clean Code"},
        {icon:"",title:"Developer Friendly"},
        {icon:"",title:"Well Documentation"},


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