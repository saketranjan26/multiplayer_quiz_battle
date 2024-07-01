import { useState } from "react";
import InputBox from "./inputBox";
import { Button } from "./button";

export default function CreateQuestion({questionNumber}:{questionNumber:string}){
    const [question,setQuestion] = useState(String)
    const [optionA, setOptionA] = useState(String)
    const [optionB, setOptionB] = useState(String)
    const [optionC, setOptionC] = useState(String)
    const [optionD, setOptionD] = useState(String)
    const [correctOption, setCorrectOption] = useState(String)
    const [tick,setTick] = useState(Number)
    console.log(question)
    return (
        <div className="bg-slate-200 mx-3">
            <label className="block my-1 text-md font-medium text-gray-900">{"Question "+questionNumber}</label>
            <textarea value={question} id="message" onChange={(e)=>{setQuestion(e.target.value)}} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Type your question here"></textarea>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 ">
                <div className="flex items-center">
                <InputBox value={optionA} placeholder="Option A"  setState={setOptionA}/>
                    <input type="checkbox"  
                        onChange={()=>{
                            setTick(1); 
                            setCorrectOption(optionA)
                        }}
                        checked={tick===1}
                        
                        className="w-4 h-4 bg-gray-50 border-slate-300 rounded  "></input>
                </div>
                <div className="flex items-center">
                <InputBox value={optionB} placeholder="Option B"  setState={setOptionB}/>
                    <input type="checkbox"  
                        onChange={()=>{
                            setTick(2); 
                            setCorrectOption(optionB)
                        }}
                        checked={tick===2}
                        className="w-4 h-4 bg-gray-50 border-slate-300 rounded  "></input>                   
                </div>
                <div className="flex items-center">
                <InputBox value={optionC} placeholder="Option C"  setState={setOptionC}/>
                    <input type="checkbox"  
                        onChange={()=>{
                            setTick(3); 
                            setCorrectOption(optionC)
                        }}
                        checked={tick===3}
                        className="w-4 h-4 bg-gray-50 border-slate-300 rounded  "></input>                    
                </div>
                <div className="flex items-center">
                    <InputBox value={optionD} placeholder="Option D"  setState={setOptionD}/>
                    <input type="checkbox"  
                        onChange={()=>{
                            setTick(4); 
                            setCorrectOption(optionD)
                        }}
                        checked={tick===4}
                        className="w-4 h-4 bg-gray-50 border-slate-300 rounded  "></input>                   
                </div>
            </div>
            <div className=" flex">
                <div>
                <Button onClick={()=>{}} children={"Save"}/>
                </div>
                    
                <div className="mx-2">
                <Button onClick={()=>{
                    setQuestion("");
                    setCorrectOption("");
                    setOptionA("");
                    setOptionB("");
                    setOptionC("");
                    setOptionD("");
                    }} children={"Reset"}/>
                </div>
            </div>
        </div>
    )
}