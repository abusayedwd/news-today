"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaAlignJustify } from "react-icons/fa";


const trending = [
   {
     img: "https://images.unsplash.com/photo-1581092787765-e3feb951d987?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     title: "BD NEWS",
     des: "Jabra’s Elite 4 Earbuds Forgo a Few Niceties for a $20 Price Cut",
   },

   {
     img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     title: "WORLD NEWS",
     des: "HDR Photography Blew My Mind. It’s Complicated.",
   },

   {
     img: "https://images.unsplash.com/photo-1581092786450-7ef25f140997?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     title: "FASHION",
     des: "How to Watch Euro 2024 Qualifier From Anywhere FREE",
   },

   {
     img: "https://images.unsplash.com/photo-1510137221422-879a9f7d2ba0?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     title: "LIFESTYLE",
     des: "In World 1st, Virus Spotted Attached to 2nd Virus",
   }, 
 ];

const TrendingPostpage = () => {
   const [tred, setTred] = useState([])
    
   return (
      <div className='md:mt-32 mt-80 w-[90%] mx-auto'>
         <div className='flex items-center gap-2 mb-2'>
         <FaAlignJustify/>
         <h1 className='text-2xl font-bold'>Trending Post</h1>
         </div>
        <div className='grid md:grid-cols-4 gap-4'>
        {
            trending?.map((tred, indx) => <div key={indx}>
                <div className=" shadow-lg max-w-[350px] font-sans rounded-xl space-y-6 h-88 mx-auto bg-white">
          <div className="flex justify-center w-full h-80 lg:h-[280px] relative"> 
              <Image height={200} width={350} className="rounded-lg bg-black/40  " src={tred.img} alt="img" />
          </div>
          <div className=" w-[85%] mx-auto font-semibold space-y-2">
              <h6 className="text-sm md:text-base">{tred.des}</h6>
              
          </div>
          
      </div>
            </div>)
         }
        </div>
      </div>
   );
};

export default TrendingPostpage;