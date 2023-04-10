import axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../components/Profile/Header";
import { selectProfile } from "../../public/src/features/profileSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Quiz({ data }) {
  const QUIZ_CHALLENGE_SERVICE_ENDPOINT_QUIZ =
    "http://localhost:8181/api/v1/quiz/verify";
    const profile = useSelector(selectProfile);
    const route = useRouter();
  const [matrix, setMatrix] = useState(
    Array.from({ length: data.questions.length }, () =>
      Array.from({ length: 6 }, () => false)
    )
  );

  useEffect(() => {
    console.log("params:", data);
  }, []);

  const handleChange = (row, column) => {
    const i = parseInt(row);
    const j = parseInt(column);
    console.log("indexs:", row, "   ", column);
    let copy = [...matrix];
    copy[i][j] = !matrix[i][j];
    setMatrix(copy);

    console.log(matrix);
  };

  const verifyAnswers = () => {
    axios
      .post(QUIZ_CHALLENGE_SERVICE_ENDPOINT_QUIZ, matrix, {
        params: { quizId: data.id, playerId: profile.email },
      })
      .then((resp) => {
        console.log(resp.data);
        alert("Correct answers: "+resp.data)
        route.back();

      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" bg-gradient-to-br from-[#E8CAE8] to-[#F3E6F1] via-[#BFCBE0]">
      <Head>
        <title>Mock Interview App Home</title>
        <meta name="Quiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header props={{ quiz: false, profile: false, ranking: false }} />
      <main>
        <div className="w-2/5 mx-auto space-y-2">
          <p className="w-fit mx-auto mt-3 p-2 border-2 border-red-400 rounded-md bg-red-200">
            {data.title}
          </p>
          <br />
          {data?.questions.map((question, x) => (
            <div className="bg-red-200 rounded-md p-3 shadow-md" key={x}>
              <div>
                <p className="border-b-2 border-red-600 p-1 font-thin">
                  Question
                </p>
                <p className="p-2">{question.question}</p>
              </div>
              <div>
                <p className="border-b-2 border-red-600 p-1 font-thin">
                  Description
                </p>
                <p className="p-2">{question.description}</p>
              </div>
              {question?.answersValues.map((val, y) => (
                <div className="flex flex-row" key={y}>
                  <input
                    type="checkBox"
                    onClick={() => handleChange(x, y)}
                  ></input>
                  <p className="p-2">{val}</p>
                </div>
              ))}
            </div>
          ))}
          <button
            className="p-2 bg-red-200 border-2 rounded-full hover:bg-green-200 shadow-md"
            onClick={verifyAnswers}
          >
            Finish
          </button>
        </div>
        )
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const res = await fetch(
    "http://localhost:8181/api/v1/quiz/" + `${params.quizId}`
  );
  const data = await res.json();

  return {
    props: { data },
  };
}
