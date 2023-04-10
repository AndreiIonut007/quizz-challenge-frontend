import React, { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { addAllQuiz, selectQuiz } from "../../public/src/features/quizSlice";
import axios from "axios";
import QuizSelectElement from "./QuizSelectElement";

const QuizSelector = () => {
  const QUIZ_ENDPIONT = "http://localhost:8181/api/v1/quiz";
  const dispatch = useDispatch();
  const quizzes = useSelector(selectQuiz);
  const { data: session } = useSession();
  const [availableQuizzes, setAvailableQuizzes] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          QUIZ_ENDPIONT,
          { params: { email: session?.user.email } },
          { headers: { accept: "application/json" } }
        )
        .then((response) => {
          console.log(response.data);
          if (response.data.length < 1) {
            setAvailableQuizzes(false);
            return;
          }
          dispatch(addAllQuiz(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  return (
    <div>
      {availableQuizzes &&
        quizzes.map((quiz) => <QuizSelectElement quiz={quiz} key={quiz.id} />)}
      {!availableQuizzes && (
        <p className="text-center text-white">
          There are no quizzes available at the moment.
        </p>
      )}
    </div>
  );
};

export default QuizSelector;
