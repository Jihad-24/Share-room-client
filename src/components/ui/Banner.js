/* eslint-disable react/no-unescaped-entities */
"use client";

const Banner = () => {
  return (
    <div className=" pt-20">
      <div
        className="hero min-h-[800px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/f9FDs29/bn.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className=" text-center text-neutral-content">
            <div className="text-center lg:text-left space-y-6 w-2/3 mx-auto">
            <h1 className="text-3xl lg:text-7xl font-bold ">
    Your Trusted Accommodation Partner
    Every Step of the Way
</h1>
<p className="pr-16 text-center">
At Quick Share Room, we pride ourselves on being your go-to destination for reliable shared accommodations. With our platform, you can expect nothing less than exceptional service, ensuring smooth and hassle-free housing experiences tailored to your needs. Whether you're searching for a cozy shared apartment, a compatible roommate, or a vibrant co-living space, we're here to guide you every step of the way, making your housing journey as seamless and enjoyable as possible. Join us at ShareSpace today and embark on a journey to find your perfect home away from home!

</p>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
