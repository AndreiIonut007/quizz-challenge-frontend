import React from "react";
import { RiHashtag } from "react-icons/ri";

const Tokens = () => {
  return (
    <div className="flex flex-col w-1/3 max-md:w-full">
      <div className="flex flex-row w-fit items-center shadow-md rounded-md p-1 bottom-full">
        <RiHashtag className="text-red-500" size={20} />
        <p className="text-xl">Tokens</p>
      </div>
      <div className="py-4 shadow-lg">
        <div className="">
          <p className="text-white text-6xl text-center">234</p>
        </div>
      </div>
    </div>
  );
};

export default Tokens;
