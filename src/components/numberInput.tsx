import React from 'react';

export default function NumberInput({
    para,
    number,
    setNumber
   
}:{
    para:string,
    number:number,
    setNumber:React.Dispatch<React.SetStateAction<number>>,
}) {
   
    return(
        <div>
            <form  className="max-w-xs mx-auto px-3">
                {/* <label  className="block mb-2  font-medium text-slate-800">Select no. of questions </label> */}
                <div className="relative flex items-center max-w-[8rem]">
                    <button  onClick={()=>{ para==="Hours"? number===0?setNumber(0):setNumber(number-1):number===1?setNumber(1):setNumber(number-1)}} type="button" id="decrement-button"  className="bg-gray-100   hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-slate-400  focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="text" value={number} readOnly id="quantity-input"  className=" border-x-0 border-grey-300 h-11 text-center text-gray-900 text-sm block w-full py-2.5"></input>
                    <button onClick={()=>{para==="Please select between 1-200"?number===200?setNumber(200):setNumber(number+1):number===60?setNumber(1):setNumber(number+1)}} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100   hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-slate-400  focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
                <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 ">{para}</p>
            </form>
        </div>
    )
} 