"use client";
import { NEW_ARRIVALS_LIST } from "@/utils/helper";
import CustomSwiper from "../common/CustomSwiper";
import React from "react";
import CustomHeading from "../common/CustomHeading";
import CustomButton from "../common/CustomButton";

const NewArrivals = () => {
  return (
    <div className="pt-[72px] max-lg:pt-[50px]">
      <div className="max-w-[1272px] px-4 mx-auto ">
        <CustomHeading
          myClass="text-center pb-[55px] max-md:pb-8"
          text="NEW ARRIVALS"
        />
        <CustomSwiper myMap={NEW_ARRIVALS_LIST} />
        <div className="flex justify-center pt-9 max-md:pt-6 pb-12 max-lg:pb-10">
          <CustomButton
            text="View All"
            myClass="w-[218px] h-[52px] max-sm:w-full max-sm:text-sm max-sm:h-[46px] border border-black/10 text-black hover:bg-black hover:text-white hover:border-black"
          />
        </div>
      </div>
      <div className="border border-black/10"></div>
    </div>
  );
};

export default NewArrivals;
