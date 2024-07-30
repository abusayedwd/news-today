"use client"
import moment from "moment/moment";
import { useEffect, useState } from "react";
 
import Marquee from "react-fast-marquee";


 
const HeadingPage = () => {
   const [currentTime, setCurrentTime] = useState('');
   const [isMounted, setIsMounted] = useState(false);
 
   useEffect(() => {
     setIsMounted(true);
   }, []);
 
   useEffect(() => {
     if (isMounted) {
      
       const intervalId = setInterval(() => {
         setCurrentTime(moment().format('HH:mm:ss'));
       }, 1000);
  
       return () => clearInterval(intervalId);
     }
   }, [isMounted]);
   return (
      <div className="flex items-center bg-slate-500 h-14">
         <div className="bg-green-500 md:w-[20%] h-14 items-center px-2"> 
            <h1 className="font-bold ">JUST NOW</h1>
            {/* {
               setInterval(() => {
                  <p className="text-xs font-semibold">{moment().format("MMM Do YY HH:mm:ss")}</p>
                }, 1000)
            } */}
             <p className="text-xs font-semibold">{moment().format("MMM Do YY")}</p>
             <p className="text-[10px] font-semibold text-cyan-800 "> {currentTime}</p>
          
         </div>
         <div className=""> 
   <Marquee pauseOnHover className="bg-slate-500 flex items-center"> 
      <p className="text-slate-200"> <span className="bg-green-500 text-black px-1  font-semibold rounded-2xl">BD NEWS :</span> BB cyber heist case: CID gets 77th date for submitting probe.</p>

      <p className="text-slate-200"> <span className="bg-green-500 text-black  px-1 font-semibold rounded-2xl">WORLD NEWS:</span> US and UK carry out new strikes on Yemens Houthis.</p>

      <p className="text-slate-200"> <span className="bg-green-500 text-black px-1 font-semibold rounded-2xl">FASHION NEWS:</span> BTRC allows mobile operators to offer wireless broadband.</p>
 
      <p className="text-slate-200"> <span className="bg-green-500 text-black px-1  font-semibold rounded-2xl">SPORTS NEWS:</span> Ireland fought to get bonus point score - Farrell.</p>
  </Marquee>
         </div>
      </div>
   );
};

export default HeadingPage;