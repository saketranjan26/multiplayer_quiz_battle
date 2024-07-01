import React from 'react';
export default function InputBox({
  value,
  label,
  setState,
  placeholder
}: {
  value:string,
  label?: string;
  setState:React.Dispatch<React.SetStateAction<string>>,
  placeholder:string
}) {
  return (
    <div>
        <div  className=" font-medium text-slate-800 ">
            {label}
        </div>
        <input value={value} onChange={(e)=>setState(e.target.value)} placeholder={placeholder} className="bg-gray-50 border border-slate-300 text-gray-900 text-sm rounded-lg w-60 p-2.5 "></input> 
    </div>
  );
}
