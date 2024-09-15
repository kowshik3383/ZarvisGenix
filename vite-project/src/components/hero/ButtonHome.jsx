import React from 'react'

const ButtonHome = () => {
  return (
	<>
	<div className="flex gap-11 font-medium mt-5 rounded-3xl h-10 bg-blue-800">
	<button   className={`${
          location.pathname === "/absense"
            ? "border-t-4 border-green-500"
            : ""
        }`}>Absense</button>
          <a href="/employe"  className={`${
          location.pathname === "/employe"
            ? "border-t-4 border-green-500"
            : ""
        }`}>Employment</a>
          <button>Overtime</button>
          <button>Personal</button>
          <button>Emergencies</button>
          <button>Timesheet</button>
          <button>Documents</button>
	   </div>


	</>
  )
}

export default ButtonHome