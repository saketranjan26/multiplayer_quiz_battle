"use client"
import { useEffect, useState } from "react";
import { pusherClient } from "@/app/lib/pushar";
import Actions from "./actions";

interface QuizBaseProps {
  name: string;
  status: boolean;
  id: string;
}

interface QuizProps {
  userId: string;
  quiz: QuizBaseProps[];
}

// interface IncomingQuiz extends QuizBaseProps {
//   authorId: string;
//   quizDurationHour: number;
//   quizDurationMin: number;
//   numberOfQuestion: number;
// }

export default function QuizLibrary({ userId, quiz }: QuizProps) {
  const [incomingQuiz, setIncomingQuiz] = useState<QuizBaseProps[]>([]);

  useEffect(() => {
    const channel = pusherClient.subscribe(userId);
    
    const handleIncomingQuiz = (quiz: QuizBaseProps) => {
      setIncomingQuiz((prev) => [...prev, quiz]);
    };

    channel.bind('incoming-quiz', handleIncomingQuiz);

    return () => {
      channel.unbind('incoming-quiz', handleIncomingQuiz);
      pusherClient.unsubscribe(userId);
    };
  }, [userId]);

  return (
    <>
      <div>
        {incomingQuiz.map((quizItem) => (
          <Quiz
            key={quizItem.id}
            name={quizItem.name}
            status={quizItem.status}
            id={quizItem.id}
          />
        ))}
      </div>
      <div>
        {quiz.map((quizItem) => (
          <Quiz
            key={quizItem.id}
            name={quizItem.name}
            status={quizItem.status}
            id={quizItem.id}
          />
        ))}
      </div>
    </>
  );
}

function Quiz({ name, status, id }: QuizBaseProps) {
  return (
    <div className="border mx-2 aspect-auto bg-slate-50 overflow-hidden border-slate-300">
      <div className="mx-4 text-slate-600">
        <div className="grid grid-cols-3 items-center">
          <div className="font-medium text-base text-slate-500 aspect-auto overflow-hidden w-auto">
            {name}
          </div>
          <div className="font-medium text-base flex justify-center text-slate-500 aspect-auto overflow-hidden w-auto">
            {id}
          </div>
          <div className="flex font-medium justify-center text-base text-slate-500 aspect-auto overflow-hidden ml-6 w-auto">
            <Actions quizId={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
