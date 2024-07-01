
import Actions from "./actions";
import { Button } from "./button";
import { deleteQuiz, getQuiz } from "@/app/lib/actions/createQuiz";

export default async function QuizLibrary(){

    const quizes =  await getQuiz();
    
    return (
        <>
            <div>
                <div className="text-3xl my-3 text-slate-600 subpixel-antialiased font-semibold mx-2">
                    Your Quiz Library
                </div>
                <div className=" mx-2 py-1 grid grid-cols-3 aspect-auto overflow-hidden border  border-slate-300 rounded-md bg-slate-200">
                    <div className=" mx-5 font-medium aspect-auto overflow-hidden text-lg text-slate-600">
                        Name
                    </div>
                    <div className=" font-medium flex justify-center aspect-auto overflow-hidden text-lg text-slate-600">
                        Status
                    </div>
                    <div className=" font-medium  flex justify-center aspect-auto overflow-hidden text-lg text-slate-600">
                        Actions
                    </div>
                </div>
                <div>
                    {quizes.map((quizes,i)=>{

                        return(
                            <div key={i} className="border mx-2 aspect-auto bg-slate-50 overflow-hidden   border-slate-300">
                                <div className="mx-4 text-slate-600 ">
                                    <div className="grid grid-cols-3 items-center" >
                                        <div className=" font-medium text-base text-slate-500 aspect-auto overflow-hidden w-auto ">
                                           {quizes.name}
                                        </div>
                                        <div className=" font-medium text-base flex justify-center text-slate-500 aspect-auto overflow-hidden w-auto ">
                                            {quizes.status===false?"Not Launched":"Launched"}
                                        </div>
                                        <div className=" flex font-medium justify-center text-base text-slate-500 aspect-auto overflow-hidden ml-6 w-auto ">
                                           <Actions quizId={quizes.id}/>
                                        </div>                                      
                                    </div>                                                                                                       
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
