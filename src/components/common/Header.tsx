"use client";
import React, { useEffect, useState } from "react";
import { HEADER_LIST } from "@/utils/helper";
import {
  CartIcon,
  DropDownArrow,
  SearchIcon,
  SearchIconBlack,
} from "@/utils/icons";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOverflow = () => {
      if (isOpen && window.innerWidth < 1024) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };
    handleOverflow();
    window.addEventListener("resize", handleOverflow);
    return () => {
      window.removeEventListener("resize", handleOverflow);
    };
  }, [isOpen]);

  return (
    <div className="py-6">
      <div className="max-w-[1272px] px-4 mx-auto">
        <div className="flex items-center gap-10 max-md:justify-between max-xl:gap-8 max-lg:gap-6">
          <div className="flex gap-4 items-center">
            <button
              className="md:hidden h-[15px] relative z-50 overflow-hidden w-[19px] flex flex-col justify-between"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`flex w-full h-0.5 rounded-3xl bg-black transition-all duration-300 ${
                  isOpen && "translate-x-10"
                }`}
              ></span>
              <span
                className={`flex w-full h-0.5 relative rounded-3xl bg-black transition-all duration-300 after:flex after:w-full after:h-0.5 after:rounded-3xl after:bg-black after:transition-all after:duration-300 top-0 left-0 ${
                  isOpen && "rotate-45 after:rotate-90"
                }`}
              ></span>
              <span
                className={`flex w-full h-0.5 rounded-3xl bg-black transition-all duration-300 ${
                  isOpen && "-translate-x-10"
                }`}
              ></span>
            </button>
            <Link
              href={"/"}
              className="text-[32px] font-bold leading-[100%] max-md:text-[25.2px] font-intergal"
              onClick={handleClose}
            >
              SHOP.CO
            </Link>
          </div>
          <div
            className={`flex gap-6 max-md:fixed max-md:flex-col transition-all duration-300 max-md:w-full max-md:h-full max-md:justify-center max-md:items-center max-md:top-0 max-md:-left-full max-md:bg-custom-gray max-md:z-40 ${
              isOpen && "max-md:left-0"
            }`}
          >
            {HEADER_LIST.map((item, i) => (
              <div key={i} className="relative group">
                <Link
                  href={item.link}
                  className="leading-[100%] whitespace-nowrap flex gap-1 items-center relative group"
                  onClick={handleClose}
                >
                  <span className="max-md:text-xl after:block after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                    {item.title}
                  </span>
                  {item.list && <DropDownArrow />}
                </Link>

                {item.list && (
                  <div className="absolute hidden group-hover:block bg-white shadow-md z-10">
                    <ul className="p-2">
                      {item.list.map((subItem, index) => (
                        <li
                          key={index}
                          className="py-1 px-4 hover:bg-gray-200 transition-all duration-300"
                        >
                          <Link
                            className="whitespace-nowrap"
                            href={subItem.link}
                            onClick={handleClose}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-10 md:w-full items-center max-sm:gap-3">
            <div className="max-w-[615px] max-md:hidden flex items-center rounded-[62px] w-full gap-3.5 py-3.5 px-[18px] bg-custom-gray">
              <label className="cursor-pointer" htmlFor="search">
                <SearchIcon />
              </label>
              <div className="w-full">
                <input
                  id="search"
                  placeholder="Search for products..."
                  className="w-full text-black/40 outline-none"
                />
              </div>
            </div>
            <div className="md:hidden">
              <SearchIconBlack />
            </div>
            <div>
              <Link href={"/cart"} onClick={handleClose}>
                <CartIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
