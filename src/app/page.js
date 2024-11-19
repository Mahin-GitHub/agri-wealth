
import AgriculturalInvestmentPlatform from '@/Components/AgriculturalInvestmentPlatform/AgriculturalInvestmentPlatform';
import BusinessGrow from '@/Components/BusinessGrow/BusinessGrow';
import Demo from '@/Components/Demo/Demo';
import ExclusiveFeatures from '@/Components/ExclusiveFeatures/ExclusiveFeatures';
import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import NavBar from '@/Components/Header/NavBar';

import React from 'react';




const page = () => {
  return (
    <div>

      <Header />
      <Demo/>
      <AgriculturalInvestmentPlatform/>
      <BusinessGrow/>
      <ExclusiveFeatures/>
      <Footer/>



    </div>
  );
};

export default page;