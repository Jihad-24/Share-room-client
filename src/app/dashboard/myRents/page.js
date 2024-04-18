"use client";
import useRnting from "@/components/hooks/useRnting";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import usePublicAxios from "../../../components/hooks/usePublicAxios";
import SectionTitle from "../../../components/shared/SectionTitle";

const MyRents = () => {
  const [application, refetch] = useRnting();
  const publicAxios = usePublicAxios();
  // console.log(application);
  const handleDelete = async (id) => {
    const res = await publicAxios.delete(`/renting/${id}`);
    if (res.data.deletedCount > 0) {
      toast.success("Product Delete Successfully");
      refetch();
    }
  };

  return (
    <div className="">
      <div className="py-8 px-5 ">
        <SectionTitle
          header={"My Renting history"}
          miniHeader={"All my order history here"}
        ></SectionTitle>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-white">
                <tr className="bg-blue-600">
                  <th>No</th>
                  <th>User name</th>
                  <th>Giving Rent</th>
                  <th>User Email Address</th>
                  <th>Renter Name</th>
                  <th>Renter Address</th>
                  <th>Renter Age</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {application?.length === 0 ? (
                <div class="flex w-full justify-center items-center h-screen">
                  <h2 class="text-2xl font-bold">No Order Here</h2>
                </div>
              ) : (
                <tbody>
                  {application?.map((item, index) => (
                    <tr className="border-b-gray-800" key={item._id}>
                      <th>{index + 1}</th>
                      <td>{item?.name}</td>
                      <td>${item?.Rent}</td>
                      <td>{item?.email}</td>
                      <td>{item?.RenterName}</td>
                      <td>{item?.Rentaddress}</td>
                      <td>{item?.age}</td>

                      <td>
                        <Link href={`/dashboard/myRents/update/${item?._id}`}>
                          <button className="text-green-600 text-lg btn border-none rounded-full  hover:bg-blue-200 btn-sm">
                            <FaEdit />
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(item?._id)}
                          className="text-red-600 btn text-lg border-none rounded-full  hover:bg-blue-200 btn-sm"
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRents;
