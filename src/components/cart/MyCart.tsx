"use client";
import { DeleteIcon, PlusIcon, SubtractIcon } from "@/utils/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
    <div className="px-4 pb-20">
      <div className="max-w-[1240px] w-full mx-auto">
        <h1 className="text-custom-4xl font-integral-cf font-bold mb-4">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex gap-5">
            <div className="w-full max-w-[715px]">
              <div className="w-full py-5 px-6 border border-solid border-black/10 rounded-[20px]">
                {cartItems.map((item, index) => (
                  <div
                    className={`flex gap-4 ${cartItems.length > 1 && "pb-6"} ${
                      index === 0
                        ? ""
                        : "border-t border-solid border-black/10 pt-6"
                    } ${index === cartItems.length - 1 && "!pb-0"}`}
                    key={index}
                  >
                    <div className="bg-light-blue rounded-[8.66px] overflow-hidden">
                      <Image
                        src={item.image}
                        width={124}
                        height={124}
                        alt="product-image"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flex w-full justify-between">
                        <p className="text-xl font-bold leading-[100%]">
                          {" "}
                          {item.title}
                        </p>
                        <button
                          className="cursor-pointer"
                          onClick={() => handleRemoveItem(index)}
                        >
                          <DeleteIcon />
                        </button>
                      </div>
                      <p className="text-sm leading-[100%] text-black">
                        {" "}
                        Size:{" "}
                        <span className="text-gray mt-0.5">
                          {item.selectedSize}
                        </span>
                      </p>
                      <p className="text-sm leading-[100%] text-black">
                        {" "}
                        Color:{" "}
                        <span className="text-gray mt-1">
                          {item.selectedColor}
                        </span>
                      </p>
                      <div className="flex justify-between mt-1.5 items-baseline">
                        <p className="font-bold text-2xl leading-[100%]">
                          {" "}
                          ${item.price * item.quantity}
                        </p>
                        <div className="flex px-5 py-3 items-center gap-5 bg-light-blue rounded-[62px]">
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
