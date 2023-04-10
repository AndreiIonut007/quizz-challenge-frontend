import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectProfile } from "../../public/src/features/profileSlice";
import {RiHashtag} from "react-icons/ri";

const ProfileComp = () => {
  const profile = useSelector(selectProfile);
  return (
    <div className="flex flex-row justify-evenly w-2/6 max-sm:w-4/5 max-lg:w-3/5 h-60 shadow-2xl rounded-md my-9 ml-8">
      <div className="flex flex-col justify-evenly w-2/5 text-white">
        <p className="text-center text-2xl text-[#271155]">{profile.username}</p>
        <p className="text-center text-lg text-[#271155]">{profile.email}</p>
      </div>
      <div className="inline-flex my-auto items-center ">
        <RiHashtag className="text-red-500" size={30} />
        <p className="text-3xl text-white">{profile.rank}</p>
      </div>
    </div>
  );
};

export default ProfileComp;
