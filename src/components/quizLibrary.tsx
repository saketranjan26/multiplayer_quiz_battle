"use client";
import { useEffect, useState } from "react";
import { pusherClient } from "@/app/lib/pushar";
import Actions from "./actions";

interface QuizBaseProps {
  name: string;
  status: boolean;
  id: string;
  authorId: string;
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
  const [quizzes, setQuizzes] = useState<QuizBaseProps[]>(quiz);

  useEffect(() => {
    localStorage.setItem("userId", userId);
    const channel = pusherClient.subscribe(userId);

    const handleIncomingQuiz = (quiz: QuizBaseProps) => {
      setQuizzes((prev) => [...prev, quiz]);
    };
    const handleDeletedQuiz = (deletedQuizId: string) => {
      setQuizzes((prev) => prev.filter((quiz) => quiz.id !== deletedQuizId));
    };

    channel.bind("created-quiz", handleIncomingQuiz);
    channel.bind("deleted-quiz", handleDeletedQuiz);

    return () => {
      channel.unbind("created-quiz", handleIncomingQuiz);
      channel.unbind("deleted-quiz", handleDeletedQuiz);
      pusherClient.unsubscribe(userId);
    };
  }, [userId]);

  return (
    <>
      <div>
        {quizzes.map((quizItem) => (
          <Quiz
            key={quizItem.id}
            name={quizItem.name}
            status={quizItem.status}
            id={quizItem.id}
            authorId={quizItem.authorId}
          />
        ))}
      </div>
    </>
  );
}

function Quiz({ name, id,authorId }: QuizBaseProps) {
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
            <Actions quizId={id} author_id={authorId} />
          </div>
        </div>
      </div>
    </div>
  );
}
