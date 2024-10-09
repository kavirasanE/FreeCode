import React from "react";
import banner from "../assets/s3.png";
import s12 from "../assets/s12.png";
import { Button } from "flowbite-react";
import Marquee from "react-fast-marquee";
import s20 from "../assets/s20.png";
import s from "../assets/s.png";
import ContactForm from "../utility/ContactForm";

const ContactUs = () => {
  const CurrentYear = new Date().getFullYear();
  return (
    <div className="relative bg-customblue text-white ">
      <img src={s20} className="absolute w-full h-full mix-blend-overlay " />
      <div className="flex flex-row  justify-between items-center py-20">
        <img src={s12} className=" h-[400px]  " />

        <div className="flex flex-col gap-5 w-full p-10  ">
          <p className="font-extrabold text-5xl text-center ">Contact Us.</p>

          <ContactForm />
        </div>
        <img src={s} className=" h-[400px] object-contain  " />
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <p className="text-xl font-semibold">
          {" "}
          Crated with 🤍 by Free Code.© {CurrentYear}
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
