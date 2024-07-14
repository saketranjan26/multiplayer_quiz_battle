"use client"
import { useState } from "react";
import InputBox from "@/components/inputBox";
import NumberInput from "@/components/numberInput";
import { Button } from "@/components/button";
import {createQuiz} from "@/app/lib/actions/createQuiz";
import { useRouter } from "next/navigation";
import CreateQuestion from "@/components/createQuestion";

export default  function CreateQuiz () {
const [quizName, setQuizName] = useState(String)
const [hours,setHours] = useState(0)
const [minutes,setMinutes] = useState(10)
const [numberOfQuestions,setNumberOfQuestions]= useState(5)
const [questionComponentRender,setQuestionComponentRender] = useState(false)
const [quizComponentRender,setQuizComponentRender] =useState(true)
const router = useRouter();


    return (
        <>
            <div className="w-full h-auto">
                {quizComponentRender && (
                    <div className="flex justify-center w-full h-auto my-4">
                        <div>                       
                            <div className=" mx-auto aspect-auto overflow-hidden border shadow-xl border-slate-300 rounded-xl w-full h-auto bg-slate-200 ">
                                <div className="text-3xl text-slate-600 px-3 font-medium font-mono border border-b-slate-300 rounded">
                                    Create your quiz 
                                </div>            
                                <div className=" pt-3 flex-row">
                                    <div className="mx-3">
                                    <InputBox value={quizName} label="Name" placeholder="Your quiz name" setState={setQuizName}/>
                                    </div>                            
                                    <label  className="block mb-2 px-3 font-medium text-slate-800">Select no. of questions </label>
                                        <NumberInput para="Please select between 1-200" number={numberOfQuestions}  setNumber={setNumberOfQuestions}/>
                                    <label  className="block mb-2 mt-4 px-3 font-medium text-slate-800">Select quiz duration </label>
                                    <div className="flex ">
                                        <NumberInput para="Hours" number={hours} setNumber={setHours}/>
                                        <div className="ml-4">
                                            <NumberInput para="Minutes" number={minutes} setNumber={setMinutes}/>
                                        </div>                                          
                                    </div>  
                                    <Button onClick={async ()=>{
                                        const quiz = await createQuiz(quizName,hours,minutes,numberOfQuestions)
                                        //router.push("/dashboard")
                                        localStorage.setItem("quizId",quiz)
                                        setQuestionComponentRender(true)
                                        setQuizComponentRender(false)
                                        return(
                                            <div>
                                                quiz created successfully
                                            </div>
                                            )
                                        }} children={"Create Quiz"}/>                                          
                                </div>                                 
                            </div>           
                        </div>
                    </div>
                )}
                {questionComponentRender && (
                <>
                    <div className="text-xl font-semibold text-slate-700 mx-3">
                        Set your questions for {quizName} here (tick the correct option):
                    </div>
                    <div className=" mx-3 mt-5 aspect-auto overflow-hidden border shadow-xl border-slate-300 rounded-md w-full h-auto bg-slate-200 ">
                        {
                            Array.from({length:numberOfQuestions},(_,id)=>(
                                <CreateQuestion numberOfQuestions={id+1}/>
                            ))
                        }
                        
                        
                    </div>
                    <Button children="Save the Quiz" onClick={()=>{router.push("/dashboard")}}/>
                </>
                )}             
            </div>          
        </>        
    )
}


