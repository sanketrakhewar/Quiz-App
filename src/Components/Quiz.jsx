import React from "react";
import "./Quiz.css";

const Quiz = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="bg-slate-100 pt-6 p-12 rounded-lg shadow-2x1 w-full max-w-xl">
        <div className="text-slate-700 text-4xl text-center font-semibold">
          Quiz App
        </div>
        <br></br>
        <hr className="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-7000"></hr>
        <div className="text-slate-700 text-xl font-semibold">
          <div className="m-4">Question 1 / 5</div>
          <div className="m-4">
            <span>
              Q1) Who is The guardian of fundamental rights emuerated in indian
              consitution
            </span>
          </div>
          <div className="w-full">
            <button className="m-2 h-10 w-full rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out">
              Answer
            </button>
          </div>
          <div className="w-full">
            <button className="m-2 h-10 w-full rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out">
              Answer
            </button>
          </div>
          <div className="w-full">
            <button className="m-2 h-10 w-full rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out">
              Answer
            </button>
          </div>
          <div className="w-full">
            <button className="m-2 h-10 w-full rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out">
              Answer
            </button>
          </div>
          <div className="w-full flex place-content-between pt-4 text-center ">
            <button class="flex text-center place-content-between m-2 p-2 h-10 bg-violet-400 w-32   hover:shadow-xl transition-all duration-500 ease-in-out rounded-md hover:bg-violet-500 active:bg-violet-400 focus:outline-none ">
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
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
              Previous{" "}
            </button>
            <button class="text-center place-content-between m-2 p-2 h-10 bg-violet-400 w-24 hover:shadow-xl transition-all duration-500 ease-in-out rounded-md hover:bg-violet-500 active:bg-violet-400 focus:outline-none ">
              Submit
            </button>
            <button class="flex text-center place-content-between m-2 p-2 h-10 bg-violet-400 w-24  hover:shadow-xl transition-all duration-500 ease-in-out rounded-md hover:bg-violet-500 active:bg-violet-400 focus:outline-none ">
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
          <div className="flex pt-4 text-enter">
            <button className="m-2 h-10 w-52 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out">
              1
            </button>
            <button className="m-2 h-10 w-52 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out">
              2
            </button>
            <button className="m-2 h-10 w-52 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out">
              3
            </button>
            <button className="m-2 h-10 w-52 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out">
              4
            </button>

            <button className="m-2 h-10 w-52 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out">
              5
            </button>
          </div>
          <div className="flex text-enter pt-4">
            <button className="m-2 h-10 w-6/12 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out">
              Correct : <span className="text-green-600"> 1</span>
            </button>
            <button className="m-2 h-10 w-6/12 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out">
              InCorrect :<span className="text-red-600"> 1</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
