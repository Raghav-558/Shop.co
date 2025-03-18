import { HEADER_LIST } from "@/utils/helper";
import { CartIcon, SearchIcon } from "@/utils/icons";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="py-6">
      <div className="max-w-[1272px] px-4 mx-auto">
        <div className="flex items-center gap-10">
          <Link
            href={"/"}
            className="font-intergal font-bold text-[32px] leading-[100%]"
          >
            SHOP.CO
          </Link>
          <div className="flex items-center gap-6">
            {HEADER_LIST.map((item, i) => (
              <Link
                href={item.link}
                key={i}
                className="text-base leading-[100%] whitespace-nowrap"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <form className="max-w-[615px] w-full rounded-[62px] bg-custom-gray">
            <label htmlFor="search" className="relative flex items-center">
              <div className="absolute left-3">
                <SearchIcon />
              </div>
              <input
                id="search"
                type="text"
                placeholder="Search for products"
                className="w-full text-black font-satoshi placeholder:text-opacity-40 focus:outline-none pl-[52px] py-3 rounded-[62px] pr-4 bg-custom-gray"
              />
            </label>
          </form>
          <CartIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
