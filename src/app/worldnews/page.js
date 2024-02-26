import FooterPage from '@/components/home/Footer';
import Navbarpage from '@/components/home/Navbar';
import WorldnewsPage from '@/components/home/Worldnews';
import React from 'react';

const WorldNpage = () => {
   return (
      <div>
         <Navbarpage></Navbarpage>
          <WorldnewsPage></WorldnewsPage>
          <FooterPage></FooterPage>
      </div>
   );
};

export default WorldNpage;