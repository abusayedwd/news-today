/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Bennerpage = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661255378914-d0934128d91d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BD NEWS",
      des: "BB cyber heist case: CID gets 77th date for submitting probe.",
    },

    {
      img: "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "WORLD NEWS",
      des: "US and UK carry out new strikes on Yemen's Houthis.",
    },

    {
      img: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "FASHION",
      des: "BTRC allows mobile operators to offer wireless broadband.",
    },

    {
      img: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "LIFESTYLE",
      des: "Elaf Al Dubai launched at Sheraton Dhaka",
    },

    {
      img: "https://plus.unsplash.com/premium_photo-1676634832558-6654a134e920?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "SPORTS NEWS",
      des: "Ireland 'fought' to get bonus point score - Farrell.",
    },
  ];
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider, sliders.length]);
  return (
    <div className=" ">
      <div
        className="w-full relative h-72 sm:h-96 md:h-[540px] lg:h-[640px] xl:h-[780px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
        style={{
          backgroundImage: `url(${sliders[currentSlider].img})`,
          height: "450px",
        }}
      >
        {/* text container here */}
        <div className="drop-shadow-lg text-white text-center px-5">
          <h1 className="text-5xl font-thin lg:text-5xl text-orange-200 mb-3">
            {sliders[currentSlider].title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
            {sliders[currentSlider].des}
          </p>
        </div>

        <div className="absolute md:flex items-center bg-white w-[90%] md:h-32 md:-bottom-20 -bottom-72 shadow-2xl">
          <div className="md:flex items-center gap-2 mt-2 pl-4">
            <div>
              <Image
                height={200}
                className=" rounded-xl shadow-lg"
                width={200}
                alt=""
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div>
              <small className="text-orange-500 font-semibold">Technology</small>
              <p>New High Tech Number Plate to Detect Uninsured Drivers</p>
            </div>
          </div>
          <div className="md:flex items-center gap-2 pl-4">
            <div>
              <Image
                height={200}
                className=" rounded-xl shadow-lg"
                width={200}
                alt=""
                src="https://images.unsplash.com/photo-1581091877286-979c6f103cad?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div>
              <small className="text-orange-500 font-semibold">LifeStyle</small>
              <p>
                The Best Gifts for Women to Receive for Mother’s Day and Beyond
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bennerpage;
