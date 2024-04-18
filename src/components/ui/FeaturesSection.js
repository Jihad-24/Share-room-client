/* eslint-disable react/no-unescaped-entities */
import Lottie from 'lottie-react';
import React from 'react';
import fast from '../../assets/fast-delivery.json';
import safety from '../../assets/safety.json';
import author from '../../assets/author.json';

const FeaturesSection = () => {
    return (
        <div>
            <div className="container mx-auto lg:px-20 px-5 py-20">
                {/* <SectionTitle heading={"our features"}></SectionTitle> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="card">
                        <figure>
                            <Lottie animationData={fast}></Lottie>
                        </figure>
                        <div className="items-center text-center h-80 overflow-y-auto">
                            <h2 className="font-bold text-2xl text-center mb-5">
                                Super Fast Delivery
                            </h2>
                            <p className="text-lg text-justify">
                                Experience lightning-fast parcel deliveries with our Super Fast
                                Delivery service at Fast Parcel. Our cutting-edge logistics
                                technology ensures swift and reliable shipments, offering express
                                options like same-day and overnight services. Our dedicated team
                                of experienced couriers prioritizes speed without compromising on
                                parcel safety. At Fast Parcel, we are committed to providing a
                                stress-free and expedited shipping experience, making us your
                                trusted partner for urgent deliveries.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <figure>
                            <Lottie animationData={safety}></Lottie>
                        </figure>
                        <div className="items-center text-center h-80 overflow-y-auto">
                            <h2 className="font-bold text-2xl text-center mb-5">Parcel Safety</h2>
                            <p className="text-lg text-justify">
                                Ensuring the safety of your parcels is our paramount concern at
                                Fast Parcel. We employ secure packaging techniques, using
                                high-quality materials to minimize the risk of damage during
                                transit. Real-time tracking keeps you informed about your parcel's
                                journey, offering transparency and reassurance. Our experienced
                                staff handles each parcel with precision and care, and for
                                additional peace of mind, we provide insurance options to cover
                                the value.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <figure>
                            <Lottie animationData={author}></Lottie>
                        </figure>
                        <div className="items-center text-center h-80 overflow-y-auto">
                            <h2 className="font-bold text-2xl text-center mb-5">Verify Author</h2>
                            <p className="text-lg text-justify">
                                To ensure secure access and protect sensitive information, we
                                prioritize robust authentication and authorization measures at
                                Fast Parcel. Our authentication protocols verify the
                                identity of users, employing multi-factor authentication for an
                                added layer of security. Authorization mechanisms control and
                                grant appropriate access levels, safeguarding confidential data.
                                Regular audits and monitoring further fortify our commitment to
                                verifying and maintaining authorization integrity.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;