import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="text-white dancing-script-500 max-w-7xl mx-auto p-6 lg:px-8"
    >
      <h1
        className="text-[56px] min-[400px]:text-7xl font-extrabold mb-10 min-[400px]:mb-16"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        Contact <span className="text-[#63e]">Me</span>
      </h1>
      <div className="grid md:grid-cols-2 contact-box">
        <div className="">
          <div
            className="flex mb-8"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <div className="mr-4">
              <a href="https://goo.gl/maps/uJgEGGM9LhpiCjXu9" target="_blank">
                <i className="fa-solid fa-map-location-dot fa-2x rounded-[100%] p-5 bg-white text-[#63e]"></i>
              </a>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-[#63e]">Address</h4>
              <p>0-49, Back Side Chanakya Place-2, New Delhi-110059</p>
            </div>
          </div>
          <div
            className="flex mb-8"
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            <div className="mr-4">
              <i className="fa-solid fa-phone-volume fa-2x rounded-[100%] p-5 bg-white text-[#63e]"></i>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-[#63e]">Phone</h4>
              <p>8800139664</p>
            </div>
          </div>
          <div
            className="flex mb-8"
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="400"
          >
            <div className="mr-4">
              <i className="fa-solid fa-envelope fa-2x rounded-[100%] p-5 bg-white text-[#63e]"></i>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-[#63e]">Email</h4>
              <p>
                aniketkumar2025it@
                <br className="min-[375px]:hidden" />
                gmail.com
              </p>
            </div>
          </div>
        </div>
        <div
          className="p-6 min-[400px]:p-10 rounded-[20px] bg-white w-[100%]"
          data-aos="zoom-in"
          data-aos-duration="700"
        >
          <form
            action="mailto:aniketrocks2468@gmail.com"
            method="post"
            enctype="text/plain"
          >
            <h2 className="text-[40px] font-extrabold text-[#63e]">Write us</h2>
            <div className="inputbox">
              <input type="text" name="Name" id="" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputbox">
              <input type="email" name="Email" id="" required="required" />
              <span>Email</span>
            </div>
            <div className="inputbox">
              <input type="number" name="Mobile" id="" required="required" />
              <span>Mobile number</span>
            </div>
            <div className="inputbox">
              <textarea
                name="Message"
                id="textarea"
                cols="30"
                rows="4"
                required="required"
              ></textarea>
              <span>Your Message</span>
            </div>
            <div className="mt-6">
              <input type="submit" value="Send" className="py-1" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
