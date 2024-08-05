import  CredentialsProvider  from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import  {PrismaClient}  from "@prisma/client"
import { JWT } from "next-auth/jwt"

const prisma = new PrismaClient()
export const authOptions = {
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                username:{label:"username",type:"text", placeholder:"username"},
                password:{label:"password",type:"password",placeholder:"password"}
            },
            async authorize( credentials:any){

                const hashedPassword = await bcrypt.hash(credentials.password,10)
                
                const user = await prisma.user.findFirst({
                    where:{
                        email: credentials.username
                    }
                })
                if(user){
                    const passwordValidation = await bcrypt.compare(credentials.password,user.password)
                    if(passwordValidation){
                        return {
                            id: user.id,
                            username: user.email

                        }
                    }
                    return null;
                }

                try{
                    const newUser = await prisma.user.create({
                        data:{
                            email:credentials.username,
                            password:hashedPassword,
                            name: null
                        }
                    })
                    return {
                        id: newUser.id,
                        username: newUser.email,
                    }
                }catch(e){
                    console.log(e);
                }
                return null
            }    
        })
    ],
    secret: process.env.JWT_SECRET,
    callbacks:{
         session:({session,token}:{session:any,token:JWT})=>{
            session.user.id = token.sub          
            return session
         }
    }
}

