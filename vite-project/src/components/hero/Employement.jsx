import React, { useEffect, useState } from "react";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import Sidebar from "../Sidebar"; // Ensure this path is correct

import ButtonHome from "./ButtonHome"; // Ensure this path is correct
import Employe from "../employment/Employe";

const Employement = () => {
  const [user, setUser] = useState(null); // User state

  // Fetch user from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set user data
    }
  }, []);

  return (
    <section className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-5 p-4">
        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <div className="flex flex-grow max-w-custom-ml ml-11">
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
            <button className="bg-blue-100 h-9 w-56 rounded-3xl text-black font-medium flex items-center justify-center">
              Add Employees
            </button>
            <button className="flex items-center">
              <GiHamburgerMenu className="h-12 w-10" color="rgba(0, 161, 0, 1)" />
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex mt-10 bg-blue-300 h-48 p-5 rounded-3xl items-center">
          <BsFillPersonFill
            color="rgba(207, 207, 207, 1)"
            className="text-7xl border h-36 w-36 p-1 rounded-full bg-white"
          />
          <div className="ml-8">
            <h1 className="text-2xl font-bold">
              {user?.firstName} {user?.lastName}
            </h1>
            <p className="text-gray-600 flex gap-3">
              <FaCircle className="h-2 mt-2" color="green" />
              {user?.department}
            </p>
            <button className="mt-1 bg-blue-700 py-2 px-4 rounded-3xl text-white">
              India
            </button>
          </div>
          <h1 className="ml-20 text-lg font-medium flex items-center gap-3">
            <IoMdMail color="green" />
            {user?.email}
          </h1>
        </div>

        {/* Additional Content */}
        <div className="mt-5">
          <ButtonHome />
		  <Employe/>
        </div>
      </div>
    </section>
  );
};

export default Employement;
