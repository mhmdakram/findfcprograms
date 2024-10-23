
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-custom-bg text-black py-4">
      <div className="max-w-screen-xl  mx-auto px-4">
        <img src="/assets/logo.png" className="h-24 w-auto flex justify-center align-middle ml-4 mt-4"></img>
       
        <ul className="flex align-middle  justify-end space-x-4  ">
          <li>
            <a href="/about" className="text-black hover:text-green-300">
              Home
            </a>
          </li>
          <li>
            <a href="/contact" className="text-black hover:text-green-300">
              Contact
            </a>
          </li>
          <li>
            <a href="/faq" className="text-black hover:text-green-300">
              About
            </a>
          </li>
          <li>
            <a href="/faq" className="text-black hover:text-green-300">
              Faq
            </a>
          </li>
        </ul>
        <p className="text-center text-xs ">
         Copyright &copy;  FindFC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
