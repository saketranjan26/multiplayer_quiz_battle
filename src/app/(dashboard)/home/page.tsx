import { getQuizes } from "@/app/lib/actions/createQuiz";
import { authOptions } from "@/app/lib/auth";
import JoinQuiz from "@/components/joinQuiz";
import QuizLibrary from "@/components/quizLibrary";
import { getServerSession } from "next-auth";


export default async function Home(){
    const quizes =  await getQuizes();
    const session = await getServerSession(authOptions)

    return(
        <>
            <div>
                <JoinQuiz/>    
                <div className="text-3xl my-3 text-slate-600 subpixel-antialiased font-semibold mx-2">
                    Your Quiz Library
                </div>
                <div className=" mx-2 py-1 grid grid-cols-3 aspect-auto overflow-hidden border  border-slate-300 rounded-md bg-slate-200">
                    <div className=" mx-5 font-medium aspect-auto overflow-hidden text-lg text-slate-600">
                        Name
                    </div>
                    <div className=" font-medium flex justify-center aspect-auto overflow-hidden text-lg text-slate-600">
                        Id
                    </div>
                    <div className=" font-medium  flex justify-center aspect-auto overflow-hidden text-lg text-slate-600">
                        Actions
                    </div>
                </div>
                <QuizLibrary userId={session.user.id} quiz={quizes}/>           
            </div>
        </>
    )
}
