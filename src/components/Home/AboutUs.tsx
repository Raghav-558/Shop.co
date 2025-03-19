"use client";
import { MailIcon } from "@/utils/icons";
import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomButton from "../common/CustomButton";

interface FormValues {
  email: string;
}

const AboutUs: React.FC = () => {
  const [formValue, setFormValue] = useState<FormValues>({
    email: "",
  });

  const SERVICE_ID = "service_7hygphk";
  const TEMPLATE_ID ="template_mgzi6zc";
  const USER_ID ="WQwoCN3QeNexwmXQ_";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      email: formValue.email,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      toast.success("Submitted Successfully!");
      setFormValue({ email: "" });
    } catch (error: any) {
      toast.error("Submission Failed");
    }
  };

  return (
    <div className="px-4">
      <ToastContainer />
      <div className="max-w-[1240px] mx-auto flex items-center justify-between rounded-[20px] max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:gap-8 bg-black py-[43px] px-[64px] max-sm:px-6 max-sm:py-8 max-md:px-7 max-md:py-10 max-lg:px-8">
        <div className="max-w-[551px] max-lg:max-w-none">
          <h3 className="text-white font-integral font-bold text-[40px] max-lg:text-4xl max-md:text-[32px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-[349px] flex flex-col gap-3.5 w-full"
        >
          <div className=" flex items-center w-full py-3 px-[17px] bg-white rounded-[62px]">
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
                  value={formValue.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <CustomButton
            text="Subscribe to Newsletter"
            myClass="bg-white font-medium leading-[100%] w-full py-3.5 hover:bg-black hover:text-white "
          />
        </form>
      </div>
    </div>
  );
};

export default AboutUs;
