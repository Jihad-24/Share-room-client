"use client"

import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {  FaArrowRight, FaShip, FaTruck } from "react-icons/fa";
import {   FaPeopleCarryBox, FaTrainSubway, } from "react-icons/fa6";
import { GiCargoCrate, GiCommercialAirplane } from "react-icons/gi";

const NewService = () => {

    const [hoveredService, setHoveredService] = useState(null);

    const services = [
        {
            id: 1,
            name: "Shared Apartments",
            logo: "https://i.ibb.co/JxmLR2z/Untitled-design.png",
            image: "https://i.ibb.co/rbW3FR9/Parcel-Delivery.jpg",
            icon: <FaTruck className="text-6xl" />,
            description: "Shared Apartments: Affordable housing where tenants share common areas, with private bedrooms."
        },
        {
            id: 2,
            name: "Roommate Matching",
            logo: "https://i.ibb.co/HNQjgCv/Untitled-design-1.png",
            image: "https://i.ibb.co/8gm5kJf/track.jpg",
            icon: <FaShip className="text-6xl" />,
            description: "Roommate Matching: Find compatible roommates to share expenses based on preferences and lifestyle."
            
        },
        {
            id: 3,
            name: "Co-Living Spaces",
            logo: <FaTrainSubway className="text-6xl text-blue-600" />,
            image: "https://i.ibb.co/q0gBmfj/customer-service.jpg",
            icon: <FaTrainSubway className="text-6xl" />,
            description: "Co-Living Spaces: Furnished accommodations fostering community with shared facilities and additional amenities.            "
        },
        {
            id: 4,
            name: "Short-Term Rentals",
            logo: <GiCargoCrate className="text-6xl text-blue-600" />,
            image: "https://i.ibb.co/ThgdJLy/linehul.jpg",
            icon: <GiCargoCrate className="text-6xl" />,
            description: "Short-Term Rentals: Flexible options for temporary housing, ranging from single rooms to entire houses.            "
        },
        {
            id: 5,
            name: "Student Housing",
            logo: <GiCommercialAirplane className="text-6xl text-blue-600" />,
            image: "https://i.ibb.co/xz0fxPY/load.jpg",
            icon: <GiCommercialAirplane className="text-6xl" />,
            description: "Student Housing: Tailored accommodations for students near universities, offering shared bedrooms and student amenities.            "
        },
        {
            id: 6,
            name: "Homestays",
            logo: <FaPeopleCarryBox className="text-6xl text-blue-600" />,
            image: "https://i.ibb.co/kHzWhfz/service.jpg",
            icon: <FaPeopleCarryBox className="text-6xl " />,
            description: "Homestays: Cultural exchange accommodations within a host family's home, with shared meals and activities.            "
        }
    ]
    

    const handleMouseEnter = (serviceId) => {
        setHoveredService(serviceId);
    };

    const handleMouseLeave = () => {
        setHoveredService(null);
    };

    return (
        <div className="bg-base-200">
            <SectionTitle header={"Our services"} miniHeader={"Our services"} />
            <div className=" m-auto flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 lg:gap-7 p-2 xl:p-0">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="w-[370px] lg:w-[300px] xl:w-[370px] h-[440px] bg-cover bg-center relative shadow-2xl bg-no-repeat"
                            style={{ backgroundImage: `url('${service.image}')` }}
                            onMouseEnter={() => handleMouseEnter(service.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="p-6">
                                {/* Show service details by default */}
                                <div className={`${hoveredService === service.id ? "" : "hidden"}`}>
                                    <div className="flex flex-col justify-center items-center  py-12  text-center bg-blue-600 text-white w-full">
                                        {service.icon}
                                        <p className="text-2xl lg:text-lg xl:text-2xl font-bold">{service.name}</p>
                                    </div>
                                    <div className="py-8 lg:py-0 xl:py-8 bg-white px-4 text-center h-52">
                                        <p className="pb-4 lg:pb-1 xl:pb-4 text-justify overflow-hidden">{service.description}</p>
                                        <Link href={`/service`}>
                                            <button className="btn bg-black text-white rounded-none uppercase hover:bg-blue-600">
                                                Learn More <FaArrowRight />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                {/* Image and name shown when not hovered */}
                                <div className={`${hoveredService === service.id ? "hidden" : ""}`}>
                                    <div className="bg-white h-[140px] translate-y-64">
                                        <div className="flex justify-center items-center text-center p-4">
                                            <div className="absolute p-6 bg-white rounded-full">
                                                <div className="w-16 rounded-full">
                                                    {typeof service.logo === "string" ? (
                                                        <Image
                                                            height={200}
                                                            width={200}
                                                            alt="img"
                                                            className="h-full w-full"
                                                            src={service.logo}
                                                        />
                                                    ) : (
                                                        service.logo
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-2xl font-bold pt-36 absolute">
                                                {service.name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewService;
