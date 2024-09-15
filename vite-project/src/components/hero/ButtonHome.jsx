import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ButtonHome = () => {
  const location = useLocation();

  return (
    <div className="flex gap-11 font-medium mt-5 pt-3 rounded-3xl h-10 bg-blue-800">
      <Link
        to="/absense"
        className={`${
          location.pathname === "/absense" ? "border-t-4 border-green-500" : ""
        }`}
      >
        Absense
      </Link>

      <Link
        to="/employe"
        className={`${
          location.pathname === "/employe" ? "border-t-4 border-green-500" : ""
        }`}
      >
        Employment
      </Link>

      {/* Fixed: Added missing conditional class for Overtime */}
      

      <Link
        to="/personal"
        className={`${
          location.pathname === "/personal" ? "border-t-4 border-green-500" : ""
        }`}
      >
        Personal
      </Link>

      <Link
        to="/emergency"
        className={`${
          location.pathname === "/emergency"
            ? "border-t-4 border-green-500"
            : ""
        }`}
      >
        Emergencies
      </Link>

      <Link
        to="/timesheet"
        className={`${
          location.pathname === "/timesheet" ? "border-t-4 border-green-500" : ""
        }`}
      >
        Timesheet
      </Link>

      <Link
        to="/document"
        className={`${
          location.pathname === "/document" ? "border-t-4 border-green-500" : ""
        }`}
      >
        Documents
      </Link>
    </div>
  );
};

export default ButtonHome;
