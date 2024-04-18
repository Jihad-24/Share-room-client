/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";


const OurServices = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto lg:px-20 px-5 py-16">
        <h1 className="text-center text-4xl font-bold mb-10">We provide services that <br></br> you can rely on</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <div className="w-full border">
            <div className="">
              <h2 className="card-title text-xl font-bold ">
                {" "}
                <Image className="w-full"
                  src="https://i.ibb.co/rbW3FR9/Parcel-Delivery.jpg"
                  width={200}
                  height={200}
                  alt="logo"
                />
                <br />
              </h2>
              <div className="text-xl font-semibold p-2">
              Shared <span className="text-[#ec3900] ">Apartments</span>{" "}
              </div>
              <p className="text-md text-justify p-2">
              Affordable housing where tenants share common areas, with private bedrooms.
              </p>
            </div>
          </div>
          <div className="w-full border">
            <div className="">
              <h2 className="card-title text-xl font-bold ">
                {" "}
                <Image className="w-full"
                  src="https://i.ibb.co/XsYP9sc/shipment.jpg"
                  width={200}
                  height={200}
                  alt="logo"
                />
                <br />
              </h2>
              <div className="text-xl font-semibold p-2">
              Roommate <span className="text-[#ec3900] ">Matching</span>{" "}
              </div>
              <p className="text-md text-justify p-2">
              Find compatible roommates to share expenses based on preferences and lifestyle.
              </p>
            </div>
          </div>
          <div className="w-full border">
            <div className="">
              <h2 className="card-title text-xl font-bold ">
                {" "}
                <Image className="w-full"
                  src="https://i.ibb.co/q0gBmfj/customer-service.jpg"
                  width={200}
                  height={200}
                  alt="logo"
                />
                <br />
              </h2>
              <div className="text-xl font-semibold p-2">
              Co-Living <span className="text-[#ec3900] ">Spaces</span>{" "}
              </div>
              <p className="text-md text-justify p-2">
              Furnished accommodations fostering community with shared facilities and additional amenities.
              </p>
            </div>
          </div>
          <div className="w-full border">
            <div className="">
              <h2 className="card-title text-xl font-bold ">
                {" "}
                <Image className="w-full"
                  src="https://i.ibb.co/ThgdJLy/linehul.jpg"
                  width={200}
                  height={200}
                  alt="logo"
                />
                <br />
              </h2>
              <div className="text-xl font-semibold p-2">
              Short-Term  <span className="text-[#ec3900] ">Rentals</span>{" "}
              </div>
              <p className="text-md text-justify p-2">
              Flexible options for temporary housing, ranging from single rooms to entire houses.
              </p>
            </div>
          </div>
          <div className="w-full border">
            <div className="">
              <h2 className="card-title text-xl font-bold ">
                {" "}
                <Image className="w-full"
                  src="https://i.ibb.co/xz0fxPY/load.jpg"
                  width={200}
                  height={200}
                  alt="logo"
                />
                <br />
              </h2>
              <div className="text-xl font-semibold p-2">
              Student <span className="text-[#ec3900] ">Housing</span>{" "}
              </div>
              <p className="text-md text-justify p-2">
              Tailored accommodations for students near universities, offering shared bedrooms and student amenities.
              </p>
            </div>
          </div>
          <div className="w-full border">
            <div className="">
              <h2 className="card-title text-xl font-bold ">
                {" "}
                <Image className="w-full"
                  src="https://i.ibb.co/kHzWhfz/service.jpg"
                  width={200}
                  height={200}
                  alt="logo"
                />
                <br />
              </h2>
              <div className="text-xl font-semibold p-2">
              Home<span className="text-[#ec3900] ">stays</span>{" "}
              </div>
              <p className="text-md text-justify p-2">
              Cultural exchange accommodations within a host family's home, with shared meals and activities. 
              </p>
            </div>
          </div>
          <div className="w-full border">
            <div className="">
              <h2 className="card-title text-xl font-bold ">
                {" "}
                <Image className="w-full"
                  src="https://i.ibb.co/8gm5kJf/track.jpg"
                  width={200}
                  height={200}
                  alt="logo"
                />
                <br />
              </h2>
              <div className="text-xl font-semibold p-2">
              Dormitory <span className="text-[#ec3900] ">Rentals</span>{" "}
              </div>
              <p className="text-md text-justify p-2">
              Dormitory rentals offer shared accommodations with communal facilities, ideal for students or budget-conscious travelers.
              </p>
            </div>
          </div>
          <div className="w-full border">
            <div className="">
              <h2 className="card-title text-xl font-bold ">
                {" "}
                <Image className="w-full"
                  src="https://i.ibb.co/BgxvmKY/warehouse.jpg"
                  width={200}
                  height={200}
                  alt="logo"
                />
                <br />
              </h2>
              <div className="text-xl font-semibold p-2">
              Extended <span className="text-[#ec3900] ">Stay Hotels</span>{" "}
              </div>
              <p className="text-md text-justify p-2">
              Extended stay hotels provide long-term accommodation options with hotel amenities and services for guests staying for weeks or months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;