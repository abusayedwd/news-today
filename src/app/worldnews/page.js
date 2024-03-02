import WorldnewsBennerPage from '@/components/cetagoryBenner/WorldnewsBenner';
import FooterPage from '@/components/home/Footer';
import Navbarpage from '@/components/home/Navbar';
import WorldnewsPage from '@/components/home/Worldnews';
import React from 'react';

const WorldNpage = () => {
   return (
      <div>
         <Navbarpage></Navbarpage>
         <WorldnewsBennerPage></WorldnewsBennerPage>
          <WorldnewsPage></WorldnewsPage>
          <FooterPage></FooterPage>
      </div>
   );
};

export default WorldNpage;