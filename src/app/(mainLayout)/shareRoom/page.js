/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRouter } from "next/navigation";
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../components/hooks/useAuth";
import usePublicAxios from "../../../components/hooks/usePublicAxios";
const image_hosting_key = "140f2d0db1502e65c2c0ee7bfc66be98";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const page = () => {
  const [showName, setShowName] = useState({});
  const axiosPublic = usePublicAxios();
  const router = useRouter();
  const { user } = useAuth();
  // const navigate = useNavigate();
  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;

    return formattedDate;
  }
  const currentDate = getCurrentDate();
  const handleApplied = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const age = form.age.value;
    const address = form.address.value;
    const Rent = form.Rent.value;
    const Phone = form.Phone.value;
    const Date = currentDate;
    const description = form.description.value;
    const image = user?.photoURL;

    let imageUrl;

    const formData = new FormData();
    const singleImageFile = form.Image.files[0];
    formData.append("image", singleImageFile);

    try {
      const response = await axios.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      imageUrl = response.data.data.url;
    } catch (error) {
      console.error("Error uploading image:", error);

      return;
    }
    console.log(imageUrl);
    const userInfo = {
      email,
      age,
      name,
      address,
      Rent,
      Date,
      description,
      imageUrl,
      image,
      Phone
    };
    console.log(userInfo);

    // send data to the server
    axiosPublic
      .post("/application", userInfo)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "You have successfully applied !",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          router.push("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };



  return (
    <div className="py-14 bg-gray-100 lg:px-0 px-5 pt-24 xl:py-36">
      <div className="pb-5">
        <h1 className="text-center text-2xl font-bold">Wanna Share a Room ?</h1>
        <p className="text-center font-medium text-blue-600">
          Please fill up the form !
        </p>
      </div>
      <form
        onSubmit={handleApplied}
        className="lg:w-3/4 mx-auto bg-white lg:p-10 p-5 py-5 rounded"
      >
        <div className="lg:flex gap-5 justify-center mb-4">
          <div className="form-control lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text font-bold">Full Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                className="input input-bordered focus:outline-none w-full"
                required
              />
            </label>
          </div>
          <div className="form-control lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text font-bold">Email </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered focus:outline-none w-full"
                disabled
              />
            </label>
          </div>
        </div>
        <div className="lg:flex gap-5 justify-center mb-4">
          <div className="form-control lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text font-bold">Your Age</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="age"
                placeholder="Your Age"
                className="input input-bordered focus:outline-none w-full"
                required
              />
            </label>
          </div>
          <div className="form-control lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text font-bold">Your Address</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="input input-bordered focus:outline-none w-full"
                required
              />
            </label>
          </div>
        </div>
        <div className="lg:flex gap-5 justify-center mb-4">
          <div className="form-control lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text font-bold">Phone Number</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="Phone"
                placeholder="Enter Your Number"
                className="input input-bordered focus:outline-none w-full"
                required
              />
            </label>
          </div>
          <div className="form-control lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text font-bold">Rent</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="Rent"
                placeholder="Rent"
                className="input input-bordered focus:outline-none w-full"
                required
              />
            </label>
          </div>
        </div>
        <div className="my-10 flex justify-center">
          <label
            className="flex h-full w-max items-end gap-4 rounded-md bg-cyan-500 px-6 py-4 text-white active:ring-4 active:ring-cyan-200"
            htmlFor="file"
          >
            <svg
              width={30}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Complete">
                  <g id="upload">
                    <g>
                      <path
                        d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7"
                        fill="none"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                      <g>
                        <polyline
                          data-name="Right"
                          fill="none"
                          id="Right-2"
                          points="7.9 6.7 12 2.7 16.1 6.7"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></polyline>
                        <line
                          fill="none"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          x1="12"
                          x2="12"
                          y1="16.3"
                          y2="4.8"
                        ></line>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <p className="text-lg font-medium">
              {" "}
              {showName.name
                ? showName.name
                : "Upload Your Apartment or Room Image"}
            </p>
          </label>
          <input
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const imageFile = e.target.files[0];
                setShowName(imageFile);
              }
            }}
            className="hidden"
            id="file"
            name="Image"
            type="file"
          />
        </div>
        <div className="mb-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered focus:outline-none w-full h-40"
              name="description"
              placeholder="Description"
            ></textarea>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-600 py-3 w-full font-bold text-white rounded"
          >
            Share Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
