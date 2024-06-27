"use client"

import { useState } from "react";
import InputBox from "./inputBox";
import NumberInput from "./numberInput";
import { Button } from "./button";
import { useSession } from "next-auth/react";
import  { PrismaClient } from "@prisma/client";


export default function CreateQuiz(){
    const [quizName, setQuizName] = useState("quiz")
    const [hours,setHours] = useState(0)
    const [minutes,setMinutes] = useState(10)
    const [questionNumber,setQuestionNumber]= useState(5)
    console.log(quizName)
   
    return (
        <div>
            <div className=" mx-auto aspect-auto overflow-hidden border shadow-xl border-slate-300 rounded-xl w-auto h-auto bg-slate-200 ">
                <div className=" text-3xl px-3 font-medium font-mono border border-b-slate-300 rounded">
                    Create your quiz 
                </div>            
                <div className=" pt-3 flex-row">
                    <InputBox label="Name" placeholder="Your quiz name" setQuizName={setQuizName}/>
                    <label  className="block mb-2 px-3 font-medium text-slate-800">Select no. of questions </label>
                        <NumberInput para="Please select between 5-30." number={questionNumber}  setNumber={setQuestionNumber}/>
                    <label  className="block mb-2 mt-4 px-3 font-medium text-slate-800">Select quiz duration </label>
                    <div className="flex ">
                        <NumberInput para="Hours" number={hours} setNumber={setHours}/>
                        <div className="ml-4">
                            <NumberInput para="Minutes" number={minutes} setNumber={setMinutes}/>
                        </div>   
                                        
                    </div>  
                    <Button onClickfunction={createQuiz(quizName,hours,minutes,questionNumber)} children={"Create Quiz"}/>                                          
                </div>  
                                
            </div>            
        </div>
    )
}

async function createQuiz(quizName:string,hours:number,minutes:number,questionNumber:number){
    const user = useSession()
    const prisma = new PrismaClient();

    try{
        const quiz = await prisma.quiz.create({
            data:{
                name:quizName,
                authorId:user.data?.user?.email,
                quizDurationHour:hours,
                quizDurationMin:minutes,
                numberOfQuestion:questionNumber

            }
        })
        return (
            <div>
                quiz created successfully
            </div>
        )
    }catch(e){
        console.log(e)
        return (
            <div>
                problem while creating quiz
            </div>
        )
        
    }

}