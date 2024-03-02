 'use client' 
import { TypeAnimation } from 'react-type-animation';
import worlbenner from '../../../public/images/World-Leaders1.jpg'
import TextTransition, { presets } from 'react-text-transition';
import React from 'react';
import HeadingPage from '../home/Heading';

const TEXTS = ['Forest', 'Building', 'Tree', 'Color'];
const WorldnewsBennerPage = () => {

   const [index, setIndex] = React.useState(0);

   React.useEffect(() => {
     const intervalId = setInterval(
       () => setIndex((index) => index + 1),
       3000, // every 3 seconds
     );
     return () => clearTimeout(intervalId);
   }, []);
 

   return (
      <div>
         <HeadingPage></HeadingPage>
            
            <div className="hero min-h-[550px]" style={{backgroundImage: 'url(https://www.igyaan.in/wp-content/uploads/2015/10/World-Leaders1.jpg)' }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content  text-neutral-content">
    <div className="">
      <h1 className="mb-4 text-5xl text-orange-200 uppercase font-thin   ">world news</h1>
        
    <h1 className='text-2xl text-center text-blue-700 font-bold'>
      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </h1>
    
       <button className="text-xl mt-4 w-32 h-16 before:block before:absolute   hover:before:bg-sky-700 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-sky-700 bg-transparent border-2 overflow-hidden border-sky-700 duration-500">Read To</button>

    </div>

  </div>
</div>
 
           
        
      </div>
   );
};

export default WorldnewsBennerPage;