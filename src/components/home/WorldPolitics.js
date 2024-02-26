 
import Image from "next/image";
import putin from '../../../public/images/putinb.png'
import bgsmart from '../../../public/images/bgsmart.png'
import lifestyle from '../../../public/images/lifestyle.png'
import homstyle from '../../../public/images/homestyle.png'
import { MdOutlineAccessTime } from "react-icons/md";
const WorldPoliticsPage = () => {
   return (
      <div className=" w-[90%] mx-auto mt-16">

              <h1 className="text-xl py-2 font-semibold border-l-4 border-blue-400">
        World Politics
      </h1>
              <div className='md:flex gap-4'>
              <div className="md:w-[70%] w-[100%]">
          <div className="grid md:grid-cols-2 gap-2">
            <div className=" ">
              <div className=" shadow-lg font-sans rounded-xl space-y-6 h-full bg-white">
                <div className="w-full md:h-80 lg:h-[280px] relative">
                  <Image
                    height={200}
                    width={480}
                    className="rounded-lg bg-black/40  "
                    src={putin}
                    alt="img"
                  />
                </div>
                <div className=" w-[85%] mx-auto font-semibold space-y-2">
                  <p className=" bg-red-500 w-12 text-white px-1 text-xs">
                    Politics
                  </p>
                  <h6 className="text-xs md:text-base">
                  Putin Approves New Media Restrictions Ahead of Presidential Election
                  </h6>

                  <small>By Shane DoeJan 12, 2020</small>
                  <p className="text-xs">
                    {" "}
                    <span className="text-2xl">W</span>o understand the new
                    politics stance and other pro nationals of recent times, we
                    should look to Silicon other pro nationals of recent times,
                    we should look to Silicon Valley and the quantified movement
                    of the latest generation.we
                    should look to Silicon other pro nationals of recent times,
                    we should look to Silicon Valley and the quantified movement
                    of the latest generation In the high-profile…
                    <span className="text-blue-400">read more</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-[80%] mx-auto w-[100%]">
              <div className=" shadow-lg font-sans rounded-xl h-72 bg-white">
                <div className=" md:h-72 lg:h-[280px]">
                  <Image
                    height={100}
                    width={480}
                    className="rounded-lg h-40 bg-black/40 "
                    src="https://images.unsplash.com/photo-1557089041-7fa93ffc2e08?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="img"
                  />
                  <div className=" w-[85%] mx-auto font-semibold">
                    <h6 className="text-xs md:text-base">
                    WHO events around the Union World Conference on Lung Health
                    </h6>
                    <small>By Shane DoeJan 11, 2020</small>
                  </div>
                </div>
              </div>
              <div className=" shadow-lg font-sans rounded-xl h-72 mt-3 bg-white">
                <div className="w-full mx-auto md:h-80 lg:h-[280px] relative">
                  <Image
                    height={200}
                    width={480}
                    className="rounded-lg h-40 bg-black/40 "
                    src="https://images.unsplash.com/photo-1561489401-fc2876ced162?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="img"
                  />
                  <div className=" w-[85%] mx-auto font-semibold">
                    <h6 className="text-xs md:text-base">
                    Ministry of Law Notifies Transfer of Several High Court Judges
                    </h6>
                    <small>By Cary DoeJan 11, 2021</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
             <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-12 mb-6">
                  <div className=" shadow-xl h-52 rounded-lg">
                     <Image height={200} width={300} className=" h-36 w-full rounded-lg" alt="" src="https://images.unsplash.com/photo-1550531996-ff3dcede9477?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
                     <p className=" px-3 text-sm font-medium">Trump Arrives at New York Court for Testimony in Trial</p>
                  </div>
                  <div className=" shadow-xl h-52 rounded-lg">
                     <Image height={200} width={300} className=" h-36 w-full rounded-lg" alt="" src="https://images.unsplash.com/photo-1707930073901-e9bade2a9ad9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
                     <p className=" px-3 text-sm font-medium">Greece’s Famous Beach May Close Due to Safety Risk</p>
                  </div>
                  <div className=" shadow-xl h-52 rounded-lg">
                     <Image height={200} width={300} className=" h-36 w-full rounded-lg" alt="" src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
                     <p className=" px-3 text-sm font-medium">Trade Ministers Ready Deal to Lower China Dependence</p>
                  </div>
                 
             </div>
                  <div className=" py-5">
                  <Image height={300} width={500} className=" h-24 w-full " alt="" src={bgsmart}></Image>
                     </div> 
          
        </div>
        <div className='md:w-[30%] w-full'>
        <div className=" md:w-[100%] w-[100%]">
            <div
              className="hero h-[350px] w-full"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1640558378987-74741517e220?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundRepeat:'no-repeat',height:'300px' }}
            >
              <div className="hero-overlay"></div>

              <div className=" text-white mt-16">
                <p className=" font-semibold text-green-400 ">
                  <small className=" text-orange-500">The New</small> <br /> Smartmag{" "}
                  
                </p>
                <button className="btn h-4 rounded-3xl w-32 btn-success">Get Start</button>
                 
              </div>
            </div>
          </div>  
          <h1 className=" bg-black text-xl mt-10 p-2 text-white font-bold">
            Most view
          </h1>   
          <div className="mt-8">
                 <div className=" shadow-xl p-2">
                 <span className=" font-bold text-2xl text-blue-500">1/ </span> 
                  <h1 className=" text-sm font-semibold">The 30 Hottest Models in the World Today (Updated 2023)</h1>
                  <p className="flex items-center justify-evenly mt-2">
                     <small>12 jun, 2020</small>
                     <small className="flex items-center"><MdOutlineAccessTime /> 4min read</small>
                  </p>
                 </div>
                 <div className=" shadow-xl p-2">
                 <span className=" font-bold text-2xl text-blue-500">2/ </span> 
                  <h1 className=" text-sm font-semibold">Daring Looks Celebrities Wore to Paris Fashion Week this Year</h1>
                  <p className="flex items-center justify-evenly mt-2">
                     <small>22 march, 2020</small>
                     <small className="flex items-center"><MdOutlineAccessTime /> 5min read</small>
                  </p>
                 </div>
                 <div className=" shadow-xl p-2">
                 <span className=" font-bold text-2xl text-blue-500">3/ </span> 
                  <h1 className=" text-sm font-semibold">Dubai-Based Yacht Company is Offering Socially-Distanced Luxury</h1>
                  <p className="flex items-center justify-evenly mt-2">
                     <small>02 april, 2020</small>
                     <small className="flex items-center"><MdOutlineAccessTime /> 2min read</small>
                  </p>
                 </div>
                 <div className=" shadow-xl p-2">
                 <span className=" font-bold text-2xl text-blue-500">4/ </span> 
                  <h1 className=" text-sm font-semibold">First Ever Pet Grooming Qualifications Launched in UK</h1>
                  <p className="flex items-center justify-evenly mt-2">
                     <small>06 jun, 2021</small>
                     <small className="flex items-center"><MdOutlineAccessTime /> 6min read</small>
                  </p>
                 </div>
                 <div className=" shadow-xl p-2">
                 <span className=" font-bold text-2xl text-blue-500">5/ </span> 
                  <h1 className=" text-sm font-semibold">Ways by Which Your Partner Impacts Your Life: Therapist Explains</h1>
                  <p className="flex items-center justify-evenly mt-2">
                     <small>12 jun, 2020</small>
                     <small className="flex items-center"><MdOutlineAccessTime /> 8min read</small>
                  </p>
                 </div>
          </div>
   </div>..
              </div>
      </div>
   );
};

export default WorldPoliticsPage;