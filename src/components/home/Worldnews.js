"use client"
import Image from 'next/image'; 

 
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const WorldnewsPage = () => { 
   const progressCircle = useRef(null);
   const progressContent = useRef(null);
   const onAutoplayTimeLeft = (s, time, progress) => {
     progressCircle.current.style.setProperty('--progress', 1 - progress);
   //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
   };
   return (
      <div className=' w-[90%] mx-auto mt-12'>
         <h1 className='text-xl font-semibold border-l-4 border-blue-400'>World News</h1>
        <div className='md:flex gap-4'>
               <div className='md:w-[70%] w-[50%]'>
                  <div className='flex gap-2'>
            <div className='md:w-[60%] w-[50%]'>
           <div className=" shadow-lg font-sans rounded-xl space-y-6 h-full bg-white">
          <div className="flex justify-center w-full h-80 lg:h-[280px] relative"> 
              <Image height={200} width={480} className="rounded-lg bg-black/40  " src= "https://images.unsplash.com/photo-1590092518493-4b82732e1279?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
          </div>
          <div className=" w-[85%] mx-auto font-semibold space-y-2">
            <p className=' bg-red-500 w-12 text-white px-1 text-xs'>Finance</p>
              <h6 className="text-xs md:text-base">Global Banking Crisis Fears and Slowdown Approaching in 2024</h6>  
 
              <small>By Shane DoeJan 12, 2020</small>
              <p className='text-xs'> <span className='text-2xl'>T</span>o understand the new politics stance and other pro nationals of recent times, we should look to Silicon other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. In the high-profile…<span className='text-blue-400'>read more</span></p>
              
          </div>
          
      </div>
                      </div>
                      <div className='md:w-[40%] w-[50%]'>
         <div className=" shadow-lg font-sans rounded-xl h-60 bg-white">
          <div className="w-full h-72 lg:h-[280px]"> 
              <Image height={100} width={480} className="rounded-lg h-40 bg-black/40 " src= "https://images.unsplash.com/photo-1542062700-9b61ccbc1696?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
          <div className=" w-[85%] mx-auto font-semibold">
              <h6 className="text-xs md:text-base">How Faith and Spirituality Shape Modern Lifestyle</h6>
              <small>By Shane DoeJan 11, 2020</small> 
          </div> 
          </div>
      </div>
         <div className=" shadow-lg font-sans rounded-xl h-60 mt-3 bg-white">
          <div className="w-full h-80 lg:h-[280px] relative"> 
              <Image height={200} width={480} className="rounded-lg h-40 bg-black/40 " src= "https://images.unsplash.com/photo-1553697388-94e804e2f0f6?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
          <div className=" w-[85%] mx-auto font-semibold">
              <h6 className="text-xs md:text-base">Why Getting A Second Passport Is The Perfect Plan</h6>
              <small>By Cary DoeJan 11, 2021</small> 
          </div> 
          </div>
      </div>
                      </div>
                  </div>
                  <div className="hero w-[90%] mx-auto my-8 h-20 bg-gradient-to-l from-slate-300 to-orange-400" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}
                  >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content">
     <h1 className='text-blue-300 font-bold'>New Smartmag</h1> <br />
     <small className='text-yellow-400'>Trusted by 15000+ User worldwide</small>
  </div>
</div>


            <div className='md:flex items-center mt-5 gap-3 bg-white shadow-2xl p-3'>
                  <div className=' md:w-[30%]'>
                     <Image width={350} height={100} className=' h-40' alt='' src="https://images.unsplash.com/photo-1547316020-8365dfabe141?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                  </div>
                  <div className='md:w-[70%]'>
                  <p className=' bg-red-500 w-12 text-white px-1 text-xs'>Finance</p>
                  <h1 className='text-xl'>Wall Street Ends Down This Weekend, Snaps Weekly Winning Streak</h1>
                  <small className=' text-xs'>Jan 11, 20208 Mins Read54 Views</small>
                  <p>To understand the new politics stance and other pro nationals…</p>
                  </div>
            </div>
            <div className='md:flex items-center mt-5 gap-3 bg-white shadow-2xl p-3'>

                  <div className=' md:w-[30%]'>
                     <Image width={350} height={100} className=' h-40' alt='' src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                  </div>
                  <div className='md:w-[70%]'>
                  <p className=' bg-red-500 w-12 text-white px-1 text-xs'>Politics</p>
                  <h1 className='text-xl'>Digging Up Old Graves to Make Room for Newly Fallen Soldiers</h1>
                  <small className=' text-xs'>Jan 11, 20208 Mins Read58 Views</small>
                  <p>To understand the new politics stance and other pro nationals…</p>
                  </div>
            </div>
            <div className='md:flex items-center mt-5 gap-3 bg-white shadow-2xl p-3'>
                  <div className=' md:w-[30%]'>
                     <Image width={350} height={100} className=' h-40' alt='' src="https://images.unsplash.com/photo-1518316847866-651fbb917956?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                  </div>
                  <div className='md:w-[70%]'>
                  <p className=' bg-red-500 w-12 text-white px-1 text-xs'>World</p>
                  <h1 className='text-xl'>The New CEO Stresses Commitment to Free Speech in First Speech</h1>
                  <small className=' text-xs'>Jan 11, 20208 Mins Read54 Views</small>
                  <p>To understand the new politics stance and other pro nationals…</p>
                  </div>
            </div>

               </div>

               <div className='md:w-[30%] w-[50%]'>
                  <h1 className=' bg-black text-xl p-2 text-white font-bold'>Feature Post</h1>
                  <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
         
        modules={[Autoplay, ]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
         
        <SwiperSlide>
        <div className='mt-5 gap-3 bg-white '>
                  <div className=' '>
                     <Image width={350} height={100} className=' h-40' alt='' src="https://images.unsplash.com/photo-1547316020-8365dfabe141?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                  </div>
                  <div className=' '>
                  <p className=' bg-red-500 mt-3 w-12 text-white px-1 text-xs'>Finance</p>
                  <h1 className='text-xl font-medium'>Wall Street Ends Down This Weekend, Snaps Weekly Winning Streak</h1>
                  <small className=' text-xs'>Jan 11, 20208 Mins Read54 Views</small>
                  <p>To understand the new politics stance and other pro nationals…<span className='text-blue-400'>read more</span></p>
                  </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mt-5 gap-3 bg-white '>
                  <div className=' '>
                     <Image width={350} height={100} className=' h-40' alt='' src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                  </div>
                  <div className=' '>
                  <p className=' bg-red-500 mt-3 w-12 text-white px-1 text-xs'>Politics</p>
                  <h1 className='text-xl font-medium'>Digging Up Old Graves to Make Room for Newly Fallen Soldiers</h1>
                  <small className=' text-xs'>Jan 11, 20208 Mins Read54 Views</small>
                  <p>To understand the new politics stance and other pro nationals…<span className='text-blue-400'>read more</span></p>
                  </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mt-5 gap-3 bg-white '>
                  <div className=' '>
                     <Image width={350} height={100} className=' h-40' alt='' src="https://images.unsplash.com/photo-1518316847866-651fbb917956?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                  </div>
                  <div className=' '>
                  <p className=' bg-red-500 mt-3 w-12 text-white px-1 text-xs'>World</p>
                  <h1 className='text-xl font-medium'>The New CEO Stresses Commitment to Free Speech in First Speech</h1>
                  <small className=' text-xs'>Jan 11, 20208 Mins Read54 Views</small>
                  <p>To understand the new politics stance and other pro nationals…<span className='text-blue-400'>read more</span></p>
                  </div>
            </div>
        </SwiperSlide> 
        <div className="autoplay-progress" slot="container-end">
          <svg ref={progressCircle}> 
            
           </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <div>
      <h1 className=' bg-black text-xl p-2 text-white font-bold'>Don't Miss</h1>
         <div className='md:flex items-center gap-4 mt-6 shadow-md'>
            <div>
               <Image height={100} width={150} className=' rounded-lg' alt='' src="https://images.unsplash.com/photo-1623039405147-547794f92e9e?q=80&w=1726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
            <div>
               <p>What Happened to the Apple Watch Being About Fashion?</p>
            </div>
         </div>
         <hr className=' mt-2 text-blue-700' />
         <div className='md:flex items-center gap-4 mt-6 shadow-md'>
            <div>
               <Image height={100} width={150} className=' rounded-lg' alt='' src="https://images.unsplash.com/photo-1615893208238-ead83e5a2b3b?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
            <div>
               <p>25 Incredible Experiences You Can Only Have in Sea on a Small Ship</p>
            </div>
         </div>
         <hr className=' mt-2 text-blue-700' />
         <div className='md:flex items-center gap-4 mt-6 shadow-md'>
            <div>
               <Image height={130} width={150} className=' rounded-lg' alt='' src="https://images.unsplash.com/photo-1589932896376-5244c8898269?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
            <div>
               <p>2Greece & Austria Join the Ranks of Top 10 International Tourist</p>
            </div>
         </div>
         <hr className=' mt-2 text-blue-700' />
         <div className='md:flex items-center gap-4 mt-6 shadow-md'>
            <div>
               <Image height={100} width={150} className=' rounded-lg' alt='' src="https://images.unsplash.com/photo-1510379475279-d53bd0a42636?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
            <div>
               <p>Singapore Tourism Board Appoints New Regional Director Europe</p>
            </div>
         </div>
         <hr className=' mt-2 text-blue-700' />
         <p className='text-xl font-medium mt-5'>Today Article</p>
         <p className='text-sm'><span className='text-2xl'>A</span>nyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.

If you’ve heard about blogging but are a beginner and don’t know where to start, the time for excuses is over. </p>
      </div>
               </div>
               <div>
               </div>
       </div>
      </div>
   );
};

export default WorldnewsPage;