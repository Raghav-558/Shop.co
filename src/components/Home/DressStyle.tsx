import React from "react";
import Image from "next/image";
import CustomHeading from "../common/CustomHeading";

const DressStyle = () => {
  return (
    <div className="max-xl:px-4">
      <div className="max-w-[1240px] mx-auto bg-custom-gray rounded-[20px] lg:rounded-[40px] pt-10 pb-[27px] lg:pt-[70px] lg:pb-[76px] px-6 md:px-8 lg:px-16">
        <CustomHeading text="BROWSE BY dress STYLE" myClass="text-center" />
        <div className="flex flex-col gap-4 md:gap-5 md:pt-10 lg:pt-16 pt-6">
          <div className="flex max-md:flex-col w-full gap-4 md:gap-5">
            <div className="md:max-w-[407px] group cursor-pointer h-[190px] md:h-[220px] lg:h-[289px] w-full overflow-hidden bg-white rounded-[20px] relative md:py-[25px] md:px-9 px-6 py-4">
              <p className="font-bold text-2xl md:text-4xl relative z-20 leading-[100%]">
                Casual
              </p>
              <Image
                className="absolute right-0 group-hover:scale-105 transition-all duration-300 pointer-events-none top-0"
                src={"/assets/images/png/casual-dress.png"}
                width={407}
                height={289}
                alt="casual"
              />
            </div>
            <div className="max-w-[684px] group cursor-pointer h-[190px] md:h-[220px] lg:h-[289px] w-full overflow-hidden bg-white rounded-[20px] relative md:py-[25px] md:px-9 px-6 py-4">
              <p className="font-bold text-2xl md:text-4xl relative z-20 leading-[100%]">
                Formal
              </p>
              <Image
                className="absolute right-0 group-hover:scale-105 transition-all duration-300 pointer-events-none top-0 h-full object-cover"
                src={"/assets/images/png/formal-dress.png"}
                width={684}
                height={289}
                alt="formal"
              />
            </div>
          </div>
          <div className="flex max-md:flex-col w-full gap-4 md:gap-5">
            <div className="max-w-[684px] group cursor-pointer h-[190px] md:h-[220px] lg:h-[289px] w-full overflow-hidden bg-white rounded-[20px] relative md:py-[25px] md:px-9 px-6 py-4">
              <p className="font-bold text-2xl md:text-4xl relative z-20 leading-[100%]">
                Party
              </p>
              <Image
                className="absolute right-0 group-hover:scale-105 transition-all duration-300 pointer-events-none top-0 h-full object-cover"
                src={"/assets/images/png/party-dress.png"}
                width={684}
                height={289}
                alt="party"
              />
            </div>
            <div className="md:max-w-[407px] group cursor-pointer h-[190px] md:h-[220px] lg:h-[289px] w-full overflow-hidden bg-white rounded-[20px] relative md:py-[25px] md:px-9 px-6 py-4">
              <p className="font-bold text-2xl md:text-4xl relative z-20 leading-[100%]">
                Gym
              </p>
              <Image
                className="absolute right-0 group-hover:scale-105 transition-all duration-300 pointer-events-none top-0"
                src={"/assets/images/png/gym-dress.png"}
                width={407}
                height={289}
                alt="gym"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
