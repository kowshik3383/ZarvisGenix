import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ButtonHome from "./ButtonHome";
const Dashboard = () => {
  // State for button actions
  const [absences, setAbsences] = useState(0);  // Example state for annual leaves
  const [sickness, setSickness] = useState(0);   // Example state for sickness
  const [lateness, setLateness] = useState(0);   // Example state for lateness
  const location = useLocation();
  // Handler functions
  const handleAddAbsence = () => {
    setAbsences(absences + 1); // Increment absences
  };

  const handleAddSickness = () => {
    setSickness(sickness + 1); // Increment sickness
  };

  const handleAddLateness = () => {
    setLateness(lateness + 1); // Increment lateness
  };

  return (
    <>
      {/* Top navigation buttons */}
      <div>
        <ButtonHome/>
        <div className="grid grid-cols-2 grid-rows-7 gap-x-4 gap-y-36 bg-blue-300 rounded-3xl h-screen p-6">
          {/* Absences Section */}
          <div className="block">
            <p className="font-medium ml-48">Absences</p>
            <button className="bg-blue-400 h-12 rounded-xl w-32 text-sm ml-44">All Absences</button>
          </div>

          {/* Other Section */}
          <div className="block">
            <p className="ml-14">Last year</p>
            <button className="bg-blue-400 h-12 rounded-xl w-32 text-sm">01 jan -  31 dec</button>
          </div>

          {/* Data and Button Controls */}
          <div className="flex space-x-20 ml-8 ">
            {/* Annual leaves */}
            <div className="bg-blue-800 h-52 p-5 rounded-xl">
              <p>Annual leaves to take</p>
              <p className="text-blue-100 text-center">{absences}/28</p>
              <p className="text-center">days</p>
              <button onClick={handleAddAbsence} className="bg-blue-400  h-11 w-44 rounded-xl px-4 mt-2">Add  leave</button>
            </div>

            {/* Sickness */}
            <div className="bg-blue-800 h-52 p-10 w-44 rounded-xl">
              <p className="text-center">Sickness</p>
              <p className="text-center">{sickness}</p>
              <p className="text-center">Occurrences</p>
              <button onClick={handleAddSickness} className="bg-blue-400 h-8  rounded-xl px-4 mt-2">Add</button>
            </div>

            {/* Lateness */}
            <div className="bg-blue-800 h-52 p-10  rounded-xl">
              <p className="text-center">Lateness</p>
              <p className="text-center">{lateness}</p>
              <p className="text-center">Occurrences</p>
              <button onClick={handleAddLateness} className="bg-blue-400 h-8 rounded-xl px-4 mt-2">Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
