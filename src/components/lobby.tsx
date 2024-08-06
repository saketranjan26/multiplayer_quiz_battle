"use client";
import { pusherClient } from "@/app/lib/pushar";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { leaveLobby } from "@/app/lib/actions/lobby";
import { useSession } from "next-auth/react";
import { Question } from "./question";
import { setLazyProp } from "next/dist/server/api-utils";
import { launchQuiz } from "@/app/lib/actions/quiz";

interface LobbyProps {
  quizId: string;
  questions: {
    id: number;
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctOption: string;
    quizId: string;
}[] | undefined
  
}
export default function Lobby({ quizId,questions}: LobbyProps) {
    const router =  useRouter();
    const [players, setPlayers] = useState<string[]>([]);
    const [lobbyRender,setlobbyRender] = useState(true);
    const [questionComponentRender,setQuestionComponentRender] = useState(false)
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

    const handleStartQuiz = ()=>{
      setQuestionComponentRender(true)
      setlobbyRender(false)
    }
    channel.bind("incoming-player", handleIncomingPlayer);
    channel.bind("outgoing-player",handleOutgoingPlayer)
    channel.bind("start-quiz",handleStartQuiz)
    return () => {
      channel.unbind("incoming-player", handleIncomingPlayer);
      channel.unbind("outgoing-player",handleOutgoingPlayer);
      pusherClient.unsubscribe(quizId);
    };
  }, [quizId]);

  useEffect(() => {
    console.log(players);
  }, [players]);
  
  const isAuthor = ()=>{
    const author = localStorage.getItem("userId");
    const authorId = localStorage.getItem("authorId")
    if(author === authorId){
      return(
        <div>
            <Button children="Start Quiz" onClick={async ()=>{setlobbyRender(false);
                                                              setQuestionComponentRender(true);
                                                              await launchQuiz(quizId)}}/>
        </div>
    )
    }else{
      return(
        <div>
            <Button children="Wait for host to start" onClick={()=>{}}/>
        </div>
      )
    }
  }
  
  return (
    <>
      { lobbyRender &&(<div className="mx-2">
        <div className="flex">
          <div className="flex-1 mr-1">
            <Button children="Leave" onClick={async()=>{await leaveLobby(quizId); router.push("/home");}}/>
          </div>      
          <div className="flex-1">
            {isAuthor()}
          </div>
        </div>
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
        )}
      { questionComponentRender && (
        <>
          <div>
          {
            questions?.map((_,i)=>(
            <Question questionNumber={i+1} question={questions[i]} />
            ))}
            </div>
        </>
      )

      }
    </>
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
