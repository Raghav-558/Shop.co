import Image from "next/image";
import React, { useState } from "react";

const ImageShow = () => {
  const [selectedImage, setSelectedImage] = useState(
    "/assets/images/webp/one-life-first.webp"
  );

  return (
    <div className="flex gap-3.5">
      <div className="flex flex-col gap-3.5">
        <div
          className="cursor-pointer rounded-[20px] overflow-hidden"
          onClick={() =>
            setSelectedImage("/assets/images/webp/one-life-first.webp")
          }
        >
          <Image
            src="/assets/images/webp/one-life-first.webp"
            width={152}
            height={167}
            alt="Skinny Fit Jeans"
            className="w-[152px] h-[167px] object-cover bg-custom-gray"
          />
        </div>
        <div
          className="cursor-pointer rounded-[20px] overflow-hidden"
          onClick={() =>
            setSelectedImage("/assets/images/webp/one-life-second.webp")
          }
        >
          <Image
            src="/assets/images/webp/one-life-second.webp"
            width={152}
            height={167}
            alt="T-Shirt with Tape Details"
            className="w-[152px] h-[167px] object-cover bg-custom-gray"
          />
        </div>
        <div
          className="cursor-pointer rounded-[20px] overflow-hidden"
          onClick={() =>
            setSelectedImage("/assets/images/webp/one-life-third.webp")
          }
        >
          <Image
            src="/assets/images/webp/one-life-third.webp"
            width={152}
            height={167}
            alt="Vertical Striped Shirt"
            className="w-[152px] h-[167px] object-cover bg-custom-gray"
          />
        </div>
      </div>
      <div className="rounded-[20px] bg-custom-gray overflow-hidden">
        <Image
          src={selectedImage}
          width={444}
          height={530}
          alt="Selected Product"
          className="w-[444px] h-[530px] object-cover"
        />
      </div>
    </div>
  );
};

export default ImageShow;
