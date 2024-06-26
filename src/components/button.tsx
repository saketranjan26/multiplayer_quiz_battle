"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { ReactNode } from "react";

export  const Button = ({children}:{children:ReactNode}) => {
    const session = useSession();
    return(
        <button onClick = { async () => {session.status ==="authenticated" ? await signOut({callbackUrl:"/"}) : await signIn(undefined,{callbackUrl:'/dashboard'})}}type="button" className="rounded-md bg-black px-8 py-2 text-base font-semibold text-white  hover:bg-black/80 ">
                    {children ? children :session.status ==="authenticated" ? "Logout" :"Signin"}
                </button>
    )

}