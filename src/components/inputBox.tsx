import React from 'react';
export default function InputBox({
  label,
  setQuizName,
  placeholder
}: {
  label: string;
  setQuizName:React.Dispatch<React.SetStateAction<string>>,
  placeholder:string
}) {
  return (
    <div className=" my-4 px-3">
        <div className=" mt-4 font-medium text-slate-800 ">
            {label}
        </div>
        <input onChange={(e)=>setQuizName(e.target.value)} placeholder={placeholder} className="bg-gray-50 border border-slate-300 text-gray-900 text-sm rounded-lg w-60 p-2.5 "></input> 
    </div>
  );
}
