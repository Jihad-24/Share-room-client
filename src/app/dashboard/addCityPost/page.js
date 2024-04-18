"use client";
import useAuth from "@/components/hooks/useAuth";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import SectionTitle from "@/components/shared/SectionTitle";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const image_hosting_key = "140f2d0db1502e65c2c0ee7bfc66be98";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddCityPost = () => {
  const publicAxios = usePublicAxios();
  const [showName, setShowName] = useState({});
  const router = useRouter();
  const { user } = useAuth();
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

  const handleAddPost = async (event) => {
    event.preventDefault();
    const form = event.target;
    const author_name = user?.displayName;
    const author_image = user?.photoURL;
    const city_name = form.city_name.value;
    const category = form.category.value;
    const tag = form.tag.value;
    const description = form.description.value;
    const district_name = form.district_name.value;
    const post_date = currentDate;
    const email = user?.email;

    let image;

    const formData = new FormData();
    const singleImageFile = form.Image.files[0];
    formData.append("image", singleImageFile);

    try {
      const response = await axios.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      image = response.data.data.url;
    } catch (error) {
      console.error("Error uploading image:", error);

      return;
    }
    console.log(image);
    const postInfo = {
      email,
      author_name,
      author_image,
      city_name,
      district_name,
      post_date,
      description,
      image,
      tag,
      category
    };
    console.log(postInfo);

    // send data to the server
    const res = await publicAxios.post("/cityposts", postInfo)
    console.log(res.data);
    if (res.data.insertedId) {
      toast.success("Successfully Post here")
      router.push("/cityblog")
    }
  };

  return (
    <div className="py-8 bg-base-200 overflow-x-auto 2xl:h-screen 2xl:py-36">
      <SectionTitle
        header={"Add City Post"}
        miniHeader={"User any post added here"}
      ></SectionTitle>

      <div className="px-10">
        <form onSubmit={handleAddPost} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text ">
                City Name <span className="text-red-700">*</span>
                </span>
              </label>
              <input
                type="text"
                name="city_name"
                placeholder="Enter your City Name"
                className="input  input-bordered placeholder:text-xs"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text ">
                  District Name <span className="text-red-700">*</span>
                </span>
              </label>
              <input
                type="text"
                name="district_name"
                placeholder="Enter your District Name"
                className="input  input-bordered placeholder:text-xs"
              />
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text ">
                  Category <span className="text-red-700">*</span>
                </span>
              </label>
              <select
                defaultValue="default"
                name="category"
                className="select  select-bordered w-full"
              >
                <option disabled value="default">
                  Select a Tag
                </option>
                <option value="Air Cargo News">Air Cargo News</option>
                <option value="Distribution/Materials">
                  Distribution/Materials
                </option>
                <option value="Logistics Planner">Logistics Planner</option>
                <option value="Supply Chain Research">
                  Supply Chain Research
                </option>
                <option value="Transport Digest">Transport Digest</option>
                <option value="Worl Expert Insight">Worl Expert Insight</option>
              </select>
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text ">
                  Tags <span className="text-red-700">*</span>
                </span>
              </label>
              <select
                defaultValue="default"
                name="tag"
                className="select  select-bordered w-full"
              >
                <option disabled value="default">
                  Select a Tag
                </option>
                <option value="Logistics">Logistics</option>
                <option value="Electric">Electric</option>
                <option value="Heating">Heating</option>
                <option value="Ideas">Ideas</option>
                <option value="Interior">Interior</option>
                <option value="Repair">Repair</option>
              </select>
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
                : "Upload Your City Image"}
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
          <div className="form-control">
            <label className="label">
              <span className="label-text ">
                Post Description <span className="text-red-700">*</span>
              </span>
            </label>
            <textarea
              type="text"
              name="description"
              placeholder="Enter your Post Description"
              className="textarea textarea-bordered focus:outline-none w-full h-40"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value={"Add Post"}
              className="btn border-none text-white bg-blue-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCityPost;
