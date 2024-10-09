import React from "react";
import banner from "../assets/s3.png";
import s10 from "../assets/s10.png";
import { Button } from "flowbite-react";
import Marquee from "react-fast-marquee";
import s6 from "../assets/s6.png";
import ServiceCard from "../utility/ServiceCard";

const OurServices = () => {

  const data = [
    {
      title: "Business Websites",
      description:
        "We craft stunning, high-performance websites that not only capture your brand’s essence but also provide a seamless user experience. From e-commerce platforms to corporate portals, we deliver websites designed to engage and convert.",
    },
    {
      title: "Mobile Apps",
      description:
        "Our intuitive mobile apps are built with the end-user in mind, offering sleek design, smooth navigation, and powerful functionality. Whether it’s iOS, Android, or cross-platform development, we ensure your mobile solution stands out.",
    },
    {
      title: "Desktop Apps",
      description:
        "We develop robust, custom desktop applications that streamline your operations and enhance productivity. Our solutions are tailored to optimize performance, security, and usability for your business.",
    },
    {
      title: "AI/ML Software",
      description:
        "We leverage AI and machine learning to create innovative, efficient solutions, ranging from automation and data analytics to predictive insights and custom AI tools, transforming how businesses operate and scale for future growth",
    },
  ];
  return (
    <div className="relative bg-customblue text-white ">
      <img src={s6} className="absolute w-full h-full mix-blend-overlay  " />

      {/* <p className="font-extrabold text-5xl text-center underline py-5">Why Choose US...</p> */}
      <p className="font-bold text-5xl text-center ">Our Services</p>
      <div className="flex flex-col xl:flex-row items-start justify-center gap-5 mx-20 py-10">
        {data.map((item,index) => (
            <ServiceCard item={item} index ={index} />
        ))}
      
      </div>
    </div>
  );
};

export default OurServices;
