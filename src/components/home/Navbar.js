"use client"
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { useSession } from 'next-auth/react';

const Navbarpage = () => {
   const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();
    const {data:session} = useSession()
    // console.log(session?.user.email);
 
    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);
   return (
      <div>
           <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <h2>NEWS TODAY</h2>
        </div>
        <ul className="hidden items-center justify-between gap-10 md:flex">
          <Link href= "/">

          <li className="group flex  cursor-pointer flex-col">
            Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          </Link>
          <Link href="/worldnews">

          <li className="group flex  cursor-pointer flex-col">
             World News<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          </Link>
          <li className="group flex  cursor-pointer flex-col">
            Features<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
       

          {
            session? <div>
              <p>{session?.user?.name}</p>
              <button onClick={() => signOut(`/login`)} className="group flex bg-red-400 px-2 rounded-lg font-semibold  cursor-pointer flex-col">
            LogOut<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
            </div> : <Link href="/login"> 
          <li className="group flex bg-orange-400 px-2 rounded-lg font-semibold  cursor-pointer flex-col">
            Login<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          </Link>
          }
          
          
        </ul>
        <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
          {dropDownState && (
            <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
              <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                Home
              </li>
              <Link href="/worldnews">
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                World News
              </li>
              </Link>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                Feature
              </li>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                Technology
              </li>
              <Link href="/login"> 
          <li className="group flex bg-orange-400 px-2 rounded-lg font-semibold  cursor-pointer flex-col">
            Login<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li> 
          </Link>
          <li className="group flex bg-red-400 px-2 rounded-lg font-semibold  cursor-pointer flex-col">
            LogOut<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
            </ul>
          )}
        </div>
</nav>
      </div>
   );
};

export default Navbarpage;