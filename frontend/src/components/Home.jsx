import React from "react";
import banner from "../assets/s3.png";
import bg3 from "../assets/bg3.png";
import { Button } from "flowbite-react";
import Marquee from "react-fast-marquee";
import s3 from "../assets/s3.png";
const Home = () => {
  return (
    <div className="relative bg-customblue text-white">
      <img src={s3} className="absolute w-full h-screen mix-blend-overlay " />
      <div className="flex flex-row justify-between items-center p-10 px-20 gap-40">
        <div className="flex flex-col items-start justify-center gap-5">
          <p className="font-extrabold text-5xl  ">
            Empowering Your Business with our innovative Software Solutions
          </p>
          {/* <img src={banner} className='absolute bg-opacity-0 h-[500px] w-full'/> */}
          <p className="font-medium text-xl ">
            We specialize in crafting unique and dynamic business websites,
            intuitive mobile apps, robust desktop applications, and cutting-edge
            AI/ML software solutions for B2B and B2C, designed to elevate your
            business.
          </p>
          <Button color="gray">Get Started</Button>
        </div>
        <img src={bg3} className="w-1/2 h-[400px]  " />
      </div>
      <div className="flex flex-col items-center justify-center px-40 ">
        <p className="font-extrabold text-4xl">Our Trusted Clients</p>
        <Marquee pauseOnClick pauseOnHover>
          <div className="flex flex-row gap-10 py-8 text-xl font-semibold">
            <p> VertexView Solutions</p>
            <p>The Skool.ai</p>
            <p>MOJO Clothing</p>
            <p>Kalai Travels</p>
            <p>Arputha Manna Magazines</p>
            <p>TalentXWorks</p>
            <p>EasyBill</p>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
