import Image from 'next/image';
import React from 'react';

const FashiontredPage = () => {
   return (
      <div className='bg-emerald-300 mt-8'> 
      <div className=' w-[90%] mx-auto py-16'>
         <h1 className='text-xl mb-4 font-bold'>Fashion Trends</h1>
             <div className='md:flex gap-4'>
               <div className=' md:w-[100%] w-[100%]'>
       <div className="hero h-[550px] w-full" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1627577279497-4b24bf1021b6?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
   
    <div className=" text-white mt-64"> 

      <p className=" p-4 text-2xl font-serif font-semibold">The 10 Key Spring/summer 2024 Fashion Trends to Know Now <br /></p>
      <div className='flex justify-center items-center'>
         <Image height={30} width={30} className='w-6 h-6 rounded-full' alt='' src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1661&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
         <p className='text-xs font-bold text-white'>shen-done  march-20, 2021</p>
      </div>
       
    </div>
   
</div>
               </div>

              
               <div className=' grid md:grid-cols-2 grid-cols-1 px-4 gap-4'>
                        <div>
                    <Image className=' w-60 h-44 rounded-xl' height={50} width={50} alt='' src="https://images.unsplash.com/photo-1632149933606-fa45623682ee?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
                    <p className =" text-sm font-semibold">Shop The Key Autumn/Winter 2023 Bag Trends To Know Now</p>
                        </div>
                        <div>
                        <Image className=' w-60 h-44 rounded-xl' height={50} width={50} alt='' src="https://images.unsplash.com/photo-1625591340248-6d289000f96a?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
                           <p className =" text-sm font-semibold">6 Hottest Sunglasses Trends Inspired by Bollywood Celebrities for Summer 2024</p>
                        </div>
                        <div>
                        <Image className=' w-60 h-44 rounded-xl' height={50} width={50} alt='' src="https://images.unsplash.com/photo-1619533394727-57d522857f89?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
                           <p className =" text-sm font-semibold">6 Best Sunglasses Trends of 2023 to Keep Wearing Next Year</p>
                        </div>
                        <div>
                        <Image className=' w-60 h-44 rounded-xl' height={50} width={50} alt='' src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
                           <p className =" text-sm font-semibold">Shoe Trends That Are Popular and Going Out This Fall</p>
                        </div>
               </div> 
             </div>
      </div>
      </div>
   );
};

export default FashiontredPage;