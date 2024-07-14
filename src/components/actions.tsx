"use client"
import { deleteQuiz } from "@/app/lib/actions/createQuiz"
import { Button } from "./button"
import { useRouter } from "next/navigation"

export default  function Actions ({quizId}:{quizId:string}){
    const router = useRouter();
    return (
        <>
            <div className=" px-2 lg:flex ">
                <div className="px-2 ">
                    <Button children={"Delete"} onClick={ async ()=>{
                                             const res = await deleteQuiz(quizId)
                                           }}/>
                </div>
                <div >
                    <Button children={"Launch"} onClick={ ()=>{
                                            router.push(`/arena/${quizId}`)
                                           }}/>
                </div>
            </div>
        </>
    )
}