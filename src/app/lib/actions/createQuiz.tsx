"use server"

import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";


export default async function createQuiz(quizName:string,hours:number,minutes:number,questionNumber:number){
    
    const prisma = new PrismaClient();
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
        
        return ( quiz.id
            
        )
    }catch(e){
        console.log(e)
        return (
            "problem while creating quiz"   
        )       
    }
}