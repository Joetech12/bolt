import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { BiSearch, BiNews, BiImage, BiBookBookmark } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { IoMdMic } from 'react-icons/io';
import { TbMinusVertical } from 'react-icons/tb';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdOndemandVideo, MdMoreVert } from 'react-icons/md';
import Avatar from './Avatar';

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div>
      {/* Header */}
      <header className="flex w-full px-[50px] pt-4 justify-between text-sm text-gray-700">
        <div className="flex">
          <div className="flex items-center justify-center mr-[50px] cursor-pointer">
            <Link href="/">
              <Image
                src="/google-logo.png"
                width={100}
                height={35}
                alt="google-image"
              />
            </Link>
          </div>

          <div className="md:w-[40vw] w-[80vw] flex ring-offset-0 ring-[1.5px] hover:shadow-lg rounded-[50px] ring-gray-200 items-center">
            <input
              ref={searchInputRef}
              type="text"
              className="focus:outline-none flex-1 rounded-[50px] px-[20px]"
            />
            <AiOutlineClose className="h-10 w-5 text-gray-500 cursor-pointer mx-[5px]" />
            <TbMinusVertical className="h-10 w-5 text-gray-300 cursor-pointer mx-[2px]" />
            <IoMdMic className="h-10 w-5 text-blue-500 cursor-pointer mx-[5px]" />
            <BiSearch className="h-10 w-5 ml-[10px] mr-[15px] text-gray-500 cursor-pointer" />
          </div>
        </div>

        <div className="flex space-x-4 items-center">
          {/* Icon */}
          <IoSettingsSharp className="h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-[7px]" />
          {/* Icon */}
          <CgMenuGridO className="h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-[7px]" />
          {/* Avatar */}
          <Avatar url="/profile-pic.jpg" />
        </div>
      </header>

      <div className="w-full divide-y-[1px] divide-black/10 text-[14px]">
        <div className="w-full flex  mt-[10px] space-x-[30px] pl-[200px]">
          <div className="flex items-center border-b-[3px] border-blue-500 cursor-pointer">
            <BiSearch className="h-10 w-5 mr-[5px] text-blue-500" />
            <p className="text-blue-500">All</p>
          </div>
          <div className="flex items-center text-gray-500 cursor-pointer">
            <MdOndemandVideo className="h-10 w-5 mr-[5px] " />
            <p className="">Videos</p>
          </div>
          <div className="flex items-center text-gray-500 cursor-pointer">
            <BiNews className="h-10 w-5 mr-[5px] " />
            <p className="">News</p>
          </div>
          <div className="flex items-center text-gray-500 cursor-pointer">
            <BiImage className="h-10 w-5 mr-[5px] " />
            <p className="">Images</p>
          </div>
          <div className="flex items-center text-gray-500 cursor-pointer">
            <BiBookBookmark className="h-10 w-5 mr-[5px] " />
            <p className="">Books</p>
          </div>
          <div className="flex items-center text-gray-500 cursor-pointer">
            <MdMoreVert className="h-10 w-5 mr-[1px] " />
            <p className="">More</p>
          </div>
        </div>
        <div className="text-gray-500 pl-[200px] pt-[10px]">
          About 1,870,000,000 results (0.52 seconds)
        </div>
      </div>
    </div>
  );
};

export default Header;
