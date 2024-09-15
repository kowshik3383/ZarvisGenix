import React from 'react'
import { useLocation } from 'react-router-dom'
const ButtonHome = () => {
  const location = useLocation()
  return (
	<>
	<div className="flex gap-11 font-medium mt-5 pt-3 rounded-3xl h-10 bg-blue-800">
	<a href='/absense'   className={`${
          location.pathname === "/absense"
            ? "border-t-4 border-green-500"
            : ""
        }`}>Absense</a>
          <a href="/employe"  className={`${
          location.pathname === "/employe"
            ? "border-t-4 border-green-500"
            : ""
        }`}>Employment</a>
          <a href='personal'>Overtime</a>
          <a href='/personal'  className={`${
          location.pathname === "/personal"
            ? "border-t-4 border-green-500"
            : ""
        }`}>Personal</a>
          <a href='/emergency' className={`${
          location.pathname === "/emergency"
            ? "border-t-4 border-green-500"
            : ""
        }`} >Emergencies</a>
          <a href='/timesheet' className={`${
          location.pathname === "/timesheet"
            ? "border-t-4 border-green-500"
            : ""
        }`} >Timesheet</a>
          <a href='/document' className={`${
          location.pathname === "/document"
            ? "border-t-4 border-green-500"
            : ""
        }`}>Documents</a>
	   </div>


	</>
  )
}

export default ButtonHome