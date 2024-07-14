"use server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createQuestion(question:string,optionA:string,optionB:string,optionC:string,optionD:string,correctOption:string,quizId:any){
    
    try{
        const createdQuestion = await prisma.question.create({
            data:{
                question:question,
                optionA:optionA,
                optionB:optionB,
                optionC:optionC,
                optionD:optionD,
                correctOption:correctOption,
                quizId:quizId
            }
        })
        return {
            createdQuestion
        }
    }catch(e){
        console.log(e)
        return{
            message:"problem creating question",           
        }
    } 
}