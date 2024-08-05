"use client";
import { pusherClient } from "@/app/lib/pushar";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { leaveLobby } from "@/app/lib/actions/lobby";

interface LobbyProps {
  quizId: string;
  
}
export default function Lobby({ quizId}: LobbyProps) {
    const router =  useRouter();
    const [players, setPlayers] = useState<string[]>([]);
    console.log("list of prePlayer",players)

    useEffect(() => {
    const channel = pusherClient.subscribe(quizId);
    const prePlayerString  = localStorage.getItem("prePlayers") || ""
    setPlayers(JSON.parse(prePlayerString))
    
    const handleIncomingPlayer = (playerId: string ) => {
      setPlayers((prev) => [...prev, playerId]);
    };

    const handleOutgoingPlayer = (id:string)=>{
        setPlayers((prev)=> prev.filter((playerId)=> playerId !==id))
    }

    channel.bind("incoming-player", handleIncomingPlayer);
    channel.bind("outgoing-player",handleOutgoingPlayer)

    return () => {
      channel.unbind("incoming-player", handleIncomingPlayer);
      channel.unbind("outgoing-player",handleOutgoingPlayer);
      pusherClient.unsubscribe(quizId);
    };
  }, [quizId]);

  useEffect(() => {
    console.log(players);
  }, [players]);
  
  return (
    <div className="mx-2">
        <Button children="Leave" onClick={async()=>{await leaveLobby(quizId); router.push("/home");}}/>
          <div className="text-xl font-semibold mt-3 mb-1">
              Participants
          </div>
          <div>
            {players.map((player, i) => (
              <div key={i}>
                <Quiz name={player}/>
              </div>
            ))}
          </div>
     
    </div>
  );
}

function Quiz({name}:{ name:string}) {
  return (
    <div className="border rounded-md my-1 aspect-auto bg-slate-200 overflow-hidden border-slate-300">
      <div className="mx-4 text-slate-600">
        
          <div className="font-semibold text-base text-black-500 aspect-auto overflow-hidden">
            {name}
          </div>
        
      </div>
    </div>
  );
}
