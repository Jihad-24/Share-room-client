/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Calendar from "react-calendar";
import toast from "react-hot-toast";
import { FaBiking, FaRegAddressCard } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const Parcel = () => {
  const { user } = useAuth();
  const [value, onChange] = useState(new Date());
  const router = useRouter();

  const handleButtonClick = () => {
    if (!user) {
      router.push("/login");
    } else {
      toast.success(`You are Already an User ${user?.displayName}`);
    }
  };
  return (
    <div className="bg-base-200">
      <div className="card-body flex items-center justify-center px-0">
        <div>
          <h3 className="text-[#ec3900] text-center mb-4 mt-10 text-2xl font-bold">
            --- HOW DOES IT WORKS ---
          </h3>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:px-20 px-5">
          <div className="bg-white rounded shadow-xl  hover:shadow-2xl text-center">
            <h2 className="py-2 text-2xl text-gray-600 font-bold">Calendar</h2>
            <Calendar
              className={`p-3 shadow-lg  leading-10 `}
              onChange={onChange}
              value={value}
            />
          </div>
          <div className="bg-white rounded shadow-xl p-5 hover:shadow-2xl">
            <div className="text-center rounded-full">
              <div className="mb-4">
                <span className="flex justify-center items-center">
                  <FaBiking className="bg-white p-5 text-center text-8xl text-[#ec3900]"></FaBiking>
                </span>
              </div>
            </div>

            <h2 className="mb-4 text-center text-2xl font-bold">
              Search Your Destinations
            </h2>
            <p className="text-center text-gray-500 mb-2">
              Discover a diverse selection of accommodations tailored to your
              preferences in our destination search. Whether you're seeking a
              cozy apartment, a spacious house, or a charming loft, find the
              perfect room to make your stay unforgettable.
            </p>
          </div>
          <div className="bg-white rounded shadow-xl p-5 hover:shadow-2xl">
            <div className="text-center rounded-full">
              <div className="mb-4">
                <span className="flex justify-center items-center">
                  <FaRegAddressCard className="bg-white p-5 text-center text-8xl text-[#ec3900]"></FaRegAddressCard>
                </span>
              </div>
            </div>

            <h2 className="mb-4 text-center text-2xl font-bold">
              You Need to Create Profile
            </h2>
            <p className="text-center text-gray-500 mb-2">
              Profile is the most important subject for a website.
            </p>
            <div className=" block text-center">
              <button
                onClick={handleButtonClick}
                className="relative h-14 w-44 origin-top transform rounded-lg border-2 border-sky-500 text-xl text-sky-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500"
              >
                Create Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parcel;
