import { useState } from "react";

interface props {
  questionNumber: number;
  question: {
    id: number;
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctOption: string;
    quizId: string;
  };
}

export const Question = ({ questionNumber, question }: props) => {
  const [correctOption, setCorrectOption] = useState(String);
  const [tick, setTick] = useState(Number);
  const [Check, setCheck] = useState(String);
  const [buttonRender,setButtonRender]= useState(true)
  //let score = 0;

  function check() {
    if (correctOption === question.correctOption){
      setCheck(`${correctOption} is correct`);
      //score= score+4;
    }
    else {
      setCheck(`${correctOption} is wrong`);
     // score--;
    }
  }

  return (
    <div className="bg-slate-200 mx-3 my-3 rounded-md">
      <label className="block my-1 mx-3 text-md font-bold text-gray-900">
        {"Question " + questionNumber}
      </label>
      <div className="mx-3">{question.question}</div>
      <div className="grid mx-1.5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 ">
        <div className="flex items-center">
          <div className="mx-1.5">A. {question.optionA}</div>
          <input
            type="checkbox"
            value={tick}
            onChange={() => {
              setTick(1);
              setCorrectOption(question.optionA);
            }}
            checked={tick === 1}
            className="w-4 h-4 bg-gray-50 border-slate-300 rounded  "
          ></input>
        </div>
        <div className="flex items-center">
          <div className="mx-1.5">B. {question.optionB}</div>
          <input
            type="checkbox"
            value={tick}
            onChange={() => {
              setTick(2);
              setCorrectOption(question.optionB);
            }}
            checked={tick === 2}
            className="w-4 h-4 bg-gray-50 border-slate-300 rounded  "
          ></input>
        </div>
        <div className="flex items-center">
          <div className="mx-1.5">C. {question.optionC}</div>
          <input
            type="checkbox"
            value={tick}
            onChange={() => {
              setTick(3);
              setCorrectOption(question.optionC);
            }}
            checked={tick === 3}
            className="w-4 h-4 bg-gray-50 border-slate-300 rounded  "
          ></input>
        </div>
        <div className="flex items-center">
          <div className="mx-1.5">D. {question.optionD}</div>
          <input
            type="checkbox"
            value={tick}
            onChange={() => {
              setTick(4);
              setCorrectOption(question.optionD);
            }}
            checked={tick === 4}
            className="w-4 h-4 bg-gray-50 border-slate-300 rounded  "
          ></input>
        </div>
      </div>
      <div className="flex items-center">
        {buttonRender && <button
          onClick={() => {
            let quizId = localStorage.getItem("quizId");
            console.log(quizId);
            const res = check();
            setButtonRender(false)
          }}
          className="rounded-md bg-slate-500 px-10 mx-1.5  py-2   font-semibold text-white  hover:bg-slate-600 "
        >
          Save
        </button>}
        {Check === `${correctOption} is correct` && (
          <div className="bg-green-600 text-green-200 rounded-md px-2 py-2">
            Correct!
          </div>
        )}
        {Check === `${correctOption} is wrong` && (
          <div className="bg-red-600 text-red-200 rounded-md px-2 py-2">
            {correctOption} is wrong
          </div>
        )}
      </div>
    </div>
  );
};
