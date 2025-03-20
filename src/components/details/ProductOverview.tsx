"use client";
import { useState, useEffect } from "react";
import { PlusIcon, SelectIcon, SubtractIcon } from "@/utils/icons";
import {
  ALSO_LIKE_LIST,
  NEW_ARRIVALS_LIST,
  SELECT_COLOR,
  SELECT_SIZE,
  TOP_SELLING_LIST,
} from "@/utils/helper";
import { usePathname } from "next/navigation";
import ImageShow from "./ImageShow";

const ProductOverview = () => {
  const pathname = usePathname();
  const urlTitle = pathname
    .split("/")
    .pop()
    ?.toLowerCase()
    .replace(/\s+/g, "-");

  const products = [
    ...(NEW_ARRIVALS_LIST || []),
    ...(TOP_SELLING_LIST || []),
    ...(ALSO_LIKE_LIST || []),
  ];
  const product = products.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === urlTitle
  );

  const [activeColor, setActiveColor] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [buttonText, setButtonText] = useState("Add to Cart");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    setButtonText("Add to Cart");
  }, [activeColor, activeSize, quantity, product]);

  const handleAddToCart = () => {
    if (!product) return;
    if (buttonText === "Go to Cart") return;

    const selectedProduct = {
      title: product.title,
      price: product.sellingPrice,
      image: product.image,
      selectedColor: SELECT_COLOR[activeColor],
      selectedSize: SELECT_SIZE[activeSize],
      quantity,
    };

    const existingCart = [...cart];
    const existingProductIndex = existingCart.findIndex(
      (item) =>
        item.title === selectedProduct.title &&
        item.selectedColor === selectedProduct.selectedColor &&
        item.selectedSize === selectedProduct.selectedSize
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += quantity;
    } else {
      existingCart.push(selectedProduct);
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(existingCart));
    }
    setCart(existingCart);
    setButtonText("Go to Cart");
  };

  if (!product) {
    return <p className="text-center mt-10">Product not found!</p>;
  }

  return (
    <div className="max-w-[1240px] mx-auto container pt-[60px] md:pt-20 max-xl:px-4">
      <div className="flex gap-10 max-[1025px]:flex-col max-lg:items-stretch max-xl:items-center">
        <ImageShow product={product} />
        <div className="max-w-[600px] w-full flex flex-col">
          <p className="font-integral-cf font-bold text-2xl md:text-custom-4xl mb-3.5 leading-[100%]">
            {product.title}
          </p>
          <div className="flex gap-4">
            <span>{product.stars}</span>
            <p className="text-sm">
              {product.productRating}/<span className="text-gray">5</span>
            </p>
          </div>
          <div className="flex items-center mt-3 md:mt-3.5 gap-3">
            <p className="font-bold text-2xl leading-[100%]">
              ${product.sellingPrice}
            </p>
            <span className="w-max relative">
              <span className="absolute top-[56%] w-full h-[1px] bg-bold-gray"></span>
              <p className="relative text-black/30 text-2xl font-bold">
               ${product.marketPrice}
              </p>
            </span>
            {product.discount && (
              <span className="py-1.5 px-[13px] bg-custom-red/10 text-custom-red rounded-[62px] font-xs font-medium">
                {product.discount}%
              </span>
            )}
          </div>
          <div className="max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
          <p className="text-black/60">Select Colors</p>
          <div className="flex gap-4 mt-4">
            {SELECT_COLOR.map((color, index) => (
              <button
                key={index}
                className={`size-[38px] cursor-pointer flex justify-center items-center rounded-full ${color}`}
                onClick={() => setActiveColor(index)}
              >
                {index === activeColor && <SelectIcon />}
              </button>
            ))}
          </div>
          <div className="max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
          <p className="text-black/60">Choose Size</p>
          <div className="flex gap-3 mt-4">
            {SELECT_SIZE.map((size, index) => (
              <button
                key={index}
                className={`cursor-pointer bg-custom-gray py-3 px-5 rounded-[62px] ${
                  index === activeSize && "!bg-black text-white"
                }`}
                onClick={() => setActiveSize(index)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
          <div className="flex items-center gap-5">
            <div className="flex items-center bg-custom-gray justify-between rounded-[62px] py-3.5 px-5 w-full max-w-[110px] md:max-w-[170px] ">
              <button
                className="h-6"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <SubtractIcon />
              </button>
              <p className="font-medium">{quantity}</p>
              <button onClick={() => setQuantity(quantity + 1)}>
                <PlusIcon />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="py-3.5 w-full bg-black text-white rounded-full"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
