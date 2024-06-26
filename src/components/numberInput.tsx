
import { useState } from "react"

export default function NumberInput(){
    const [number,setNumber] = useState(5)

    return(
        <div>

            <form className="max-w-xs mx-auto ">
                <label  className="block mb-2  font-medium text-slate-800">Select no. of questions </label>
                <div className="relative flex items-center max-w-[8rem]">
                    <button  onClick={()=>{ number===1?setNumber(1):setNumber(number-1)}} type="button" id="decrement-button"  className="bg-gray-100   hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-slate-400  focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="text" id="quantity-input" value={number}  className=" border-x-0 border-grey-300 h-11 text-center text-gray-900 text-sm block w-full py-2.5"></input>
                    <button onClick={()=>{setNumber(number+1)}} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100   hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-slate-400  focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
                <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 ">Please select between 5-30.</p>
            </form>
        </div>
    )
} 