"use server"

import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { pusherServer } from "../pushar";

const prisma = new PrismaClient();


export  async function createQuiz(quizName:string,hours:number,minutes:number,questionNumber:number){
    const session= await getServerSession(authOptions)
    

    try{
        const quiz = await prisma.quiz.create({
            data:{
                name:quizName,
                authorId: session.user.id,
                quizDurationHour:hours,
                quizDurationMin:minutes,
                numberOfQuestion:questionNumber

            }
        })
        pusherServer.trigger(session.user.id,'created-quiz',quiz)
        
        return ( quiz.id
            
        )
    }catch(e){
        console.log(e)
        return (
            "problem while creating quiz"   
        )       
    }
}


export async function getQuizes(){
    
    const session = await getServerSession(authOptions);

    try{
        const quizes = await prisma.quiz.findMany({
            where:{
                authorId: session.user.id
            }
        })
        return quizes
    }catch(e){
        console.log(e)
        return [{name:"Can't able to get your quiz",status:false,id:""}]
    }
}

export async function deleteQuiz(quizId:string){
    const session = await getServerSession(authOptions)

    try{
        const quiz = await prisma.quiz.delete({
            where:{
                id:quizId
            }
        })
        pusherServer.trigger(session.user.id,'deleted-quiz',quizId)
        return {
            message:"deleted successfully"
        }
    }catch(e){
        console.log(e)
        return {
            message:"problem occured while deleting"
        }
    }
}