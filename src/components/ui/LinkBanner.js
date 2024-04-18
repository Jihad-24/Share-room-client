/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaArrowRight, FaBlog, FaHome, FaKey, FaServicestack, FaUserFriends, FaUserTag } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";

const LinkBanner = () => {
    const pathname = usePathname();
    const [hoveredService, setHoveredService] = useState(null);
    const handleMouseEnter = (serviceId) => {
        setHoveredService(serviceId);
    };

    const handleMouseLeave = () => {
        setHoveredService(null);
    };

    const services = [ {
        id: 1,
        name: "Share Your Room",
        logo: <FaUserFriends className="text-6xl text-blue-600" />,
        image: "https://i.ibb.co/q0gBmfj/customer-service.jpg",
        icon: <FaUserFriends className="text-6xl" />,
        description: "Unlock your space's potential by sharing with roommates. Earn while fostering a vibrant home community."
    },{
        id: 2,
        name: "Rent a Room",
        logo: <FaKey className="text-6xl text-blue-600" />,
        image: "https://i.ibb.co/ThgdJLy/linehul.jpg",
        icon: <FaKey className="text-6xl" />,
        description: "Find comfortable, affordable rooms in prime locations for hassle-free living with flexible rental options.           "
    },]
      
  return (
    <div className="">
      <div
        className="hero min-h-[800px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/f9FDs29/bn.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className=" text-center text-neutral-content">
           <div className="flex justify-evenly gap-20">
            <div className=" m-auto flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2  gap-4 lg:gap-7 p-2 xl:p-0">
                    {/* {services.map((service) => ( */}
                        <div
                            key={services[0]?.id}
                            className="w-[370px] lg:w-[300px] xl:w-[370px] h-[440px] bg-cover bg-center relative shadow-2xl bg-no-repeat"
                            style={{ backgroundImage: `url('${services[0]?.image}')` }}
                            onMouseEnter={() => handleMouseEnter(services[0]?.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="p-6">
                                {/* Show service details by default */}
                                <div className={`${hoveredService === services[0]?.id ? "" : "hidden"}`}>
                                    <div className="flex flex-col justify-center items-center  py-12  text-center bg-blue-600  w-full">
                                       <p> {services[0]?.icon}</p>
                                        <p className="text-2xl lg:text-lg xl:text-2xl font-bold">{services[0]?.name}</p>
                                    </div>
                                    <div className="py-8 lg:py-0 xl:py-8 bg-black px-4 text-center h-52">
                                        <p className="pb-4 lg:pb-1 xl:pb-4 text-justify overflow-hidden">{services[0]?.description}</p>
                                        <Link href={'/shareRoom'}>
                                            <button className="btn bg-black text-white rounded-none uppercase hover:bg-blue-600">
                                                Share Now <FaArrowRight />
                                            </button>
                                            </Link>
                                    </div>
                                </div>
                                {/* Image and name shown when not hovered */}
                                <div className={`${hoveredService === services[0]?.id ? "hidden" : ""}`}>
                                    <div className="bg-white h-[140px] translate-y-64">
                                        <div className="flex justify-center items-center text-center p-4">
                                            <div className="absolute p-6 bg-white rounded-full">
                                                <div className="w-16 rounded-full">
                                                    {typeof services[0]?.logo === "string" ? (
                                                        <Image
                                                            height={200}
                                                            width={200}
                                                            alt="img"
                                                            className="h-full w-full"
                                                            src={services[0]?.logo}
                                                        />
                                                    ) : (
                                                      services[0]?.logo
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-2xl font-bold pt-36 absolute text-gray-700">
                                                {services[0]?.name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            key={services[1]?.id}
                            className="w-[370px] lg:w-[300px] xl:w-[370px] h-[440px] bg-cover bg-center relative shadow-2xl bg-no-repeat"
                            style={{ backgroundImage: `url('${services[1]?.image}')` }}
                            onMouseEnter={() => handleMouseEnter(services[1]?.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="p-6">
                                {/* Show service details by default */}
                                <div className={`${hoveredService === services[1]?.id ? "" : "hidden"}`}>
                                    <div className="flex flex-col justify-center items-center  py-12  text-center bg-blue-600  w-full">
                                       <p> {services[1]?.icon}</p>
                                        <p className="text-2xl lg:text-lg xl:text-2xl font-bold">{services[1]?.name}</p>
                                    </div>
                                    <div className="py-8 lg:py-0 xl:py-8 bg-black px-4 text-center h-52">
                                        <p className="pb-4 lg:pb-1 xl:pb-4 text-justify overflow-hidden">{services[1]?.description}</p>
                                        <Link href={'/rentRoom'}>
                                            <button className="btn bg-black text-white rounded-none uppercase hover:bg-blue-600">
                                            Rent Now <FaArrowRight />
                                            </button>
                                            </Link>
                                    </div>
                                </div>
                                {/* Image and name shown when not hovered */}
                                <div className={`${hoveredService === services[1]?.id ? "hidden" : ""}`}>
                                    <div className="bg-white h-[140px] translate-y-64">
                                        <div className="flex justify-center items-center text-center p-4">
                                            <div className="absolute p-6 bg-white rounded-full">
                                                <div className="w-16 rounded-full">
                                                    {typeof services[1]?.logo === "string" ? (
                                                        <Image
                                                            height={200}
                                                            width={200}
                                                            alt="img"
                                                            className="h-full w-full"
                                                            src={services[1]?.logo}
                                                        />
                                                    ) : (
                                                      services[1]?.logo
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-2xl font-bold pt-36 absolute text-gray-700">
                                                {services[1]?.name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* ))} */}
                </div>
            </div>
            <div className="text-3xl flex items-center justify-center text-center">
            <ul className="list-disc">
          {" "}
          <li>
            <Link href="/">
              <span
                className={`nav-link ${
                  pathname === "/"
                    ? "active"
                    : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center ml-2 gap-2"
                }`}
              >
                <span className="mr-1">
                  <FaHome></FaHome>
                </span>
                Wellcome
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span
                className={`nav-link ${
                  pathname === "/about"
                    ? "active"
                    : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center mt-5 ml-2 gap-2"
                }`}
              >
                <span className="mr-1">
                  <FaUserTag></FaUserTag>
                </span>
                Safety
              </span>
            </Link>
          </li>
          <li>
            <Link href="/service">
              <span
                className={`nav-link ${
                  pathname === "/service"
                    ? "active"
                    : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center my-5 ml-2 gap-2"
                }`}
              >
                <span className="mr-1">
                  <FaServicestack></FaServicestack>
                </span>
                Adventure
              </span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <span
                className={`nav-link ${
                  pathname === "/blog"
                    ? "active"
                    : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center ml-2 gap-2"
                }`}
              >
                <span className="mr-1">
                  <FaBlog></FaBlog>
                </span>
                Community
              </span>
            </Link>
          </li>{" "}
        </ul>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default LinkBanner;
