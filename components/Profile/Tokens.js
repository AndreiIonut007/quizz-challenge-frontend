import React from "react";
import { RiHashtag } from "react-icons/ri";

const Tokens = ({tokens}) => {
  return (
    <div className="flex flex-col w-1/3 max-md:w-full">
      <div className="flex flex-row w-fit items-center shadow-xl rounded-md p-1 bottom-full">
        <RiHashtag className="text-red-500" size={20} />
        <p className="text-xl text-[#271155]">Tokens</p>
      </div>
      <div className="py-4 shadow-lg">
        <div className="h-[100px]">
          <p className="text-6xl w-fit  m-auto text-center text-white">{tokens}</p>
        </div>
      </div>
    </div>
  );
};

export default Tokens;
