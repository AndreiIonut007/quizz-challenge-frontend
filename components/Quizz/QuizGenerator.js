import React, { createRef, useEffect, useRef, useState } from "react";
import Question from "./Question";
import { VscAdd } from "react-icons/vsc";
import { nanoid } from "nanoid";
import { MdTimer } from "react-icons/md";
import { FaRegCalendarTimes } from "react-icons/fa";
import { useSession } from "next-auth/react";
import axios from "axios";

const QuizGenerator = () => {
  const ENDPOINT_SERVICE_QUIZ = "http://localhost:8181/api/v1/quiz";
  const ENDPOINT_SERVICE_VALIDATION_CREATE =
    "http://localhost:8181/api/v1/profile/validate/creation";
  const MAX_QUESTIONS = 20;
  const nameRef = useRef();
  const timestampRef = useRef();
  const rewardRef = useRef({ I: 0, II: 0, III: 0 });
  const childRef = useRef([]);
  const [rangeRef, setRangeRef] = useState(10);
  const [validation, setValidation] = useState(true);
  const [questions, setQuestions] = useState([]);
  const { data: session } = useSession();
  const index = useRef(0);

  useEffect(() => {
    childRef.current = Array(MAX_QUESTIONS)
      .fill()
      .map((_, i) => childRef.current[i] || createRef());

    const checkAcces = () => {
      axios
        .get(
          ENDPOINT_SERVICE_VALIDATION_CREATE,
          { params: { id: session?.user.email } },
          { headers: { accept: "application/json" } }
        )
        .then((response) => {
          console.log(response.data);
          setValidation(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    checkAcces();
  });

  const handleSaveModel = () => {
    if (nameRef.current.value === "" || timestampRef.current.value === "") {
      alert("Missing title or timestamp");
      return;
    }
    Date.prototype.addMinutes = function (h) {
      this.setMinutes(this.getMinutes() + h);
      return this;
    };

    if (
      new Date(timestampRef.current.value).addMinutes(rangeRef) <= new Date()
    ) {
      alert("timestamp wrong");
      return;
    }

    if (
      rewardRef.current.I + rewardRef.current.II + rewardRef.current.III <
      50
    ) {
      alert("You need to spend at least 50 Tokens!")
    }

    const formData = {
      creator: session?.user.email,
      title: nameRef.current.value,
      timer: rangeRef,
      expDate: timestampRef.current.value,
      rewards: {
        winner: rewardRef.current.I,
        secPlace: rewardRef.current.II,
        thirdPlace: rewardRef.current.III,
      },
      questions: [],
    };
    const questions = [];

    childRef.current.forEach((ch) => {
      if (ch.current !== null) {
        formData.questions.push(ch.current);
      }
    });
    if (formData.questions.length <= 0) {
      alert("Add more questions");
      return;
    }
    axios
      .post(ENDPOINT_SERVICE_QUIZ, formData, {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      })
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  };

  return (
    <>
      {!validation && <p>Come back tomorrow!</p>}
      {validation && (
        <div>
          <div className="flex flex-col w-4/5 sm:w-3/5 lg:w-2/5 m-auto p-2 rounded-md shadow-md space-y-3">
            <input
              className="p-2 bg-gradient-to-r to-[#6b67cd] from-[#403267] outline-none focus:bg-[#eb7a4c] text-white placeholder-white"
              type="text"
              ref={nameRef}
              placeholder="Title"
            ></input>
            <div>
              <div className="flex flex-row text-white">
                <MdTimer size={30} />
                <p className="px-2">{rangeRef} min</p>
              </div>
              <input
                className="w-2/3"
                onChange={(e) => setRangeRef(e.currentTarget.value)}
                type="range"
                defaultValue="10"
                min="1"
                max="60"
                step="1"
              />
            </div>
            <div>
              <p className="text-white">Reward:</p>
              <div className="flex flex-row justify-evenly">
                <input
                  className="w-1/6 px-2 rounded-md"
                  ref={rewardRef}
                  onChange={(e) => {
                    rewardRef.current.I = e.currentTarget.value;
                    console.log(rewardRef.current.I);
                  }}
                  placeholder="I"
                  type="number"
                  min="20"
                />
                <input
                  className="w-1/6 px-2 rounded-md"
                  ref={rewardRef}
                  onChange={(e) => {
                    rewardRef.current.II = e.currentTarget.value;
                    console.log(rewardRef.current.II);
                  }}
                  placeholder="II"
                  type="number"
                  min="0"
                />
                <input
                  className="w-1/6 px-2 rounded-md"
                  ref={rewardRef}
                  onChange={(e) => {
                    rewardRef.current.III = e.currentTarget.value;
                    console.log(rewardRef.current.III);
                  }}
                  placeholder="III"
                  type="number"
                  min="0"
                />
              </div>
              <div className="inline-flex mt-6 text-white">
                <FaRegCalendarTimes className="mr-2" size={30} />
                <input
                  className="bg-transparent outline-transparent"
                  ref={timestampRef}
                  type="datetime-local"
                />
              </div>
            </div>
            {questions}
          </div>
          <br />
          <div className="flex flex-row">
            <VscAdd
              className="text-white border-2 border-[#271155] bg-transparent rounded-full shadow-lg cursor-pointer hover:scale-110 mx-auto"
              onClick={() => {
                setQuestions([
                  ...questions,
                  <Question
                    key={nanoid()}
                    childFunc={childRef.current[index.current]}
                    index={index.current}
                  />,
                ]);
                index.current = index.current + 1;
              }}
              size={60}
            />
            <button
              className="p-3 mx-auto border-2 border-[#271155] shadow-lg bg-transparent rounded-full text-white hover:scale-110"
              onClick={handleSaveModel}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizGenerator;
