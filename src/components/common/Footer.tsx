import { FOOTER_LIST, PAYMENTS_COMPANY_LIST } from "@/utils/helper";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-custom-gray">
      <div className="max-w-[1272px] px-4 mx-auto">
        <div className="pt-[150px] pb-[50px] max-md:pb-6 flex items-start justify-between max-lg:flex-wrap">
          <div>
            <Link
              href="/"
              className="font-intergal font-bold text-[33.35px] leading-[100%]"
            >
              SHOP.CO
            </Link>
            <p className="text-black/60 leading-[22px] text-sm pt-[25px] max-lg:pt-4 max-w-[255px] max-xl:max-w-[220px] max-lg:max-w-none">
              We have clothes that suit your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex items-center gap-3 pt-[35px] max-lg:pt-5">
              <Link
                href="https://twitter.com"
                target="_blank"
                className="size-7 border border-black/20 bg-white rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 footer-icon"
              >
                <TwitterIcon />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="size-7 border border-black/20 bg-white rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 footer-icon"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="size-7 border border-black/20 bg-white rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 footer-icon"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="size-7 border border-black/20 bg-white rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 footer-icon"
              >
                <GithubIcon />
              </Link>
            </div>
          </div>
          {/* Footer Links Section */}
          <div className="flex items-center justify-between flex-wrap gap-[113px] max-xl:gap-18 max-md:gap-6 max-lg:pt-10">
            {FOOTER_LIST.map((item, i) => (
              <div key={i} className="">
                <p className="uppercase font-medium leading-[18px] max-md:text-sm">
                  {item.title}
                </p>
                <ul className="pt-[26px] max-md:pt-4">
                  {item.list.map((list, j) => (
                    <li key={j} className="pb-4">
                      <Link
                        href={list.link}
                        className="leading-[19px] text-black/60 whitespace-nowrap max-md:text-sm"
                      >
                        {list.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-black/10">
          <div className="pt-[25px] pb-22 max-md:pt-4 max-md:pb-[77px] flex items-center justify-between max-md:flex-col max-md:justify-center">
            <p className="text-sm leading-[100%] text-black/60">
              Shop.co © 2000-{new Date().getFullYear()}, All Rights Reserved
            </p>
            <div className="flex items-center gap-3 max-md:gap-[10.3px] max-md:pt-4">
              {PAYMENTS_COMPANY_LIST.map((item, i) => (
                <div key={i}>
                  <Image
                    width={46.61}
                    height={30.3}
                    alt="payment-company"
                    src={item.image}
                    className="pointer-events-none payment-company-images max-md:h-[26px] max-md:w-[40px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
