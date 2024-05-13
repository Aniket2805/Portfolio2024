import React from "react";
import Fashion from "./files/fashion.jpg";
import Flixpedia from "./files/flixpedia.jpg";
import VideoVerse from "./files/videoverse.jpg";
import Ecommerce from "./files/ecommerse.jpg";
import { FaCode } from "react-icons/fa6";
const Projects = () => {
  return (
    <div
      id="projects"
      className="text-white dancing-script-500 max-w-7xl mx-auto p-6 lg:px-8"
    >
      <h1
        className="text-5xl min-[400px]:text-7xl font-extrabold mb-10 min-[400px]:mb-16"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <span className="text-[#63e]">P</span>rojects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-14">
        <div
          className="data rounded-2xl relative overflow-hidden shadow-[-10px_-10px_0px_rgb(242,242,242)] sm:shadow-[-20px_-20px_0px_rgb(242,242,242)]"
          data-aos="zoom-in"
          data-aos-duration="700"
        >
          <img
            src={Ecommerce}
            className="rounded-2xl block transition-transform duration-200"
          />
          <div className="projectinfo px-2 min-[400px]:px-4 md:px-10">
            <h3 className="text-base md:text-xl lg:text-2xl mb-2 md:mb-3 lg:mb-5 text-yellow-300">
              Ecommerce Web App
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-2 md:mb-3 lg:mb-5">
              ShopSwift is your one-stop e-commerce destination, offering a
              seamless shopping experience with a swift delivery promise.
            </p>
            <div className="flex">
              <a href="https://github.com/Aniket2805/ShopSwift" target="_blank">
                <i className="fa-solid fa-code rounded-[100%] mr-3 p-3 lg:px-[19px] lg:py-5 text-lg lg:text-xl bg-white text-[#63e]"></i>
              </a>
              <a href="https://shopswift2024.netlify.app/" target="_blank">
                <i className="fa-solid fa-arrow-up-right-from-square rounded-full p-3 lg:p-5 text-lg lg:text-xl bg-white text-[#63e]"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          className="data rounded-2xl relative overflow-hidden shadow-[-10px_-10px_0px_rgb(242,242,242)] sm:shadow-[20px_-20px_0px_rgb(242,242,242)]"
          data-aos="zoom-in"
          data-aos-duration="700"
        >
          <img
            src={Flixpedia}
            alt=""
            className="rounded-2xl block transition-transform duration-200"
          />
          <div className="projectinfo px-2 min-[400px]:px-4 md:px-10">
            <h3 className="text-base md:text-xl lg:text-2xl mb-2 md:mb-3 lg:mb-5 text-yellow-300">
              Movie Details Web App
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-2 md:mb-3 lg:mb-5">
              Flixpedia is your go-to movie detail website, providing
              comprehensive information on films, including cast and crew
              details, ratings,etc.
            </p>
            <div>
              <a href="https://github.com/Aniket2805/FlixPedia" target="_blank">
                <i className="fa-solid fa-code rounded-[100%] mr-3 p-3 lg:px-[19px] lg:py-5 text-lg lg:text-xl bg-white text-[#63e]"></i>
              </a>
              <a href="https://flixpedia.netlify.app/" target="_blank">
                <i className="fa-solid fa-arrow-up-right-from-square rounded-full p-3 lg:p-5 text-lg lg:text-xl bg-white text-[#63e]"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          className="data rounded-2xl relative overflow-hidden shadow-[10px_10px_0px_rgb(242,242,242)] sm:shadow-[-20px_20px_0px_rgb(242,242,242)]"
          data-aos="zoom-in"
          data-aos-duration="700"
        >
          <img
            src={VideoVerse}
            alt=""
            className="rounded-2xl block transition-transform duration-200"
          />
          <div className="projectinfo px-2 min-[400px]:px-4 md:px-10">
            <h3 className="text-base md:text-xl lg:text-2xl mb-2 md:mb-3 lg:mb-5 text-yellow-300">
              VideoVerse Web App
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-2 md:mb-3 lg:mb-5">
              Discover and play an extensive range of videos, from entertaining
              vlogs to informative tutorials, all in one user-friendly hub.
            </p>
            <div>
              <a
                href="https://github.com/Aniket2805/VideoVerse"
                target="_blank"
              >
                <i className="fa-solid fa-code rounded-[100%] mr-3 p-3 lg:px-[19px] lg:py-5 text-lg lg:text-xl bg-white text-[#63e]"></i>
              </a>
              <a href="https://explorevideoverse.netlify.app/" target="_blank">
                <i className="fa-solid fa-arrow-up-right-from-square rounded-full p-3 lg:p-5 text-lg lg:text-xl bg-white text-[#63e]"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          className="data rounded-2xl relative overflow-hidden shadow-[10px_10px_0px_rgb(242,242,242)] sm:shadow-[20px_20px_0px_rgb(242,242,242)]"
          data-aos="zoom-in"
          data-aos-duration="700"
        >
          <img
            src={Fashion}
            alt=""
            className="rounded-2xl block transition-transform duration-200"
          />
          <div className="projectinfo px-2 min-[400px]:px-4 md:px-10">
            <h3 className="text-base md:text-xl lg:text-2xl mb-2 md:mb-3 lg:mb-5 text-yellow-300">
              Clothing Web App
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-2 md:mb-3 lg:mb-5">
              FashionFusion is a sleek and user-friendly ecommerce website that
              offers a wide range of trendy clothing.
            </p>
            <div>
              <a
                href="https://github.com/Aniket2805/FashionFusion"
                target="_blank"
              >
                <i className="fa-solid fa-code rounded-[100%] mr-3 p-3 lg:px-[19px] lg:py-5 text-lg lg:text-xl bg-white text-[#63e]"></i>
              </a>
              <a href="https://fashionfusion2023.netlify.app/" target="_blank">
                <i className="fa-solid fa-arrow-up-right-from-square rounded-full p-3 lg:p-5 text-lg lg:text-xl bg-white text-[#63e]"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
