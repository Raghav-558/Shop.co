"use client";
import {
  DeleteIcon,
  PlusIcon,
  RoutingIcon,
  SubtractIcon,
} from "@/utils/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import OrderDetails from "./OrderDetails";

interface CartItem {
  id: string;
  title: string;
  image: string;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
  price: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);
  const handleRemoveItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const handleQuantityChange = (index: number, change: number) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += change;

    if (updatedCart[index].quantity < 1) {
      updatedCart[index].quantity = 1;
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="px-4 md:pb-20 pb-[50px]">
      <div className="max-w-[1240px] w-full mx-auto">
        <div className="border border-black/10"></div>
        <div className="flex gap-3 max-sm:gap-1.5 items-center py-6 max-lg:pt-5 max-lg:pb-2">
          <Link
            href={"/"}
            className="flex gap-1 max-md:text-sm text-black/60 items-center"
          >
            Home
            <span>
              <RoutingIcon />
            </span>
          </Link>
          <Link
            href={"/cart"}
            className="flex gap-1 max-md:text-sm text-black items-center"
          >
            Cart
          </Link>
        </div>
        <h1 className="max-md:text-3xl text-[40px] font-integral font-bold pb-6 max-lg:pb-5">
          Your Cart
        </h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex gap-5 max-lg:flex-col">
            <div className="w-full max-w-[715px]">
              <div className="w-full md:py-5 md:px-6 p-3.5 border border-solid border-black/10 rounded-[20px]">
                {cartItems.map((item, index) => (
                  <div
                    className={`flex gap-4 ${
                      cartItems.length > 1 && "md:pb-6 pb-4"
                    } ${
                      index === 0
                        ? ""
                        : "border-t border-solid border-black/10 pt-4 md:pt-6"
                    } ${index === cartItems.length - 1 && "!pb-0"}`}
                    key={index}
                  >
                    <div className="bg-custom-gray rounded-[8.66px] overflow-hidden">
                      <Image
                        src={item.image}
                        width={124}
                        height={124}
                        alt="product-image"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flex w-full justify-between">
                        <p className="md:text-xl font-bold leading-[100%]">
                          {item.title}
                        </p>
                        <button
                          className="cursor-pointer"
                          onClick={() => handleRemoveItem(index)}
                        >
                          <DeleteIcon />
                        </button>
                      </div>
                      <p className="text-xs md:text-sm leading-[100%] pt-0.5 text-black">
                        Size:
                        <span className="text-black/60">
                          {item.selectedSize}
                        </span>
                      </p>
                      <p className="text-xs md:text-sm leading-[100%] text-black pt-1">
                        Color:
                        <span className="text-black/60">
                          {item.selectedColor}
                        </span>
                      </p>
                      <div className="flex justify-between mt-1.5 items-baseline">
                        <p className="font-bold text-xl md:text-2xl leading-[100%]">
                          ${item.price * item.quantity}
                        </p>
                        <div className="flex justify-center h-[44px] max-w-[126px] max-md:h-[31px] max-md:w-[105px] w-full max-md:px-[15p] items-center gap-5 max-md:gap-2 bg-custom-gray rounded-[62px]">
                          <button
                            onClick={() => handleQuantityChange(index, -1)}
                            className="flex cursor-pointer"
                          >
                            <SubtractIcon />
                          </button>
                          <p className="font-medium min-w-5 leading-[100%]">
                            {item.quantity}
                          </p>
                          <button
                            onClick={() => handleQuantityChange(index, 1)}
                            className="flex cursor-pointer"
                          >
                            <PlusIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <OrderDetails
              total={cartItems.reduce(
                (sum, item) =>
                  sum +
                  item.price * item.quantity -
                  cartItems.reduce(
                    (sum, item) =>
                      sum + (item.price * item.quantity * 20) / 100,
                    0
                  ),
                0
              )}
              subtotal={cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              )}
              discount={cartItems.reduce(
                (sum, item) => sum + (item.price * item.quantity * 20) / 100,
                0
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
