"use client";
import LottieEffect from "@/components/shared/Lottie";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHome, FaJediOrder } from "react-icons/fa";
import { FaSignsPost } from "react-icons/fa6";
import { MdLogin, MdRateReview } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";
import logo from "../../../public/Logo (1).json";
import useAuth from "../../components/hooks/useAuth";
import "./Dashboard.css";

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();

  const pathname = usePathname();

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
    toast.success("Log out successfully");
  };

  const UserSidebarLinks = (
    <>
      <li>
        <Link href="/dashboard/myProfile">
          <span
            span
            className={`nav-link ${
              pathname === "/dashboard/myProfile"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <CgProfile></CgProfile>My Profile
          </span>
        </Link>
      </li>

      <li>
        <Link Link href="/dashboard/myOrder">
          <span
            className={`nav-link ${
              pathname === "/dashboard/myOrder"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <FaJediOrder></FaJediOrder>
            My Share Room
          </span>
        </Link>
      </li>
      <li>
        <Link Link href="/dashboard/myRents">
          <span
            className={`nav-link ${
              pathname === "/dashboard/myRents"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <FaJediOrder></FaJediOrder>
            My Renting Room
          </span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/review">
          <span
            className={`nav-link ${
              pathname === "/dashboard/review"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <MdRateReview></MdRateReview>
            Review
          </span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/addCityPost">
          <span
            className={`nav-link ${
              pathname === "/dashboard/addCityPost"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <FaSignsPost></FaSignsPost>
            Add City
          </span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/addBlogPost">
          <span
            className={`nav-link ${
              pathname === "/dashboard/addBlogPost"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <FaSignsPost></FaSignsPost>
            Add Blog
          </span>
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="bg-[#0D0D21] flex justify-between items-center py-3 px-5 lg:hidden">
            <label
              htmlFor="my-drawer-2"
              className="btn w-20 bg-[#0D0D21] border-none  text-white drawer-button lg:hidden"
            >
              <span className="text-2xl">
                <VscThreeBars></VscThreeBars>
              </span>
            </label>
            <Link
              href={"/"}
              className="btn btn-ghost normal-case items-center text-xs md:text-xl"
            >
              <span className="text-white">Quick Ship Room</span>
            </Link>
          </div>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-72 min-h-full text-white bg-[#0D0D21] flex justify-between">
            {/* Sidebar content here */}
            <div>
              <div>
                <Link
                  href={"/"}
                  className="flex flex-col space-x-2 font-bold mt-5 normal-case items-center text-xs md:text-xl"
                >
                  <span className="w-32">
                    <LottieEffect image={logo} />
                  </span>
                  <span className="text-blue-600 hover:text-white italic">
                    Quick Ship Room
                  </span>
                </Link>
              </div>
              <div className="divider"></div>
              <div>{UserSidebarLinks}</div>
            </div>
            <div>
              <li>
                <Link href="/">
                  <span
                    span
                    className={`nav-link ${
                      pathname === "/"
                        ? "active"
                        : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
                    }`}
                  >
                    <FaHome></FaHome>Home
                  </span>
                </Link>
              </li>
              <li className="">
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
                  >
                    <span>
                      <BiLogOut></BiLogOut>
                    </span>
                    Logout
                  </button>
                ) : (
                  <Link
                    className="rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
                    href={"/login"}
                  >
                    <span className="">
                      <MdLogin></MdLogin>
                    </span>
                    Login
                  </Link>
                )}
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
