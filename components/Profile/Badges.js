import React from "react";
import { RiHashtag } from "react-icons/ri";

const Badges = () => {
  return (
    <div className="flex flex-col w-2/3 max-md:w-full">
      <div className="flex flex-row w-fit items-center bg-transparent shadow-xl rounded-md p-1 bottom-full">
        <RiHashtag className="text-red-500" size={20} />
        <p className="text-xl text-[#271155]">Badges</p>
      </div>
      <div className="shadow-lg">ppp</div>
    </div>
  );
};

export default Badges;
