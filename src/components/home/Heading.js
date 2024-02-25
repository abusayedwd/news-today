"use client"
import moment from "moment/moment";
 
import Marquee from "react-fast-marquee";
const HeadingPage = () => {
   return (
      <div className="flex items-center  bg-slate-500 h-10">
         <div className="bg-green-500 md:w-[10%] h-10 items-center px-2">
            <h1 className="font-bold ">JUST NOW</h1>
            <p className="text-xs font-semibold">{moment().format("MMM Do YY")}</p>
         </div>
         <div className="w-[85%]"> 
   <Marquee pauseOnHover className="bg-slate-500 flex items-center"> 
      <p className="text-slate-200"> <span className="bg-gray-600 p-2 text-blue-400 font-semibold rounded-2xl">BD NEWS :</span> BB cyber heist case: CID gets 77th date for submitting probe.</p>

      <p className="text-slate-200"> <span className="bg-gray-600 p-2 text-blue-400 font-semibold rounded-2xl">WORLD NEWS:</span> US and UK carry out new strikes on Yemens Houthis.</p>

      <p className="text-slate-200"> <span className="bg-gray-600 p-2 text-blue-400 font-semibold rounded-2xl">FASHION NEWS:</span> BTRC allows mobile operators to offer wireless broadband.</p>

      <p className="text-slate-200"> <span className="bg-gray-600 p-2 text-blue-400 font-semibold rounded-2xl">SPORTS NEWS:</span> Ireland fought to get bonus point score - Farrell.</p>
  </Marquee>
         </div>
      </div>
   );
};

export default HeadingPage;