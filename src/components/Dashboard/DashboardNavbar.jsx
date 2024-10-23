import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 text-black bg-white border-b border-gray-800 h-28 font-poppins">
      <div className="flex items-center">
      </div>
      <div className="items-center hidden space-x-4 md:flex">
        <div className="hidden space-x-6 md:flex">
          <a href="/Code-Editor" className="text-lg hover:text-purple-400">
            Code Editor
          </a>
          <a href="/Code-Editor-dir" className="text-lg hover:text-purple-400">
            Code Sand Box
          </a>
        </div>

        <button className="px-4 py-2 text-lg text-white bg-purple-500 rounded hover:bg-purple-600">
          Start for free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
