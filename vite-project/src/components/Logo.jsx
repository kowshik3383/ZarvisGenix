import React from "react";
import photo from '../../public/photo.svg'
const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-5 w-64">
        {/* Character with waving hand */}
        <div className="relative">
          <img
            src={photo}
            alt="Character"
            className="w-48 h-auto"
          />
          <div className="absolute -top-4 left-16 animate-wave-hand">
            {/* Add a simple div to indicate the waving hand */}
            <span role="img" aria-label="wave" className="text-6xl">👋</span>
          </div>
        </div>
        <h2 className="text-lg font-bold">Rishabh Raj Sinha</h2>
        <p className="text-gray-500">Director</p>
      </div>
    </div>
  );
};

export default Logo;
