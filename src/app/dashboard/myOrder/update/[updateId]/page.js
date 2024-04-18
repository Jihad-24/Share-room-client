"use client";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import useAuth from "../../../../../components/hooks/useAuth";
import useOrder from "../../../../../components/hooks/useOrder";
import SectionTitle from "../../../../../components/shared/SectionTitle";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import useApplication from "@/components/hooks/useApplication";

const UpdatePage = ({ params }) => {
  const { user } = useAuth();
  const axiosPublic = usePublicAxios();

  const [application] = useApplication();
  const router = useRouter()

  const productUpdate = application?.find((item) => item?._id === params?.updateId)
  // console.log(productUpdate);

  // console.log(params.id);

  const handleUpdateOrder = async (event) => {
    event.preventDefault();
    const form = event.target;
    const age = form.age.value;
    const address = form.address.value;
    const Rent = form.Rent.value;
    const Phone = form.Phone.value;
    const description = form.description.value;

    const updateOrder = {
      age,
      address,
      Rent,
      Phone,
      description
    };
    // console.log(updateOrder);
    const res = await axiosPublic.put(`/application/${params.updateId}`, updateOrder);
    // console.log(res.data);
    if (res.data.modifiedCount > 0) {
      toast.success("Product Update Successfully")
      router.push("/dashboard/myOrder")
    }
  };

  return (
    <div className="pt-44">
      <SectionTitle header={"Update your Order"} miniHeader={"Update"} />
      <div className="lg:w-3/4 mx-auto mt-10 bg-gray-200 p-10 rounded">
        <h2 className="text-center text-4xl">Update Order</h2>
        <form onSubmit={handleUpdateOrder} className="my-10">
          {/* form name and email row */}

          {/* name and email */}
          <div className="lg:gap-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-2 lg:px-5 ">
            <div className="lg:py-2 ">
              <span className="font-bold text-md">Name</span>
              <input
                className="w-full my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                type="name"
                required
                placeholder="Enter Your Name"
                name="name"
                defaultValue={productUpdate?.name}
                disabled
              />
            </div>
            <div className="lg:py-2 ">
              <span className=" font-bold text-md">Email</span>
              <input
                className="w-full my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                type="email"
                required
                placeholder="Enter Your email"
                name="email"
                defaultValue={productUpdate?.email}
                disabled
              />
            </div>
          </div>
          {/* phone and price */}
          <div className="lg:gap-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-2 lg:px-5 ">
            <div className="lg:py-2 ">
              <span className="font-bold text-md">Phone </span>
              <input
                className="w-full my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                type="text"
                name="Phone"
                defaultValue={productUpdate?.Phone}
              />
            </div>
            <div className="lg:py-2 ">
              <span className=" font-bold text-md">Rent</span>
              <input
                className="w-full my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                type="text"
                
                name="Rent"
                defaultValue={productUpdate?.Rent}
              />
            </div>
          </div>
          {/* Weight and time */}
          <div className="lg:gap-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-2 lg:px-5 ">
            <div className="lg:py-2 ">
              <span className="font-bold text-md">Address </span>
              <input
                className="w-full my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                type="text"
                required
                name="address"
                defaultValue={productUpdate?.address}
              />
            </div>
            <div className="lg:py-2 ">
              <span className=" font-bold text-md">Age</span>
              <input
                className="w-full my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                type="text"
                required
                name="age"
                defaultValue={productUpdate?.age}
              />
            </div>
          </div>
          <div className="mb-4 lg:px-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered focus:outline-none w-full h-40"
              name="description"
              placeholder="Description"
              defaultValue={productUpdate?.description}
            ></textarea>
          </div>
        </div>
          <div className="md:flex mb-5">
            <div className="form-control w-full ml-4">
              <label>
                <input
                  type="submit"
                  value="Update Order"
                  className="btn btn-block mt-4 text-white bg-blue-500"
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
