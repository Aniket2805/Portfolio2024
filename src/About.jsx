import React from "react";
import Aniket from "./files/aniket.png";
const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white dancing-script-500 max-w-7xl mx-auto mt-16 p-6 lg:px-8">
      <div className="hidden md:flex justify-center items-center">
        <img
          src={Aniket}
          alt=""
          className="h-[25rem] bg-[#63e] rounded-3xl shadow-[8px_-16px_0px_rgb(242,242,242)] lg:shadow-[26px_-20px_0px_rgb(242,242,242)]"
        />
      </div>
      <div className="aboutme text-lg">
        <h1 className="text-6xl min-[400px]:text-7xl mb-6 font-extrabold">
          About <span className="text-[#63e]">Me</span>
        </h1>
        <p className="mb-6">
          I am <span className="text-[#63e]">Aniket Kumar</span> and currently
          pursuing Bachelor of Technology from Netaji Subhas University of
          Technology, New Delhi. I am a Web Developer and passionate programmer
          with a deep love for coding and problem-solving, driven by the desire
          to create efficient and elegant software solutions
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          <div>
            <h3 className="mb-8">
              <span className="border-b-4 pb-1 border-[#63e]">Education</span>
            </h3>
            <ul>
              <li className="mb-4">
                <span className="text-[#63e]">Currently</span>
                <br />
                Pursuing B.Tech in Information Technology from Netaji Subhas
                University of Technology.
              </li>
              <li className="mb-4">
                <span className="text-[#63e]">2021</span>
                <br />
                12th from Rajkiya Pratibha Vikas Vidyalaya(RPVV), Sector-5
                Dwarka,New Delhi.
              </li>
              <li className="mb-4">
                <span className="text-[#63e]">2019</span>
                <br />
                10th from Govt.Co-Ed.Sr.Sec.School, Sector-2 Dwarka, New Delhi.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-8">
              <span className="border-b-4 pb-1 border-[#63e]">Experience</span>
            </h3>
            <ul>
              <li className="mb-4">
                <span className="text-[#63e]">Projects</span>
                <br></br>Done many projects.
              </li>
              <li className="mb-4">
                <span className="text-[#63e]">Hackathons</span>
                <br></br>Participated in many Hackathons.
              </li>
              <li className="mb-4">
                <span className="text-[#63e]">Coder</span>
                <br></br>Solved many DSA Problems on various platform like{" "}
                <a
                  href="https://leetcode.com/aniket8800/"
                  className="text-[#a0a0b8]"
                  target={"_blank"}
                >
                  LeetCode
                </a>{" "}
                and{" "}
                <a
                  href="https://auth.geeksforgeeks.org/user/aniketrorb1x/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
                  target={"_blank"}
                  className="text-[#a0a0b8]"
                >
                  GeeksForGeeks
                </a>
                .
              </li>
              <li className="mb-4">
                <span className="text-[#63e]">Contest</span>
                <br></br>Given many Contest on{" "}
                <a
                  href="https://www.codechef.com/users/aniket28kumar"
                  target={"_blank"}
                  className="text-[#a0a0b8]"
                >
                  CodeChef
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
