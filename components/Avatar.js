import React from 'react';

const Avatar = ({ url }) => {
  return <img loading="lazy" src={url} alt="profile pic" className="h-[45px] w-[45px] rounded-full hover:bg-gray-200 cursor-pointer p-[5px]"/>;
};

export default Avatar;
