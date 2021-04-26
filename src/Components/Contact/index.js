import React, { useEffect, useState } from "react";
import { Skeleton } from "@material-ui/lab";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  customerContactUs,
  getGoogleMyBusinessLocations,
} from "../../api/ContactUs";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Contact() {
  const { register, handleSubmit, errors, reset } = useForm();
  const [openingHours, setOpeningHours] = useState([]);
  const { loading } = useSelector((state) => state.loadingReducer);

  const contactUs = async (data) => {
    try {
      await customerContactUs(data);
      reset();
      toast.success("Your query has been submitted successfully!");
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    const fetchGMBLocations = async () => {
      try {
        const res = await getGoogleMyBusinessLocations();
        setOpeningHours(res?.data?.data?.regularHours?.periods);
      } catch (error) {
        console.log({ error });
      }
    };
    fetchGMBLocations();
  }, []);

  return (
    <div>
      <Navbar
        name={"Contact us"}
        bg={
          "https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
        }
      />
      <div className="w-full d-flex justify-content-center  divide-x divide-gold  py-5  px-6 mt-4 mb-2 lg:mt-0">
        <div className="ml-4 text-center p-4 py-2">
          {" "}
          <h2 className="title-font font-medium  text-gray-900 tracking-widest text-sm">
            EMAIL
          </h2>
          <a className="text-indigo-500 leading-relaxed">example@email.com</a>
        </div>
        <div className=" text-center p-4 py-2">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm text-center ">
            PHONE
          </h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
        <div className="mr-4 text-center p-4 py-2">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm ">
            ADDRESS
          </h2>
          <p className="leading-relaxed">Via Mario rossi 15 Milano</p>
        </div>
      </div>
      <section className="text-gray-700 body-font d-flex justify-content-center w-full  ">
        <div className=" w-2/3 flex  px-18 py-4  justify-content-center ">
          <div className="flex-grow-1 w-7/12   sm:mr-10 p-10 bg-gray-100 mr-0  ">
            <div className="  py-4 mx-auto w-full">
              <div className="flex flex-col text-left w-full mb-4">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Opening Hours
                </h1>
                <div className=" w-full p-1 divide-y divide-dashed divide-gray-300 ">
                  {!openingHours &&
                    [1, 2, 3, 4, 5].map(() => (
                      <Skeleton
                        variant="rect"
                        height={55}
                        style={{
                          borderBottom: "2px dashed",
                          marginTop: "10px",
                        }}
                      />
                    ))}
                  {openingHours.length ? (
                    openingHours.map((item, index) => (
                      <div
                        className=" d-flex justify-content-around pt-2"
                        key={index}
                      >
                        <p className=" font-weight-bold flex-grow-1 text-xs">
                          {item?.openDay}
                        </p>
                        <p className="text-xs">
                          {item?.openTime} - {item?.closeTime}
                        </p>
                      </div>
                    ))
                  ) : (
                    <span>No items</span>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex-grow-1 w-full">
              <iframe
                width="100%"
                height="100%"
                className=" w-full h-full h-100"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
          <div className=" pt-8 md:w-5/12 text-left p-4 bg-gray-700 flex flex-col md:ml-auto w-5/12  ml-0 md:py-8 mt-8 md:mt-0">
            <form onSubmit={handleSubmit(contactUs)}>
              <div className="relative mb-2 mt-8">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your Name"
                  className="w-full text-xs bg-white  border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ref={register({
                    required: "Name required",
                  })}
                  error={errors?.name ? true : false}
                />
                <p
                  className="text-xs"
                  style={{ color: "red", marginTop: "2px" }}
                >
                  {errors?.name?.message}
                </p>
              </div>
              <div className="relative mb-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full bg-white  border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ref={register({
                    required: "Email required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={errors?.email ? true : false}
                />
                <p
                  className="text-xs"
                  style={{ color: "red", marginTop: "2px" }}
                >
                  {errors?.email?.message}
                </p>
              </div>
              <div className="relative mb-4" placeholder="Message">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="w-full bg-white  border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ref={register({
                    required: "Message required",
                  })}
                  error={errors?.message ? true : false}
                ></textarea>
                <p
                  className="text-xs"
                  style={{ color: "red", marginTop: "2px" }}
                >
                  {errors?.message?.message}
                </p>
              </div>
              <button
                type="submit"
                className="  text-white bg-black rounded-pill border-0 py-2 px-6 focus:outline-none w-1/3  rounded text-lg"
                disabled={loading}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer bg={"white"} />
    </div>
  );
}
export default Contact;
