import React, { useEffect, useState } from "react";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import Sidebar from "./Sidebar"; // Ensure this path is correct
import { FaCircle } from "react-icons/fa";
import Dashboard from "./hero/Dashboard";
const Home = () => {
  const [user, setUser] = useState(null); // User state

  // Fetch user from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set user data
    }
  }, []);

  return (
    <section className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-5 h-screen p-4">
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
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

        {/* User Profile Section */}
        <div className="flex mt-10 bg-blue-300 h-48 pt-4 pl-5 rounded-full">
          <BsFillPersonFill
            color="rgba(207, 207, 207, 1)"
            className="text-7xl border h-36 w-36 p-1 rounded-full bg-white"
          />
          <div className="mt-8 ml-8">
            <h1 className="text-2xl font-bold">
              {user?.firstName} {}
              {user?.lastName}
            </h1>
            <p className="text-gray-600 flex gap-3">
              <FaCircle className="h-2 mt-2" color="green" />
              {user?.department}
            </p>
            <button className="mt-1 bg-blue-700 py-2 px-4 rounded-3xl">
              India
            </button>
          </div>
          <h1 className="flex ml-20 gap-3 text-lg font-medium mt-11">
            <IoMdMail className="" color="green" />
            {user?.email}
          </h1>
        </div>
        <div>
          <Dashboard/>
          </div>
        </div>
    </section>
  );
};

export default Home;
