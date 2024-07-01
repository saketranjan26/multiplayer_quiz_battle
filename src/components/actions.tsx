"use client"
import { deleteQuiz } from "@/app/lib/actions/createQuiz"
import { Button } from "./button"

export default  function Actions ({quizId}:{quizId:string}){
    return (
        <>
            <div className="flex px-2 ">
                <div className="px-2 ">
                <Button children={"Delete"} onClick={ async ()=>{
                                             const res = await deleteQuiz(quizId)
                                           }}/>
                </div>
                <div >
                <Button children={"Delete"} onClick={ async ()=>{
                                             const res = await deleteQuiz(quizId)
                                           }}/>
                </div>
                <div className="px-2">
                <Button children={"Delete"} onClick={ async ()=>{
                                             const res = await deleteQuiz(quizId)
                                           }}/>
                </div>
            
            </div>
        </>
    )
}