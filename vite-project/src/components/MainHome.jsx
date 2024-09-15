import React from "react";
import { BsSearch } from "react-icons/bs";

import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar"; // Ensure this path is correct
import Hero from "./Hero";

const Home = () => {
  return (
    <section className="flex">
      {/* Sidebar */}
      <Sidebar />
      


      {/* Main Content */}
      <div className="flex-1 ml-5 h-screen p-4 ">
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="flex flex-grow max-w-96">
            <form className="flex border rounded-2xl overflow-hidden shadow-lg flex-grow">
              <input
                type="text"
                className="px-4 py-2 bg-white w-full focus:outline-none"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="bg-blue-300 text-white px-4 py-2 hover:bg-blue-600 transition duration-200 flex items-center justify-center"
              >
                <BsSearch color="black" />
              </button>
            </form>
          </div>

          {/* Add Button and Menu Icon */}
          <div className="flex space-x-4">
            <button className="bg-blue-100 mt-1 h-9 w-56 rounded-3xl text-black font-medium flex items-center justify-center">
              Add Employees
            </button>
            <button className="flex items-center">
              <GiHamburgerMenu
                className="h-12 w-10"
                color="rgba(0, 161, 0, 1)"
              />
            </button>
          </div>
        </div>
        <Hero/>
        
       
      </div>
      
    </section>
  );
};

export default Home;
