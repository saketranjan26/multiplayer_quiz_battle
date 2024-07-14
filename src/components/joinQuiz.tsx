"use client"
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";

export default function JoinQuiz(){
    const router = useRouter();
    let quizId ="";
    
    return (
        <>
            <div className="my-3 mx-2">
                <div className="text-3xl  text-slate-600 subpixel-antialiased font-semibold ">
                    Join Quiz Battle
                </div>
                <div className=" flex " >
                    <input onChange={(e) => quizId=e.target.value} className="border border-slate-300 bg-slate-100 text-md rounded-lg w-60 p-2.5 m-3" placeholder="Enter Quiz Id "></input>
                    <Button children={"Join" } onClick={()=>{router.push(`/arena/${quizId}`)}}/>
                </div>
                
            </div>
        </>
    )
}