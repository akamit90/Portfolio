import React from 'react';
import expense from "./assets/expense.png";
import apnacart from "./assets/apnacart.png";
import crypupdate from "./assets/crypupdate.png";
import weatherapp from "./assets/weatherapp.png";
import todolist from "./assets/todolist.png";
import eatyummy from "./assets/eatyummy.png";


function Project() {
  return (
    <div>
      
      <h1 id="project" className="text-red-400 text-5xl font-semibold text-center underline mt-16">
        Projects
      </h1>
      
      <div className=" lg:mx-[90px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-8">
        <div className=" p-4">
          <a
            href="https://github.com/akamit90/Expence-Tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={expense}
              alt="expense tracker"
              className="object-cover object-center w-full h-52 mb-4"
            />
          </a>
          <div>
            <h2 className=" text-2xl  text-center text-black font-semibold">
            Expense Tracker
            </h2>
          </div>
        </div>
        <div className=" p-4">
          <a
            href="https://github.com/akamit90/ApnaCart---a-Ecommerce-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={apnacart}
              alt="ecommerce"
              className="object-cover object-center w-full h-52 mb-4"
            />
          </a>
          <div>
            <h2 className=" text-2xl  text-center text-black font-semibold">
              Ecommerce Site
            </h2>
          </div>
        </div>
        <div className=" p-4">
          <a
            href="https://github.com/akamit90/CrypUpdate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={crypupdate}
              alt="crypUpdate"
              className="object-cover object-center w-full h-52 mb-4"
            />
          </a>
          <div>
            <h2 className=" text-2xl  text-center text-black font-semibold">
              Crypto Update
            </h2>
          </div>
        </div>
        <div className=" p-4">
          <a
            href="https://github.com/akamit90/weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={weatherapp}
              alt="product image"
              className="object-cover object-center w-full h-52 mb-4"
            />
          </a>
          <div>
            <h2 className=" text-2xl  text-center text-black font-semibold">
              Weather app
            </h2>
          </div>
        </div>
        <div className=" p-4">
          <a
            href="https://github.com/akamit90/NewToDoList"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={todolist}
              alt="todolist"
              className="object-cover object-center w-full h-52 mb-4"
            />
          </a>
          <div>
            <h2 className=" text-2xl  text-center text-black font-semibold">
              Todo List
            </h2>
          </div>
        </div>
        <div className=" p-4">
          <a
            href="https://github.com/akamit90/EatYummy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={eatyummy}
              alt="Food Delivery App"
              className="object-cover object-center w-full h-52 mb-4"
            />
          </a>
          <div>
            <h2 className=" text-2xl  text-center text-black font-semibold">
              Food Delivery App
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
