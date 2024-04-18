"use client"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import emailJs from '../../assets/emailJs.png';

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qy37urq",
        "template_jgak3f8",
        form.current,
        "hYHFNWwDDEM1kwFWE"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Email Sent Successfully",
            text: "We will get back to you soon!",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Error Sending Email",
            text: "Please try again later.",
          });
        }
      );
  };
  return (
    <section className="text-gray-500 bg-base-200 py-5 pb-10 lg:px-0 px-5">
      <div className="container mx-auto lg:px-20 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center lg:justify-start justify-center">
          <div className="lg:pt-0 pt-7">
            <h1 className="text-2xl font-bold text-blue-500 mb-10">
              Contact with Us
            </h1>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-blue-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Dhaka, Bangladesh.</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-blue-500"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+88012345678910</span>
              </p>

              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-blue-500"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>quickship@qship.com</span>
              </p>
            </div>
          </div>
          <div>
            <Image src={emailJs} alt="" height={400} width={400}></Image>
          </div>
        </div>
        <form
          className="flex flex-col space-y-4 md:py-0 mt-10"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="block">
            <span className="mb-1">Name</span>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="block w-full h-10 border-none focus:outline-none text-black bg-white pl-2"
            />
          </label>
          <label className="block">
            <span className="mb-1 ">Email</span>
            <input
              type="email"
              name="from_email"
              placeholder="example@email.com"
              className="block w-full h-10 border-none focus:outline-none text-black bg-white pl-2"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows="3"
              name="message"
              placeholder="write here..."
              className="block w-full textarea textarea-bordered border-none focus:outline-none bg-white text-black h-36 rounded-none"
            ></textarea>
          </label>
          <button
            type="submit"
            className="self-center px-8 text-lg focus:ring hover:ring focus:ri rounded-full text-white focus:ri hover:ri btn bg-blue-600"
          >
            Send Email
            <FaTelegramPlane className="text-2xl text-white" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
