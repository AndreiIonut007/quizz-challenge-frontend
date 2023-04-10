import React from "react";
import {TfiTimer} from "react-icons/tfi";
import {CgTimer} from "react-icons/cg";
import Link from "next/link";

const QuizSelectElement = ({ quiz }) => {
  let date = new Date(quiz.expDate);

  return (
    <div className="flex flex-col w-2/4 max-lg:w-3/5 max-md:w-4/5 py-4 px-6 mx-auto hover:shadow-xl font-thin text-white text-md antialiased tracking-wider rounded-md shadow-md">
      <div className="flex flex-row justify-between">
        <Link href={`/quiz/${quiz.id}`} className="hover:border-b-2 cursor-pointer">{quiz.title}</Link>
        <div className="inline-flex items-center">
          <TfiTimer className="text-red-400 pr-1" size="30"/>
          <p>{quiz.timer}min</p>
        </div>
      </div>
      <div className="flex flex-row justify-evenly py-2">
        <div className="flex flex-row bg-white text-[#271155] w-1/4 justify-evenly rounded-xl border-2">
          <p>1<sup>st</sup></p>
          <p>{quiz.rewards.winner}</p>
        </div>
        <div className="flex flex-row bg-white text-[#271155] w-1/4 justify-evenly rounded-xl border-2">
          <p>2<sup>nd</sup></p>
          <p>{quiz.rewards.secPlace}</p>
        </div>
        <div className="flex flex-row bg-white text-[#271155] w-1/4 justify-evenly rounded-xl border-2">
          <p>3<sup>rd</sup></p>
          <p>{quiz.rewards.thirdPlace}</p>
        </div>
      </div>
      <div className="inline-flex items-center">
        <CgTimer size="25" className="text-red-400"/>
        <p>{date.toString()}</p>
      </div>
    </div>
  );
};

export default QuizSelectElement;
