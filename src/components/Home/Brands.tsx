import { BRANDS_LIST } from "@/utils/helper";
import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <div className="bg-black py-[43px] max-md:py-10">
      <div className="max-w-[1272px] px-4 mx-auto">
        <div className="flex items-center justify-center gap-[106px] max-xl:gap-16 max-lg:gap-12 max-md:gap-5 max-lg:flex-wrap">
          {BRANDS_LIST.map((item, i) => (
            <div key={i}>
              <Image
                src={item.image}
                alt="brands-name"
                width={166}
                height={33.16}
                className={` ${
                  i === 0
                    ? "h-[33.16px] w-[166.48px] max-md:w-[116.74px] max-md:h-[23px]"
                    : i === 1
                    ? "h-[38px] w-[91px]  max-md:w-[63.81px] max-md:h-[26px]"
                    : i === 2
                    ? "h-[36px] w-[156px]  max-md:w-[109.39px] max-md:h-[22.64px]"
                    : i === 3
                    ? "h-8 w-[194px]  max-md:w-[127px] max-md:h-[21px]"
                    : "h-[33.35px] w-[206.80px]  max-md:w-[134.84px] max-md:h-[21.75px]"
                } mx-auto pointer-events-none`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
