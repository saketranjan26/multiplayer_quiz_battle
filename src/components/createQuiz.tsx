"use client"

import InputBox from "./inputBox";
import NumberInput from "./numberInput";
import TimeInput from "./timeInput";

export default function CreateQuiz(){
   
    return (
        <div className=" mx-auto aspect-auto overflow-hidden  rounded-xl w-auto h-auto bg-slate-200 ">
            <div className=" text-3xl px-3 font-medium font-mono">
                Create your quiz 
            </div>
            
            <div className="px-3 pt-3 flex-row">
                <InputBox label="Name" placeholder="Your quiz name" onChange={()=>{}}/>
                <NumberInput />
                <div className="flex jus">
                    <TimeInput label="Select quiz duration" para="Minutes"/>
                    
                </div>
                
            </div>    
        </div>
    )
}