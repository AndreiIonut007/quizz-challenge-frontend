import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";

const Header = ({ props }) => {

  return (
    <div className="bg-transparent flex items-center justify-evenly p-2 shadow-md top-0 sticky z-50 h-16 rounded-md">
      <Image
        className="rounded-full my-auto"
        alt="Profile img"
        width="50"
        height="50"
      />
      <nav className="flex flex-row space-x-5 font-thin text-white text-xs antialiased tracking-widest">
        <Link
          className={`${
            props.profile
              ? "border-b-2 border-red-900"
              : "hover:transition-all hover:border-b-2 hover:border-red-900"
          }`}
          href={"/"}
        >
          PROFILE
        </Link>
        <Link
          className={`${
            props.quiz
              ? "border-b-2 border-red-900"
              : "hover:transition-all hover:border-b-2 hover:border-red-900"
          } `}
          href={"/quiz"}
        >
          QUIZ
        </Link>
        <Link
          className={`${
            props.ranking
              ? "border-b-2 border-red-900"
              : "hover:transition-all hover:border-b-2 hover:border-red-900"
          } `}
          href={"/ranting"}
        >
          RANKING
        </Link>
      </nav>
      <div>
        <div className="right-0" onClick={signOut}>
          <FaSignOutAlt className="mx-4" size={40} />
        </div>
      </div>
    </div>
  );
};

export default Header;
