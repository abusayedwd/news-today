import FooterPage from '@/components/home/Footer';
import LogingPage from '@/components/home/Loging';
import Navbarpage from '@/components/home/Navbar';
import React from 'react';

const Loginpage = () => {
   return (
      <div>
         <Navbarpage></Navbarpage>
          <LogingPage></LogingPage>
          <FooterPage></FooterPage>
      </div>
   );
};

export default Loginpage;