"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { ItemsList } from "@/utils/helper";

interface SellItemsProps {
  myMap: ItemsList[];
}

const CustomSwiper = ({ myMap }: SellItemsProps) => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1.5 },
          505: { slidesPerView: 2 },
          668: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        className="mySwiper"
      >
        {myMap.map((item: ItemsList, index: number) => (
          <SwiperSlide key={index}>
            <Link
              href={`/product/${item.title.toLowerCase().split(" ").join("-")}`}
              className="max-w-[295px] w-full rounded-[20px]"
            >
              <div className="bg-custom-gray overflow-hidden group rounded-[20px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={295}
                  height={298}
                  className="object-cover pointer-events-none"
                />
              </div>
              <p className="font-bold text-xl pt-4 max-lg:text-lg max-md:text-base max-md:pt-[10px] leading-[100%]">
                {item.title}
              </p>
              <span className="flex items-center py-[8.26px] max-md:py-[4.20px] gap-[13px]">
                <span>{item.stars}</span>
                <p className="text-sm max-md:text-xs font-normal leading-[100%]">
                  {item.productRating}/<span className="text-black/60">5</span>
                </p>
              </span>
              <span className="flex gap-2.5 max-md:gap-[5px] items-center">
                <p className="font-bold text-2xl max-md:text-xl leading-[100%]">
                  {item.sellingPrice}
                </p>
                {item.marketPrice && (
                  <span className="w-max relative">
                    <span className="absolute top-[56%] w-full h-[1px] max-md:text-xl"></span>
                    <p className="relative max-md:text-xl text-black/40 text-2xl font-bold">
                      {item.marketPrice}
                    </p>
                  </span>
                )}
                {item.discount && (
                  <span className="w-[58px] h-[28px] max-md:w-[42px] max-md:h-5 bg-custom-red/10 text-custom-red rounded-[62px] font-xs font-medium max-md:text-[10px] flex items-center justify-center">
                    {item.discount}%
                  </span>
                )}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
