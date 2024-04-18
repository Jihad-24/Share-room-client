/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import usePublicAxios from "../hooks/usePublicAxios";

const RentRoom = () => {
  const { user } = useAuth();
  const axiosPublic = usePublicAxios();
  const serviceRooms = [
    {
      id: 1,
      email: "example1@example.com",
      age: 25,
      name: "John Doe",
      address: "123 Main St, City",
      Rent: 500,
      Date: "2024-04-18",
      description:
        "Spacious room with amenities, perfect for comfortable living in the heart of the city.",
      imageUrl: "https://i.ibb.co/VxnHQzP/pexels-photo-439391.jpg",
      image: "https://i.ibb.co/QM9mfzB/avatar.png",
    },
    {
      id: 2,
      email: "example2@example.com",
      age: 30,
      name: "Alice Smith",
      address: "456 Elm St, Town",
      Rent: 600,
      Date: "2024-04-18",
      description:
        "Cozy and comfortable room in a quiet neighborhood, ideal for peaceful living and relaxation.",
      imageUrl: "https://i.ibb.co/VxnHQzP/pexels-photo-439391.jpg",
      image: "https://i.ibb.co/QM9mfzB/avatar.png",
    },
    {
      id: 3,
      email: "example3@example.com",
      age: 28,
      name: "Emily Johnson",
      address: "789 Oak St, Village",
      Rent: 550,
      Date: "2024-04-18",
      description:
        "Modern room with shared amenities, fostering a vibrant community living experience.",
      imageUrl: "https://i.ibb.co/VxnHQzP/pexels-photo-439391.jpg",
      image: "https://i.ibb.co/QM9mfzB/avatar.png",
    },
    {
      id: 4,
      email: "example4@example.com",
      age: 35,
      name: "Michael Brown",
      address: "321 Pine St, Suburb",
      Rent: 700,
      Date: "2024-04-18",
      description:
        "Sunny room with scenic views, offering a refreshing and rejuvenating living environment.",
      imageUrl: "https://i.ibb.co/VxnHQzP/pexels-photo-439391.jpg",
      image: "https://i.ibb.co/QM9mfzB/avatar.png",
    },
    {
      id: 5,
      email: "example5@example.com",
      age: 27,
      name: "Sarah Wilson",
      address: "987 Cedar St, Beach",
      Rent: 450,
      Date: "2024-04-18",
      description:
        "Budget-friendly room near amenities, ensuring convenience and affordability for comfortable living.",
      imageUrl: "https://i.ibb.co/VxnHQzP/pexels-photo-439391.jpg",
      image: "https://i.ibb.co/QM9mfzB/avatar.png",
    },
    {
      id: 6,
      email: "example6@example.com",
      age: 32,
      name: "David Lee",
      address: "654 Maple St, Beach",
      Rent: 750,
      Date: "2024-04-18",
      description:
        "Luxurious room with private balcony, offering an exclusive and indulgent living experience.",
      imageUrl: "https://i.ibb.co/VxnHQzP/pexels-photo-439391.jpg",
      image: "https://i.ibb.co/QM9mfzB/avatar.png",
    },
    {
      id: 7,
      email: "example7@example.com",
      age: 29,
      name: "Jessica Taylor",
      address: "852 Birch St, Valley",
      Rent: 600,
      Date: "2024-04-18",
      description:
        "Quaint room with rustic charm, providing a cozy and inviting atmosphere for comfortable living.",
      imageUrl: "https://i.ibb.co/VxnHQzP/pexels-photo-439391.jpg",
      image: "https://i.ibb.co/QM9mfzB/avatar.png",
    },
    {
      id: 8,
      email: "example8@example.com",
      age: 26,
      name: "Daniel Martinez",
      address: "147 Walnut St, Valley",
      Rent: 500,
      Date: "2024-04-18",
      description:
        "Minimalist room with modern design, offering simplicity and elegance for stylish living.",
      imageUrl: "https://i.ibb.co/VxnHQzP/pexels-photo-439391.jpg",
      image: "https://i.ibb.co/QM9mfzB/avatar.png",
    },
  ];
  const handleRent = async (item) => {
    // console.log(item);
    const email = user?.email;
    const name = user?.displayName;
    const image = user?.photoURL;
    const Rent = item?.Rent;
    const RenterName = item?.name;
    const age = item?.age;
    const Rentaddress = item?.address;
    const RentData = { email, name, image, Rent, RenterName, Rentaddress,age };
    // console.log(RentData);
    // send data to the server
    axiosPublic
      .post("/renting", RentData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "You have successfully applied !",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="bg-base-200">
      <div className="container mx-auto lg:px-20 px-5 py-16">
        <h1 className="text-center text-4xl font-bold mb-10">
          We provide Renting services that <br></br> you can rely on
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {serviceRooms?.map((room) => (
            <div key={room.id} className="w-full border">
              <div className="">
                <h2 className="card-title text-xl font-bold ">
                  {" "}
                  <Image
                    className="w-full"
                    src={room.imageUrl}
                    width={200}
                    height={200}
                    alt="logo"
                  />
                  <br />
                </h2>
                <div className="text-xl font-semibold p-2">
                  Address: {room.address}
                </div>
                <div className="text-xl font-semibold p-2 flex justify-between">
                  <p>
                    Rent: <span className="text-[#ec3900] "> {room.Rent}$</span>{" "}
                  </p>{" "}
                  <p>Age: {room.age}</p>
                </div>
                <p className="text-md text-justify p-2">{room.description}</p>
              </div>

              <div className="flex items-center w-full">
                <button
                  onClick={() => handleRent(room)}
                  className="btn bg-black text-white rounded-none uppercase hover:bg-blue-600 w-full"
                >
                  Rent Now <FaArrowRight />
                </button>
              </div>
              <div className="flex ml-5 items-center">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <div className="avatar">
                      <div className="rounded-full border-[3px] border-blue-600">
                        <Image
                          alt="image"
                          src={room.image}
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={"https://i.ibb.co/QM9mfzB/avatar.png"}
                      height={50}
                      width={50}
                      alt="avatar"
                    ></Image>
                  )}
                </div>
                <div className="flex flex-col">
                  <div className="text-xl font-semibold pt-2 px-2">
                    {room.name
                      .split(" ")
                      .slice(0, room.name.split(" ").length / 2)}{" "}
                    <span className="text-[#ec3900] ">
                      {room.name
                        .split(" ")
                        .slice(room.name.split(" ").length / 2)}
                    </span>{" "}
                  </div>

                  <div className="text-sm font-semibold pb-2 px-2">
                    Published: {room.Date}
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

export default RentRoom;
