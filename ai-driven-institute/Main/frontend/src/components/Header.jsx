import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-700 p-4 flex justify-between items-center">
      <div className="text-white font-bold">All India Council for Technical Education</div>
      <div className="flex gap-4">
        <button className="text-white">Home</button>
        <button className="text-white">Reset Password</button>
      </div>
    </header>
  );
};

export default Header;
