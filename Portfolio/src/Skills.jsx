import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { SiCss3 } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiReact } from "react-icons/si";

function Skills() {
  return (
    <div>
        <h1 id="skills" className="text-red-400 text-5xl font-semibold text-center underline mb-7">
        Skills
        </h1>
      <div className="lg:w-3/4 sm:w-full p-8 rounded-lg shadow-lg lg:mx-[90px] sm:mx-8 md:mx-auto mb-14 ">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
          Current Learning
        </h1>
        <p className="mb-8 leading-relaxed text-2xl text-gray-900">
          Currently, I'm immersed in learning Nodejs for web development and
          honing my skills in the fascinating realm of backend development. I'm
          excited to continue my journey in this exciting field...
        </p>
        <div className="flex flex-col">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between bg-white bg-opacity-10 p-4 rounded-md">
              <div className="flex items-center">
                <p className="text-4xl text-red-500">
                  <TiHtml5 />
                </p>
                <span className="text-lg font-bold text-white ml-4">HTML</span>
              </div>
              <div className="w-full mx-4 bg-gray-200 bg-opacity-20 rounded-full h-2 relative">
                <div
                  className="bg-red-500 absolute top-0 left-0 h-2 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
              <span className="text-lg font-bold text-white">95%</span>
            </div>
            <div className="flex items-center justify-between bg-white bg-opacity-10 p-4 rounded-md">
              <div className="flex items-center">
                <p className="text-4xl text-blue-500">
                  <SiCss3 />
                </p>
                <span className="text-lg font-bold text-white ml-4">CSS</span>
              </div>
              <div className="w-full mx-4 bg-gray-200 bg-opacity-20 rounded-full h-2 relative">
                <div
                  className="bg-blue-500 absolute top-0 left-0 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <span className="text-lg font-bold text-white">85%</span>
            </div>
            <div className="flex items-center justify-between bg-white bg-opacity-10 p-4 rounded-md">
              <div className="flex items-center">
                <p className="text-4xl text-yellow-500">
                  <TbBrandJavascript />
                </p>
                <span className="text-lg font-bold text-white ml-4">
                  JavaScript
                </span>
              </div>
              <div className="w-full mx-4 bg-gray-200 bg-opacity-20 rounded-full h-2 relative">
                <div
                  className="bg-yellow-500 absolute top-0 left-0 h-2 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <span className="text-lg font-bold text-white">65%</span>
            </div>
            <div className="flex items-center justify-between bg-white bg-opacity-10 p-4 rounded-md">
              <div className="flex items-center">
                <p className="text-4xl text-blue-300">
                  <SiReact />
                </p>
                <span className="text-lg font-bold text-white ml-4">React</span>
              </div>
              <div className="w-full mx-4 bg-gray-200 bg-opacity-20 rounded-full h-2 relative">
                <div
                  className="bg-blue-300 absolute top-0 left-0 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <span className="text-lg font-bold text-white">85%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
