"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { BiLogOut, BiSolidDashboard } from "react-icons/bi";
import { FaClipboardCheck, FaHome, FaServicestack, FaUserTag } from "react-icons/fa";
import { FaBlog } from "react-icons/fa6";
import { MdLogin } from "react-icons/md";
import logo from "../../../../public/Logo (1).json";
import avatar from "../../../assets/avatar.png";
import useAuth from "../../hooks/useAuth";
import LottieEffect from "../Lottie";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const links = (
    <>
      {!user && (
        <>
          <li>
            <Link href="/login">
              <button className="relative h-10 w-32 origin-top rounded-lg transform hover:before:rounded-lg border-2 border-sky-500 text-xl text-sky-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500">
                Login
              </button>
            </Link>
          </li>
          <li>
            <Link href="/signUp">
              <button className="relative h-10 w-32 origin-top rounded-lg transform hover:before:rounded-lg border-2 border-sky-500 text-xl text-sky-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500">
                Sign Up
              </button>
            </Link>
          </li>
        </>
      )}
      {user && (
        <>
          {" "}
          <li>
            <Link href="/">
              <span
                className={`nav-link ${
                  pathname === "/"
                    ? "active"
                    : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
                }`}
              >
                <span className="mr-1">
                  <FaHome></FaHome>
                </span>
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span
                className={`nav-link ${
                  pathname === "/about"
                    ? "active"
                    : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
                }`}
              >
                <span className="mr-1">
                  <FaUserTag></FaUserTag>
                </span>
                About Us
              </span>
            </Link>
          </li>
          <li>
            <Link href="/service">
              <span
                className={`nav-link ${
                  pathname === "/service"
                    ? "active"
                    : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
                }`}
              >
                <span className="mr-1">
                  <FaServicestack></FaServicestack>
                </span>
                Service
              </span>
            </Link>
          </li>
          <li>
            <Link href="/rentRoom">
              <span
                className={`nav-link ${
                  pathname === "/rentRoom"
                    ? "active"
                    : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
                }`}
              >
                <span className="mr-1">
                  <FaServicestack></FaServicestack>
                </span>
                Rent Room
              </span>
            </Link>
          </li>
          <li>
            <Link href="/cityblog">
              <span
                className={`nav-link ${
                  pathname === "/cityblog"
                    ? "active"
                    : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
                }`}
              >
                <span className="mr-1">
                  <FaBlog></FaBlog>
                </span>
                City Blog
              </span>
            </Link>
          </li>{" "}
          <li>
            <Link href="/blog">
              <span
                className={`nav-link ${
                  pathname === "/blog"
                    ? "active"
                    : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
                }`}
              >
                <span className="mr-1">
                  <FaBlog></FaBlog>
                </span>
                Blog
              </span>
            </Link>
          </li>{" "}
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
    toast.success("Log out successfully");
  };

  return (
    <div className="navbar bg-[#000C21] w-full h-20 fixed z-50 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {links}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center">
            <button className="w-40 justify-center items-center hidden sm:flex">
              <span>
                <LottieEffect image={logo} />
              </span>
            </button>
            <p className="font-serif font-semibold italic text-xl">
              <span className="text-blue-500 sm:-ml-10 ">Quick Ship Room</span>
            </p>
          </div>
        </div>
      </div>
      <div className="navbar-center 2xl:navbar-end gap-1 xl:gap-2 ml-20 md:ml-60 lg:ml-0">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal text-white px-1">{links}</ul>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <div className="avatar">
                  <div className="rounded-full border-[3px] border-blue-600">
                    <Image
                      alt="image"
                      src={user?.photoURL}
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              ) : (
                <Image src={avatar} height={50} width={50} alt="avatar"></Image>
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] py-1 xl:py-2  space-y-3 px-4 bg-[#202074] text-white shadow menu menu-sm dropdown-content hover:bg-[#010313] hover:text-blue-300   rounded-md w-60"
          >
            <h2
              data-aos="flip-up"
              className="text-xs text-purple-600 font-bold"
            >
              {user ? user?.displayName : "User Not Available"}
            </h2>
            <hr className="border-gray-600" />

            <Link className="hover:font-bold flex items-center" href={"/"}>
              <span className="mr-1">
                <FaHome></FaHome>
              </span>
              Home
            </Link>
            {user ? (
              <>
                <hr className="border-gray-600" />
                <Link
                  className="hover:font-bold flex items-center"
                  href={"/dashboard/myProfile"}
                >
                  <span className="mr-1">
                    <BiSolidDashboard></BiSolidDashboard>
                  </span>
                  Dashboard
                </Link>
              </>
            ) : (
              ""
            )}
            <hr className="border-gray-600" />
            {user ? (
              <button
                onClick={handleLogOut}
                className="hover:font-bold flex items-center text-left" /* to={"/login"} */
              >
                <span className="mr-1">
                  <BiLogOut></BiLogOut>
                </span>
                Logout
              </button>
            ) : (
              <Link
                className="hover:font-bold flex items-center"
                href={"/login"}
              >
                <span className="mr-1">
                  <MdLogin></MdLogin>
                </span>
                Login
              </Link>
            )}
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
