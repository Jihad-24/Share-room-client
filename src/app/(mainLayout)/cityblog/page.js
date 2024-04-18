"use client";
import useCityPosts from "@/components/hooks/useCityPosts";
import useLatestCityPosts from "@/components/hooks/useLatestCityPosts";
import ScrollUp from "@/components/shared/Scroll/ScrollUp";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { GoTriangleRight } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import Post from "./Post";

const CityBlog = () => {
  const [posts] = useCityPosts();
  const [latestPosts] = useLatestCityPosts();
  console.log(posts);
  const [value, onChange] = useState(new Date());

  return (
    <div className="max-w-[2520px] grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mx-auto lg:px-20 md:px-10 sm:px-2 px-4 py-7 pt-28">
      <div className="lg:col-span-2 space-y-10">
        {posts?.map((post) => (
          <Post key={post._id} post={post}></Post>
        ))}
      </div>

      <div className="lg:col-span-1 bg-base-300 w-full mt-7 px-8 py-6 space-y-5 rounded-md">
        <div>
          <h2 className="py-5 text-2xl text-gray-600 font-bold">Search</h2>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered border-blue-400 w-full rounded-full h-11 placeholder:text-sm md:w-auto"
            />
            <button className="-ml-11 text-xl rounded-full p-3 hover:bg-blue-500">
              <IoSearchOutline></IoSearchOutline>
            </button>
          </div>
        </div>
        <div>
          <h2 className="py-5 text-2xl text-gray-600 font-bold">Category</h2>
          <div className="space-y-3">
            <div className="flex items-center text-justify text-sm">
              <p className="text-blue-600 text-lg">
                <GoTriangleRight></GoTriangleRight>
              </p>
              <p className="cursor-pointer text-gray-500 hover:text-blue-600">
                Air Cargo News
              </p>
            </div>

            <div className="flex items-center text-justify text-sm">
              <p className="text-blue-600 text-lg">
                <GoTriangleRight></GoTriangleRight>
              </p>
              <p className="cursor-pointer text-gray-500 hover:text-blue-600">
                Air Cargo News
              </p>
            </div>

            <div className="flex items-center text-justify text-sm">
              <p className="text-blue-600 text-lg">
                <GoTriangleRight></GoTriangleRight>
              </p>
              <p className="cursor-pointer text-gray-500 hover:text-blue-600">
                Distribution/Materials
              </p>
            </div>

            <div className="flex items-center text-justify text-sm">
              <p className="text-blue-600 text-lg">
                <GoTriangleRight></GoTriangleRight>
              </p>
              <p className="cursor-pointer text-gray-500 hover:text-blue-600">
                Logistics Planner
              </p>
            </div>

            <div className="flex items-center text-justify text-sm">
              <p className="text-blue-600 text-lg">
                <GoTriangleRight></GoTriangleRight>
              </p>
              <p className="cursor-pointer text-gray-500 hover:text-blue-600">
                Supply Chain Research
              </p>
            </div>

            <div className="flex items-center text-justify text-sm">
              <p className="text-blue-600 text-lg">
                <GoTriangleRight></GoTriangleRight>
              </p>
              <p className="cursor-pointer text-gray-500 hover:text-blue-600">
                Transport Digest
              </p>
            </div>

            <div className="flex items-center text-justify text-sm">
              <p className="text-blue-600 text-lg">
                <GoTriangleRight></GoTriangleRight>
              </p>
              <p className="cursor-pointer text-gray-500 hover:text-blue-600">
                Worl Expert Insight
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="py-5 text-2xl text-gray-600 font-bold">Calendar</h2>

          <Calendar
            className="p-3 shadow-lg"
            onChange={onChange}
            value={value}
          />
        </div>

        <div>
          <h2 className="py-5 text-2xl text-gray-600 font-bold">
            Latest Posts
          </h2>
          {latestPosts?.map((item) => (
            <div key={item?._id}>
              <div className="hero">
                <div className="hero-content">
                  <Image
                    className="rounded-sm w-24 h-14"
                    src={item?.image}
                    alt="images"
                    width={110}
                    height={110}
                  ></Image>
                  <div className="">
                    <p className="text-xs cursor-pointer text-justify hover:text-blue-600 font-bold">
                      {item?.title}
                    </p>
                    <p className="text-xs text-justify text-gray-400">
                      {item?.post_date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="py-5 text-2xl text-gray-600 font-bold">
            Popular Tags
          </h2>
          <div className="bg-white grid grid-cols-2 gap-4 p-4 rounded-sm">
            <Link
              href={`/blog`}
              className="bg-blue-100 hover:text-white hover:bg-orange-600 text-black font-bold py-3 w-full px-8 text-xs rounded-full"
            >
              Electric
            </Link>

            <Link
              href={`/blog`}
              className="bg-blue-100 hover:text-white hover:bg-orange-600 text-black font-bold py-3 w-full px-8 text-xs rounded-full"
            >
              Logistics
            </Link>

            <Link
              href={`/blog`}
              className="bg-blue-100 hover:text-white hover:bg-orange-600 text-black font-bold py-3 w-full px-8 text-xs rounded-full"
            >
              Heating
            </Link>

            <Link
              href={`/blog`}
              className="bg-blue-100 hover:text-white hover:bg-orange-600 text-black font-bold py-3 w-full px-8 text-xs rounded-full"
            >
              Ideas
            </Link>

            <Link
              href={`/blog`}
              className="bg-blue-100 hover:text-white hover:bg-orange-600 text-black font-bold py-3 w-full px-8 text-xs rounded-full"
            >
              Interior
            </Link>

            <Link
              href={`/blog`}
              className="bg-blue-100 hover:text-white hover:bg-orange-600 text-black font-bold py-3 w-full px-8 text-xs rounded-full"
            >
              Repair
            </Link>
          </div>
        </div>
      </div>
      <ScrollUp />
    </div>
  );
};

export default CityBlog;
