import React from "react";
import image2 from "./assets/image22.png";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function Home() {
  return (
    <>
      <section id="home" className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left sm:items-start sm:text-left items-center text-center mt-14">
              <h1
                className="title-font text-6xl font-bold text-gray-900"
                style={{ lineHeight: "1.2" }}
              >
                Hi,
                <br className="" />
                I'm <span className="text-red-500">Amit</span>
                <br />
                React Developer
              </h1>
            </div>

            <h1 className="mb-8 text-white bg-red-900 border-0 py-2 px-6 rounded text-lg self-center mt-10 inline-block">
              Contact
            </h1>

            <div className="flex space-x-4 self-center mb-14">
              <a
                href="https://github.com/akamit90"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-black hover:text-gray-900"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/akamit.26/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-black hover:text-gray-900"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/amit-kumar-17830a169/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-black hover:text-gray-900"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={image2}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
