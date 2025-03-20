"use client";
import { MailIcon } from "@/utils/icons";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomButton from "../common/CustomButton";

const AboutUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState(false);

  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(true);
    if (userEmail.length > 0 && emailRegex.test(userEmail)) {
      setError(false);
      if (form.current) {
        emailjs
          .sendForm(
            "service_7hygphk",
            "template_mgzi6zc",
            form.current,
            "WQwoCN3QeNexwmXQ_"
          )
          .then(
            () => {
              toast.success("Email sent successfully!");
            },
            (error) => {
              toast.error("Failed to send email. Please try again.");
              console.error("FAILED...", error.text);
            }
          );
      }
      setUserEmail("");
    } 
  };

  return (
    <div>
      <div className="max-w-[1240px] mx-auto rounded-[20px] flex max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:gap-8 items-center justify-between bg-black container py-[43px] px-[64px] max-sm:px-6 max-sm:py-8 max-md:px-7 max-md:py-10 max-lg:px-8">
        <div className="max-w-[551px] max-lg:max-w-[unset]">
          <h3 className="text-white font-integral text-[40px] max-lg:text-4xl max-md:text-[32px] font-bold">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h3>
        </div>
        <form
          noValidate
          ref={form}
          onSubmit={sendEmail}
          className="max-w-[349px] flex flex-col gap-3.5 w-full"
        >
          <div>
            <div className="w-full flex items-center py-3 px-[17px] bg-white rounded-[62px]">
              <div className="flex w-full items-center gap-3.5">
                <label className="cursor-pointer" htmlFor="mail">
                  <MailIcon />
                </label>
                <div className="w-full">
                  <input
                    className="w-full text-black/40 outline-none leading-[100%]"
                    id="mail"
                    placeholder="Enter your email address"
                    type="email"
                    name="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {error && userEmail.length === 0 ? (
              <p className="text-red-500 text-base max-md:text-sm pt-1 pl-2">
                Enter an email address
              </p>
            ) : (
              error &&
              !emailRegex.test(userEmail) && (
                <p className="text-red-500 text-base max-md:text-sm pt-1 pl-2">
                  Enter a valid email address
                </p>
              )
            )}
          </div>

          <CustomButton
            text="Subscribe to Newsletter"
            myClass="bg-white font-medium leading-[100%] w-full py-3.5 hover:bg-black hover:text-white"
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AboutUs;
