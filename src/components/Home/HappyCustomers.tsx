"use client";
import React, { useRef } from "react";
import CustomHeading from "../common/CustomHeading";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { HAPPY_CUSTOMERS_LIST } from "@/utils/helper";
import { NextArrowIcon, PreviousArrowIcon } from "@/utils/icons";

const HappyCustomer = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="py-20 max-md:py-[50px]">
      <div className="max-w-[1272px] px-4 mx-auto">
        <div className="flex items-center justify-between pb-10 max-md:pb-6">
          <CustomHeading
            myClass="!text-start"
            text="OUR HAPPY CUSTOMERS"
          />
          <div className="flex gap-4 pt-6.5 max-sm:pt-[44px]">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="cursor-pointer"
            >
              <PreviousArrowIcon />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-pointer"
            >
              <NextArrowIcon />
            </button>
          </div>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3.5 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay, Navigation]}
        >
          {HAPPY_CUSTOMERS_LIST.map((item, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <div className="bg-white border border-black/10 rounded-[20px] max-w-[400px] max-sm:h-[190px] py-7 px-8 ">
                <div className="flex items-center gap-2 mb-4">
                  {item.rating}
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-xl">{item.name}</p>
                  {item.icon}
                </div>
                <p className="text-black/60 leading-[22px] max-lg:text-sm max-lg:leading-5 max-xl:max-w-[336px] pt-3 max-lg:pt-2">
                  “{item.description}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HappyCustomer;
