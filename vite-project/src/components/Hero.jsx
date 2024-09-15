import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { HiEye } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  // Navigate to the /absense route
  const handleClick = () => {
    navigate("/absense");
  };

  return (
    <>
      <section className="grid grid-cols-2 gap-10 px-10 mt-10">
        {/* First Div */}
        <div onClick={handleClick} className="cursor-pointer flex rounded-2xl bg-blue-300 w-80 pl-5 h-32 pt-7">
          <BsFillPersonFill
            color="rgba(207, 207, 207, 1)"
            className="text-7xl border h-20 w-20 p-1 rounded-full bg-white"
          />
          <div className="">
            <h1 className="mt-2 ml-3">Ramya Borra</h1>
            <div className="flex mt-2 ml-3">
              <HiEye color="red" className="mt-1" />
              View full profile
            </div>
          </div>
        </div>

        {/* Second Div */}
        <div onClick={handleClick} className="cursor-pointer flex rounded-2xl bg-blue-300 w-80 pl-5 h-32 pt-7">
          <BsFillPersonFill
            color="rgba(207, 207, 207, 1)"
            className="text-7xl border h-20 w-20 p-1 rounded-full bg-white"
          />
          <div className="">
            <h1 className="mt-2 ml-3">Ramya Borra</h1>
            <div className="flex mt-2 ml-3">
              <HiEye color="red" className="mt-1" />
              View full profile
            </div>
          </div>
        </div>

        {/* Third Div */}
        <div onClick={handleClick} className="cursor-pointer flex rounded-2xl bg-blue-300 w-80 pl-5 h-32 pt-7">
          <BsFillPersonFill
            color="rgba(207, 207, 207, 1)"
            className="text-7xl border h-20 w-20 p-1 rounded-full bg-white"
          />
          <div className="">
            <h1 className="mt-2 ml-3">Ramya Borra</h1>
            <div className="flex mt-2 ml-3">
              <HiEye color="red" className="mt-1" />
              View full profile
            </div>
          </div>
        </div>

        {/* Fourth Div */}
        <div onClick={handleClick} className="cursor-pointer flex rounded-2xl bg-blue-300 w-80 pl-5 h-32 pt-7">
          <BsFillPersonFill
            color="rgba(207, 207, 207, 1)"
            className="text-7xl border h-20 w-20 p-1 rounded-full bg-white"
          />
          <div className="">
            <h1 className="mt-2 ml-3">Ramya Borra</h1>
            <div className="flex mt-2 ml-3">
              <HiEye color="red" className="mt-1" />
              View full profile
            </div>
          </div>
        </div>

        {/* Fifth Div */}
        <div onClick={handleClick} className="cursor-pointer flex rounded-2xl bg-blue-300 w-80 pl-5 h-32 pt-7">
          <BsFillPersonFill
            color="rgba(207, 207, 207, 1)"
            className="text-7xl border h-20 w-20 p-1 rounded-full bg-white"
          />
          <div className="">
            <h1 className="mt-2 ml-3">Ramya Borra</h1>
            <div className="flex mt-2 ml-3">
              <HiEye color="red" className="mt-1" />
              View full profile
            </div>
          </div>
        </div>

        {/* Sixth Div */}
        <div onClick={handleClick} className="cursor-pointer flex rounded-2xl bg-blue-300 w-80 pl-5 h-32 pt-7">
          <BsFillPersonFill
            color="rgba(207, 207, 207, 1)"
            className="text-7xl border h-20 w-20 p-1 rounded-full bg-white"
          />
          <div className="">
            <h1 className="mt-2 ml-3">Ramya Borra</h1>
            <div className="flex mt-2 ml-3">
              <HiEye color="red" className="mt-1" />
              View full profile
            </div>
          </div>
        </div>

        {/* Seventh Div */}
        <div onClick={handleClick} className="cursor-pointer flex rounded-2xl bg-blue-300 w-80 pl-5 h-32 pt-7">
          <BsFillPersonFill
            color="rgba(207, 207, 207, 1)"
            className="text-7xl border h-20 w-20 p-1 rounded-full bg-white"
          />
          <div className="">
            <h1 className="mt-2 ml-3">Ramya Borra</h1>
            <div className="flex mt-2 ml-3">
              <HiEye color="red" className="mt-1" />
              View full profile
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Hero;
