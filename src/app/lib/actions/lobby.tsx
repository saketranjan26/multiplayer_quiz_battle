"use server"
import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth"
import { pusherServer } from "../pushar"
import { authOptions } from "../auth"
import { gameManager } from "../store"

const prisma = new PrismaClient()


export const joinLobby = async(quizId:string)=>{
  const session = await getServerSession(authOptions)
  const user = await prisma.user.findFirst({
    where: {
      id: session?.user?.id
    }
  })
  if (user){
    const success = gameManager.addPlayer(quizId, user.email);
    if(success){
     await pusherServer.trigger(quizId, 'incoming-player', user.email)
      console.log("incoming-player event published")
    }else{
      console.log("error while adding the player to in-memory state ")
    }
    const players =  gameManager.getPlayers(quizId)
    return players
  }
}

export const launchLobby = async (quizId:string)=>{
  const session = await getServerSession(authOptions)
  const user = await prisma.user.findFirst({
    where: {
      id: session?.user?.id
    }
  })
  if (user){
    const success = gameManager.addGame({id:quizId,players:[]})
    if(success){
      gameManager.addPlayer(quizId, user.email);
    }
    const players =  gameManager.getPlayers(quizId)
    return players
  }
}

export const getPrePlayers = (quizId:string)=>{
  const players =  gameManager.getPlayers(quizId)
    return players

}
// triggerLobby => which will trigger the event, add the player and return player
// launchLobby => which will addGame, add the player and return player -> called by author only
// joinLobby => which will call triggerLobby and return players
// rename triggerLobby as join lobby and remove joinLobby function



export const leaveLobby = async (quizId: string) => {
  const session = await getServerSession(authOptions)
  const user = await prisma.user.findFirst({
    where: {
      id: session?.user?.id
    }
  })
  if (user) {
    gameManager.removePlayer(quizId, user.email)
    pusherServer.trigger(quizId, 'outgoing-player', user.email)
  }
}
