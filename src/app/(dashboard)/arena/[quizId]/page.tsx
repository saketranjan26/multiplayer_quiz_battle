import { getQuizes } from "@/app/lib/actions/quiz";
import { getQuestions } from "@/app/lib/actions/question";
import { gameManager } from "@/app/lib/store";
import Lobby from "@/components/lobby";
import QuizDetailCard from "@/components/quizDetailCard";

interface PageProps {
  params: {
    quizId: string;
  };
}

export default async function Arena({ params }: PageProps) {
  const { quizId } = params;
  const Questions = await getQuestions(quizId);
 

  return (
    <>
        <div className="bg-slate-50 w-full">
            <QuizDetailCard quizId={quizId} />
            <Lobby quizId={quizId} questions={Questions}/>
        </div>
      
      
    </>
  );
}
