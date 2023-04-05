import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-row justify-evenly w-2/6 max-sm:w-4/5 max-lg:w-3/5 h-60 shadow-lg rounded-md my-9 ml-8">
      <Image
        className="rounded-full my-auto"
        //   src={session?.user.image}
        alt="Profile img"
        width="100"
        height="100"
      />
      <div className="flex flex-col justify-evenly w-3/5">
        <p className="text-center text-2xl">
          {/* {session?.user.name.split(" ")[0]} */}
          name
        </p>
        <p className="text-center text-lg">rank</p>
      </div>
    </div>
  );
};

export default Profile;
