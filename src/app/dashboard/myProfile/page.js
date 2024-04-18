"use client"
import { FaCommentDots, FaUserFriends } from "react-icons/fa";
import { SiTask } from "react-icons/si";
import useAuth from "../../../components/hooks/useAuth";
import Image from "next/image";
import useOrder from "../../../components/hooks/useOrder";

const MyProfile = () => {
  const { user } = useAuth()
  const [order] = useOrder()
  return (
    <div className="px-4 py-8 h-screen space-y-8">
      <h2 className="text-2xl font-bold">
        Hi, <span className="text-orange-700">{user?.displayName ? user?.displayName : "There"}</span> Welcome Back!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          className="flex justify-center items-center space-x-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-8 rounded-lg"
        >
          <span className="text-5xl">
            <SiTask></SiTask>
          </span>
          <div>
            <h2 className="text-2xl font-bold">{order?.length}</h2>
            <p className="text-lg font-bold">Orders</p>
          </div>
        </div>

        <div
          className="flex justify-center items-center space-x-5 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] px-8 py-8 rounded-lg"
        >
          <span className="text-5xl">
            <FaUserFriends></FaUserFriends>
          </span>
          <div>
            <h2 className="text-2xl font-bold">06</h2>
            <p className="text-lg font-bold">Users</p>
          </div>
        </div>

        <div
          className="flex justify-center items-center space-x-5 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] px-8 py-8 rounded-lg"
        >
          <span className="text-5xl">
            <FaCommentDots></FaCommentDots>
          </span>
          <div>
            <h2 className="text-2xl font-bold">10</h2>
            <p className="text-lg font-bold">Reviews</p>
          </div>
        </div>
      </div>

      <div
        className="lg:flex px-2 lg:flex-col lg:justify-center lg:items-center  rounded-2xl"
      >
        <div className="h-24 lg:w-2/3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        <div className=" h-52 lg:h-80 lg:w-2/3 flex flex-col justify-center items-center">
          <Image className="rounded-full lg:-mt-32" src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/SKhSR0W/avatardefault-92824.png"} width={60} height={20} alt="User Image"></Image>
          <div className="badge mt-2 badge-accent badge-outline">User</div>

          <div className="text-center pt-6 justify-center">
            <div className="space-y-2">
              <p className="font-bold">Name:</p>
              <p className="text-lg text-blue-600">{user?.displayName ? user?.displayName : "Name Not Found"}</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">Email:</p>
              <p className="text-lg text-blue-600">{user?.email ? user?.email : "Email Not Found"}</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">User Id:</p>
              <p className="text-lg text-blue-600">{user?.uid ? user?.uid : "Your Id Not found"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;