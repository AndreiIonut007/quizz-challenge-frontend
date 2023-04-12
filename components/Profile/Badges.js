import React from "react";
import { RiHashtag } from "react-icons/ri";
import { selectBadges } from "../../public/src/features/profileSlice";
import { useSelector } from "react-redux";

const Badges = ({ badges }) => {
  // const badges = useSelector(selectBadges);
  const icon = (type) => {
    switch (type.toLowerCase()) {
      case "offensive":
        return "bg-[url(https://www.svgrepo.com/show/244637/badge-saint-patrick.svg)] bg-contain w-[100px] h-[100px]";
      case "defensive":
        return "bg-[url(https://www.svgrepo.com/show/154368/badge.svg)] bg-contain w-[100px] h-[100px]";
      case "delay":
        return "bg-[url(https://www.svgrepo.com/show/180529/badge-medal.svg)] bg-contain w-[100px] h-[100px]";
      case "attack":
        return "bg-[url(https://www.svgrepo.com/show/180473/medal-medal.svg)] bg-contain w-[100px] h-[100px]";
      default:
        return "https://www.svgrepo.com/show/154368/badge.svg";
    }
  };

  const info = (type) => {};

  return (
    <div className="flex flex-col w-2/3 max-md:w-full">
      <div className="flex flex-row w-fit items-center bg-transparent shadow-xl rounded-md p-1 bottom-full">
        <RiHashtag className="text-red-500" size={20} />
        <p className="text-xl text-[#271155]">Badges</p>
      </div>
      <div className="flex flex-wrap shadow-lg py-4">
        {badges?.map((badge) => (
          <div className="w-fit px-4 inline-flex" key={badge.id}>
            <div className={icon(badge.type)}>
              <p className="text-white font-bold">Lvl. {badge.level}</p>
            </div>
            {badge.type.toLowerCase() == "offensive" && (
              <div className=" font-thin text-[#271155]">
                <p>You can solve max {badge.level} quize(s) today.</p>
                <p>Finish <u>top 3</u>-{">"} {badge.level}  time(s) to level up.</p>
              </div>
            )}
            {badge.type.toLowerCase() == "defensive" && (
              <div className=" font-thin text-[#271155]">
                <p>You can write max {badge.level} quize(s) today.</p>
                <p>Write {badge.level} quize(s) today to level up and recive (10/rank)*tokens.  </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges;
