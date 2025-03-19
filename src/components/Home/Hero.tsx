"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { COUNT_LIST } from "@/utils/helper";
import Description from "../common/Description";
import CustomButton from "../common/CustomButton";

const Hero = () => {
  const [count, setCount] = useState(false);
  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => setCount(inView),
  });
  return (
    <div className="bg-custom-gray">
      <div className="max-w-[1240px] mx-auto max-xl:pl-4 max-lg:pl-0 pt-[103px] max-sm:pt-10 max-md:pt-20 max-lg:pt-24 lg:pb-[116px] relative">
        <div className="max-w-[577px] max-lg:px-4 max-lg:max-w-none relative z-20">
          <h1 className="font-intergal font-bold leading-[100%] text-[64px] max-lg:text-6xl max-md:text-5xl max-sm:text-4xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <Description
            myClass="text-black/60 my-8 max-lg:my-6 max-md:mt-5 max-w-[545px] max-lg:max-w-none"
            text="Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style."
          />
          <CustomButton
            text="Shop Now"
            myClass="w-[210px] h-[52px] max-sm:w-full font-medium hover:bg-transparent border-black/10 hover:text-black border-black text-white bg-black"
          />

          <div
            ref={ref}
            className="pt-12 max-md:pt-5 flex gap-[52px] max-xl:gap-10 items-center w-full max-md:flex-wrap max-md:gap-x-[55px] gap-y-4 max-md:justify-center"
          >
            {COUNT_LIST.map((item, i) => (
              <div
                key={i}
                className="flex flex-col max-lg:items-center max-md:place-items-start"
              >
                <p className="text-[40px] max-lg:text-3xl max-md:text-2xl leading-[100%] font-bold">
                  <CountUp
                    start={0}
                    end={count ? [200, 2000, 30000][i] || 0 : 0}
                    duration={3}
                  />
                  +
                </p>
                <p className="leading-[22px] max-md:text-xs text-black/60 whitespace-nowrap">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Image
          src={"/assets/images/webp/hero-image.webp"}
          alt="hero-image"
          width={672}
          height={663}
          className="pointer-events-none object-cover w-[672px] h-[663px] max-xl:w-[500px] max-sm:w-[390px] max-sm:h-[448px] max-xl:h-[530px] max-xl:right-3 lg:absolute right-0 bottom-0 z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
