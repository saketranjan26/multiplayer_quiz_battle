"use client"
import { joinLobby} from "@/app/lib/actions/lobby";
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
                    <Button children={"Join" } onClick={async ()=>{
                        const players = await joinLobby(quizId);
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