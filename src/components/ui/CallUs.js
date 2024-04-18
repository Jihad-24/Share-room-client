"use client";

import React from "react";
import LottieEffect from "../shared/Lottie";
import LottieFile from "../../../public/bike.json";
import Lottie from "lottie-react";

const CallUs = () => {
  return (
    <div className="bg-base-200 pt-20">
      <div className="container mx-auto lg:px-20 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-center items-center">
            <div className="">
              <Lottie loop={true} animationData={LottieFile}/>
            </div>
          <div className="justify-center text-left space-y-5">
            <h2 className="text-xl lg:text-3xl font-bold">
              Do You Want A Fast <br /> Service? Just Call Us !
            </h2>
            <p className="text-lg ">
              Fast delivery refers to the swift transportation of goods or
              services from a seller to a buyer, typically within a significantly
              shorter time frame than standard delivery options. This expedited
              process is characterized by efficient logistics, streamlined
              operations, and often involves utilizing dedicated transportation
              services or prioritized shipping methods. Fast delivery is favored
              by consumers and businesses alike for its ability to meet urgent
              needs, enhance customer satisfaction, and facilitate timely
              transactions in various industries such as e-commerce, logistics,
              food delivery, and more.
            </p>
            <div>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button className="bg-blue-500 uppercase px-4 py-2 rounded font-bold text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Call Us</button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <h3 className="font-bold text-lg">Contact Us</h3>
                  <p className="py-4">+880123456789</p>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallUs;
