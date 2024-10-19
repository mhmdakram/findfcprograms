import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./styles.css";

function Header() {
  //   return (
  //     <header className="flex items-center justify-between p-3 bg-white shadow-md">
  //       {/* Logo */}
  //       <div className="text-2xl font-bold">
  //         <img src="../assets/Logo.png" alt="My Logo" />
  //       </div>

  //       {/* Navigation */}
  //       <nav className="space-x-6">
  //         <span className="text-gray-600 hover:text-blue-600 cursor-pointer">
  //           Home
  //         </span>
  //         <span className="text-gray-600 hover:text-blue-600 cursor-pointer">
  //           Contact
  //         </span>
  //         <span className="text-gray-600 hover:text-blue-600 cursor-pointer">
  //           About
  //         </span>
  //         <span className="text-gray-600 hover:text-blue-600 cursor-pointer">
  //           FAQ
  //         </span>
  //       </nav>

  //       {/* Buttons */}
  //       <div className="flex space-x-4">
  //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
  //           Create Event
  //         </button>
  //         <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
  //           Login
  //         </button>
  //       </div>
  //     </header>
  //   );
  return (
    <header className="flex items-center justify-between pt-2 px-8 radial-blur">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/assets/Logo.png" alt="FindFC Logo" className="h-32 w-auto" />
      </div>

      {/* Navigation */}
      <nav className="flex space-x-16">
        <a
          href="#"
          className="text-black font-semibold pb-0 border-b border-black cursor-pointer hover:text-green-600"
        >
          Home
        </a>
        <a
          href="#"
          className="text-black font-normal cursor-pointer hover:text-green-600"
        >
          Contact
        </a>
        <a
          href="#"
          className="text-black font-normal cursor-pointer hover:text-green-600"
        >
          About
        </a>
        <a
          href="#"
          className="text-black font-normal cursor-pointer hover:text-green-600"
        >
          Faq
        </a>
      </nav>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-customGreen to-customGreen1 rounded hover:bg-green-700">
          Create Event
          <span className="ml-2 flex">
            <AddCircleOutlineIcon
              fontSize="small"
              sx={{ stroke: "#000000", strokeWidth: 0.1 }}
            />
          </span>
        </button>
        <button className="px-4 py-2 bg-white border-none text-black rounded hover:bg-gray-100">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
