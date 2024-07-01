"use client"
import { useState } from "react";
import InputBox from "./inputBox";
import NumberInput from "./numberInput";
import { Button } from "./button";
import {createQuiz} from "@/app/lib/actions/createQuiz";
import { useRouter } from "next/navigation";

export default function CreateQuiz(){
    const [quizName, setQuizName] = useState("quiz")
    const [hours,setHours] = useState(0)
    const [minutes,setMinutes] = useState(10)
    const [questionNumber,setQuestionNumber]= useState(5)
    const router = useRouter();
   
    return (
        <div>
            <div className=" mx-auto aspect-auto overflow-hidden border shadow-xl border-slate-300 rounded-xl w-full h-auto bg-slate-200 ">
                <div className=" text-3xl text-slate-600 px-3 font-medium font-mono border border-b-slate-300 rounded">
                    Create your quiz 
                </div>            
                <div className=" pt-3 flex-row">
                    <InputBox value={quizName} label="Name" placeholder="Your quiz name" setState={setQuizName}/>
                    <label  className="block mb-2 px-3 font-medium text-slate-800">Select no. of questions </label>
                        <NumberInput para="Please select between 1-200." number={questionNumber}  setNumber={setQuestionNumber}/>
                    <label  className="block mb-2 mt-4 px-3 font-medium text-slate-800">Select quiz duration </label>
                    <div className="flex ">
                        <NumberInput para="Hours" number={hours} setNumber={setHours}/>
                        <div className="ml-4">
                            <NumberInput para="Minutes" number={minutes} setNumber={setMinutes}/>
                        </div>                                          
                    </div>  
                    <Button onClick={async ()=>{
                        const quiz = await createQuiz(quizName,hours,minutes,questionNumber)
                        router.push("/dashboard")
                        return(
                            <div>
                                quiz created successfully
                            </div>
                            )
                        }} children={"Create Quiz"}/>                                          
                </div>                                 
            </div> 
            <div className="w-full bg-red-900">
                hello
            </div>           
        </div>
    )
}
