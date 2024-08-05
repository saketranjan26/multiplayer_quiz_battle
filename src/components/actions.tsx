"use client"
import { deleteQuiz } from "@/app/lib/actions/createQuiz"
import { Button } from "./button"
import { useRouter } from "next/navigation"
import {  launchLobby } from "@/app/lib/actions/lobby";
import { useSession } from "next-auth/react";
import { gameManager } from "@/app/lib/store";
import { json } from "stream/consumers";

export default  function Actions ({quizId}:{quizId:string}){
    const router = useRouter();
    const session = useSession();
    

    return (
        <>
            <div className=" px-2 lg:flex ">
                <div className="px-2 ">
                    <Button children={"Delete"} onClick={ async ()=>{
                                             const res = await deleteQuiz(quizId)
                                           }}/>
                </div>
                <div >
                    <Button children={"Launch"} onClick={ async()=>{
                                            
                                            const players = await launchLobby(quizId);
                                            const playerString = JSON.stringify(players)
                                            /*localstorage saves only string that is why we stringified the 
                                            array and will use JSON.parse() method to convert it back to array
                                            */ 
                                            localStorage.setItem("prePlayers",playerString)
                                            router.push(`/arena/${quizId}`)
                                           }}/>
                </div>
            </div>
        </>
    )
}