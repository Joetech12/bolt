import React from 'react';
import { IoLeaf } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="w-full grid bg-gray-100 py-[10px] mt-[50px] fixed bottom-0 text-[14px] divide-y-[1px] divide-black/10">
      <div className="px-8 py-3">
        <p className="text-black/70">Nigeria</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <IoLeaf className="text-green-700 text-[20px]" />
          <p className="text-black/70 link">Carbon neutral since 2007</p>
        </div>

        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p className="text-black/70 link">About</p>
          <p className="text-black/70 link">Advertising</p>
          <p className="text-black/70 link">Business</p>
          <p className="text-black/70 link">How Search Works</p>
        </div>

        <div className="flex justify-center space-x-8 md:ml-auto">
          <p className="text-black/70 link">Privacy</p>
          <p className="text-black/70 link">Terms</p>
          <p className="text-black/70 link">Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
