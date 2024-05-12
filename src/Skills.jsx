import React from "react";
import { FaHtml5, FaBootstrap } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { BiLogoJavascript } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
const Skills = () => {
  return (
    <div className="text-white dancing-script-500 max-w-7xl mx-auto p-6 lg:px-8">
      <h1 className="text-6xl min-[400px]:text-7xl font-extrabold mb-10 min-[400px]:mb-16">
        <span className="text-[#63e]">S</span>kills
      </h1>
      <div className="grid grid-cols-1 min-[430px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        <div className="flex justify-center items-center">
          <div className="rounded-xl p-4 bg-gray-100 shadow-[8px_6px_0px_#63e] mb-4">
            <TbBrandCpp className="text-9xl rounded-xl text-blue-800" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-xl p-4 bg-gray-100 shadow-[8px_6px_0px_#63e] mb-4">
            <FaHtml5 className="text-9xl rounded-xl text-[#e34c26]" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-xl p-4 bg-gray-100 shadow-[8px_6px_0px_#63e] mb-4">
            <FaCss3Alt className="text-9xl rounded-xl text-[#264de4]" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-xl p-4 bg-gray-100 shadow-[8px_6px_0px_#63e] mb-4">
            <BiLogoJavascript className="text-9xl rounded-xl text-[#ffe100]" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border-gray-400 rounded-xl p-4 bg-gray-900 shadow-[8px_6px_0px_rgb(242,242,242)] mb-4">
            <RiReactjsLine className="text-9xl rounded-xl text-cyan-400" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-xl p-4 bg-gray-100 shadow-[8px_6px_0px_#63e] mb-4">
            <FaBootstrap className="text-9xl rounded-xl text-[#563d7c]" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-xl p-4 bg-gray-900 shadow-[8px_6px_0px_rgb(242,242,242)] mb-4">
            <RiTailwindCssFill className="text-9xl rounded-xl text-[#38bdf8]" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-xl p-4 bg-gray-900 shadow-[8px_6px_0px_rgb(242,242,242)] mb-4">
            <FaNodeJs className="text-9xl rounded-xl text-green-400" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-xl p-4 bg-gray-900 shadow-[8px_6px_0px_rgb(242,242,242)] mb-4">
            <IoLogoFirebase className="text-9xl rounded-xl text-[#FFA611]" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-xl p-4 bg-gray-100 shadow-[8px_6px_0px_#63e] mb-4">
            <SiMysql className="text-9xl rounded-xl text-[#00758f]" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-xl p-4 bg-gray-900 shadow-[8px_6px_0px_rgb(242,242,242)] mb-4">
            <IoLogoGithub className="text-9xl rounded-xl" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-xl p-4 bg-gray-900 shadow-[8px_6px_0px_rgb(242,242,242)] mb-4">
            <VscVscode className="text-9xl rounded-xl text-[#0078d7]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
