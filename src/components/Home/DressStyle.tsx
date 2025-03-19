import Image from "next/image";
import React from "react";
import CustomHeading from "../common/CustomHeading";

const DressStyle = () => {
  return (
    <div className="px-4 pb-20 max-sm:pb-[50px]">
      <div className="max-w-[1240px] mx-auto rounded-[40px] pt-[70px] flex flex-col gap-5 pb-[76px] bg-custom-gray">
        <CustomHeading
          text="BROWSE BY dress STYLE"
          myClass="pb-[64px] text-center"
        />
        <div className="flex w-full gap-5">
          <div className="max-w-[407px] group cursor-pointer h-[289px] w-full overflow-hidden bg-white rounded-[20px] relative py-[25px] px-9">
            <p className="font-bold text-4xl relative z-20 leading-[100%]">
              Casual
            </p>
            <Image
              className="absolute right-0 group-hover:scale-105 transition-all duration-300 pointer-events-none top-0"
              src={"/assets/images/webp/casual.webp"}
              alt="casual-wear"
              width={275}
              height={298}
            />
          </div>
          <div className="max-w-[684px] group cursor-pointer h-[289px] w-full overflow-hidden bg-white rounded-[20px] relative py-[25px] px-9">
            <p className="font-bold text-4xl relative z-20 leading-[100%]">
              Formal
            </p>
            <Image
              className="absolute right-0 group-hover:scale-105 transition-all duration-300 pointer-events-none top-0"
              src={"/assets/images/webp/formal.webp"}
              alt="formal-wear"
              width={451}
              height={289}
            />
          </div>
        </div>
        <div className="flex w-full gap-5">
          <div className="max-w-[684px] group cursor-pointer h-[289px] w-full overflow-hidden bg-white rounded-[20px] relative py-[25px] px-9">
            <p className="font-bold text-4xl relative z-20 leading-[100%]">
              Party
            </p>
            <Image
              className="absolute right-0 group-hover:scale-105 transition-all duration-300 pointer-events-none top-0"
              src={"/assets/images/webp/party.webp"}
              alt="party-wear"
              width={488}
              height={289}
            />
          </div>
          <div className="max-w-[407px] cursor-pointer group h-[289px] w-full overflow-hidden bg-white rounded-[20px] relative py-[25px] px-9">
            <p className="font-bold text-4xl relative z-20 leading-[100%]">
              Gym
            </p>
            <Image
              className="absolute right-0 group-hover:scale-105 transition-all duration-300 pointer-events-none top-0"
              src={"/assets/images/webp/gym.webp"}
              alt="gym-wear"
              width={354}
              height={298}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
