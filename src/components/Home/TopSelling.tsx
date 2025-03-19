import React from "react";
import CustomHeading from "../common/CustomHeading";
import CustomButton from "../common/CustomButton";
import CustomSwiper from "../common/CustomSwiper";
import { TOP_SELLING_LIST } from "@/utils/helper";

const TopSelling = () => {
  return (
    <div className="pt-16 max-md:pt-10 pb-20 max-md:pb-[50px]">
      <div className="max-w-[1272px] px-4 mx-auto">
        <CustomHeading
          text="top selling"
          myClass="text-black text-center pb-[55px] max-md:pb-8"
        />
        <CustomSwiper myMap={TOP_SELLING_LIST} />
        <div className="flex justify-center pt-9 max-md:pt-6">
          <CustomButton
            text="View All"
            myClass="w-[218px] h-[52px] max-sm:w-full max-sm:text-sm max-sm:h-[46px] border border-black/10 text-black hover:bg-black hover:text-white hover:border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
