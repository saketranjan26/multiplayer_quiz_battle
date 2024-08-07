import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function QuizDetailCard({ quizId }: { quizId: string }) {
  const quiz = await prisma.quiz.findFirst({
    where: {
      id: quizId,
    },
  });
  return (
    <>
      <div className="bg-slate-50 w-full">
        <div className="flex flex-col justify-center">
          <div className="space-y-4 mx-3 mt-3 flex justify-center">
            <h1 className="text-3xl font-bold">Welcome to the Quiz Lobby</h1>
          </div>

          <div className="flex justify-center my-4">
            <div className=" w-full max-w-md p-6 grid gap-6 border shadow-xl border-slate-300 bg-slate-300 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <PuzzleIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-semibold">{quiz?.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    ID: {quiz?.id}
                  </p>
                </div>
              </div>
              <div className="grid gap-2">
                <Detail name="No. of Questions" detail={quiz?.numberOfQuestion} />
                <Detail name=" Quiz Duration"detail={`${quiz?.quizDurationHour} hour ${quiz?.quizDurationMin} ${" "} minutes`} />
                {/* <Detail name="Marking Scheme" detail={`+4 for correct, -1 for wrong`}/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface Props {
  name: string;
  detail: string | undefined | number;
}

function Detail({ name, detail }: Props) {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">{name}</p>
        <p>{detail}</p>
      </div>
    </>
  );
}

function PuzzleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  );
}
