"use client";
import { useState } from "react";
import { FourHalfStarIcon, SelectIcon } from "@/utils/icons";
import { SELECT_COLOR_LIST, SELECT_SIZE_LIST } from "@/utils/helper";
import Description from "../common/Description";
import ImageShow from "./ImageShow";

const ProductOverview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div>
      <div className="max-w-[1272px] px-4 mx-auto">
        <div className="flex gap-10">
          <ImageShow />
          <div className="flex flex-col max-w-[600px] w-full">
            <p className="font-integral font-bold text-[40px] pb-3.5 max-sm:mb-3 leading-[100%]">
              One Life Graphic Tshirt
            </p>
            <div className="flex gap-4">
              <FourHalfStarIcon />
              <p className="text-sm">
                4.5/<span className="text-gray">5</span>
              </p>
            </div>
            <div className="flex items-center mt-3.5 gap-3">
              <p className="font-bold text-2xl leading-[100%]">$260</p>
              <span className="w-max relative">
                <span className="absolute top-[56%] w-full h-[1px] bg-bold-gray"></span>
                <p className="relative text-2xl font-bold text-black/30">
                  $300
                </p>
              </span>
              <span className="py-1.5 px-[13px] bg-custom-red/10 text-custom-red rounded-[62px] font-xs font-medium">
                -40%
              </span>
            </div>
            <Description
              myClass="text-black/60 mt-5"
              text="This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
            />
            <div className="max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
            <Description myClass="text-black/60" text="Select Colors" />
            <div className="flex gap-4 mt-4">
              {SELECT_COLOR_LIST.map((item, index) => (
                <button
                  key={index}
                  className={`size-7 cursor-pointer flex justify-center items-center rounded-full bg-dark-${item}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {index === activeIndex && <SelectIcon />}
                </button>
              ))}
            </div>
            <div className="max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
            <Description myClass="text-black/60" text="Select Colors" />
            <div className="flex gap-3 mt-4">
              {SELECT_SIZE_LIST.map((item, index) => (
                <button
                  onClick={() => setActiveButton(index)}
                  key={index}
                  className={`bg-custom-gray cursor-pointer py-3 px-6 rounded-[62px] ${
                    index === activeButton && "!bg-black text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
