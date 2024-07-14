
import { PrismaClient } from "@prisma/client";
interface PageProps {
    params: {
      quizId: string
    }
  }
  const prisma = new PrismaClient();

 export default async function Arena({params}:PageProps){
    const {quizId} = params;

        const quiz = await prisma.quiz.findFirst({
            where:{
                id:quizId                
            }
        })

    return (
        
        <>
            <div className="bg-slate-200 w-full">
                <div className=" rounded-lg shadow-lg bg-slate-400 mx-3 h-auto">
                    <div className="text-3xl flex  font-medium mx-3 my-4">
                        <div className="text-slate-700">
                            Name of quiz:
                        </div>
                        <div className="mx-3 text-slate-600">
                            {quiz?.name}
                        </div>             
                    </div>
                    <Detail name="Quiz's Id" detail={quiz?.id} />
                    <Detail name="Duration of Quiz" detail={quiz?.quizDurationHour+" hr  "+quiz?.quizDurationMin+" min"}/>
                    <Detail name="Number of Questions" detail={quiz?.numberOfQuestion}/>
                </div>
            </div>
        </>
    )
}
interface Props{
    name:string,
    detail:string | undefined | number
}

function Detail({name,detail}:Props){
    return (
        <>
            <div className="text-xl flex  font-medium mx-3 my-2">
                <div className="text-slate-700">
                    {name}:
                </div>
                <div className="mx-3 text-slate-600">
                    {detail}
                </div>             
            </div>
        </>
    )
}
