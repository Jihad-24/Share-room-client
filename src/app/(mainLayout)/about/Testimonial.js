"use client"
import SectionTitle from "@/components/shared/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import profileImg from "@/assets/avatar.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '@smastrom/react-rating/style.css'

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Image from "next/image";
import userReviews from "@/components/hooks/useReviews";
import { Rating } from "@smastrom/react-rating";
const Testimonial = () => {
    const [reviews] = userReviews()
    return (
        <div div className="md:px-6 pt-10" >
            <SectionTitle SectionTitle header={
                "Testimonials"
            }
                miniHeader={
                    "OUR CLIENTS SAY"
                }></SectionTitle>

            <div>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    // pagination={{
                    //   clickable: true,
                    // }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    autoplay={{ delay: 2000 }}
                    breakpoints={{
                        // when window width is >= 640px
                        375: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                    }}
                >
                    {
                        reviews?.map((item) => <SwiperSlide key={item?._id}>
                            <div>
                                <div className="bg-[#F7F6F2] rounded-md p-10 text-sm text-gray-700 text-justify">
                                    <p className=""> QuickShip, the epitome of efficiency in the realm of international courier services, stands as a beacon
                                        for swift and reliable parcel deliveries across borders.</p>
                                </div>

                                <div className="flex gap-5 px-2 pt-5">
                                    <div>
                                        {
                                            item?.userImage ? <Image className='rounded-full border-5 border-white w-16 h-16' src={item?.userImage} alt='images' width={100} height={100}></Image> : <Image className='rounded-full border-5 border-white w-16 h-16' src={profileImg} alt='images' width={100} height={100}></Image>
                                        }
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-gray-500 font-semibold text-md">{item?.userName}</p>

                                        <div>
                                            <Rating
                                                style={{ maxWidth: 100 }}
                                                value={item?.rating}
                                                readOnly
                                            />
                                        </div>
                                        <p className="text-sm text-justify text-gray-400">Customer</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </div>
    );
};

export default Testimonial;