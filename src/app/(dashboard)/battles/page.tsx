import CreateQuiz from "@/components/createQuiz";
import QuizLibrary from "@/components/quizLibrary";

export default  function Battles  () {


    return (
        <>
            <div className="w-full h-auto">
                <div className="flex justify-center w-full h-auto">
                    <div className="my-4 ">
                        <CreateQuiz/>
                    </div>
                </div>
                <QuizLibrary/>
            </div>
           
        </>
        
    )
}



function createQuiz(){

}