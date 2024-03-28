import React, { useState } from "react";
import "./Quiz.css";
import { data } from "../Assets/data";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const option_array = [
    question.option1,
    question.option2,
    question.option3,
    question.option4,
  ];

  const checkAns = (ans) => {
    if (!lock) {
      if (question.ans === ans) {
        setScore((prev) => prev + 1);
      }
      setSelectedAnswer(ans);
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      setIndex((prevIndex) => prevIndex + 1);
      setQuestion(data[index + 1]);
      setLock(false);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="flex con w-full h-screen justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="bg-slate-100 pt-6 p-12 rounded-lg shadow-2x1 w-full max-w-xl">
        <div className="text-slate-700 text-4xl text-center font-semibold">
          Quiz App
        </div>
        <br></br>
        <hr className="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-7000"></hr>
        {!result && (
          <div className="text-slate-700 text-xl font-semibold">
            <div className="m-4 index">
              {index + 1} of {data.length} Questions{" "}
            </div>
            <div className="m-4">
              <span>
                {index + 1}. {question.question}
              </span>
            </div>
            {option_array.map((option, idx) => (
              <div className="w-full" key={idx}>
                <button
                  className={`m-2 h-10 w-full rounded-md ${
                    lock && selectedAnswer === idx + 1
                      ? question.ans === idx + 1
                        ? "bg-green-300"
                        : "bg-red-300"
                      : "bg-slate-200 hover:bg-slate-100"
                  }`}
                  onClick={() => checkAns(idx + 1)}
                  disabled={lock}
                >
                  {option}
                </button>
              </div>
            ))}
            <div className="w-full flex justify-center pt-4 text-center">
              <button
                className="flex place-content-between m-2 p-2 text-center w-24 hover:shadow-xl transition-all duration-500 ease-in-out rounded-md bg-violet-400 hover:bg-violet-500 active:bg-violet-400 focus:outline-none"
                onClick={next}
              >
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
            <div className="flex pt-4 text-enter steps">
              {Array.from({ length: data.length }, (_, i) => (
                <button
                  key={i}
                  className={`m-2 h-10 w-52 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out ${
                    i === index ? "bg-violet-400" : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="flex text-enter pt-4">
              <button className="m-2 h-10 w-6/12 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out">
                Correct : <span className="text-green-600"> {score}</span>
              </button>
              <button className="m-2 h-10 w-6/12 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out">
                Incorrect :{" "}
                <span className="text-red-600">{index + 1 - score}</span>
              </button>
            </div>
          </div>
        )}
        {result && (
          <div className="text-slate-700 text-xl font-semibold  ">
            <div className="m-4 flex place-content-center ">
              Quiz completed!
            </div>
            <div className=" flex place-content-center">
              <button className="m-2 h-10 w-6/12 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out">
                <span>Your score : {score}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
