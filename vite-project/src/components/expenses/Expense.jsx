import React, { useEffect, useState } from "react";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import Sidebar from "../Sidebar"; // Ensure this path is correct

 // Ensure this path is correct
import DocumentTable from "../documents/DocumentTable";



const Expense = () => {
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
        

        {/* Additional Content */}
        <div className="mt-11 flex space-x-11">
			<div className="bg-blue-300 w-60 p-11 pl-20 rounded-3xl h-10">
				
				<p className="text-sm">All departments</p>
			</div>
			<div className="bg-blue-300 w-60 p-11 pl-20 rounded-3xl h-10">
			
				<p className="text-sm">All divisions</p>
			</div>
			<div className="bg-blue-300 w-60 p-11 pl-20 rounded-3xl h-10">
				
				<p className="text-sm">All locations</p>
			</div>
	
        </div>
		<DocumentTable/>
      </div>
    </section>
  );
};

export default Expense;
