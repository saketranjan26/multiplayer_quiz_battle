import { MouseEventHandler, ReactNode } from "react"

export const Button = (
    {
        onClickfunction,
        children
    }:{
        onClickfunction:MouseEventHandler<HTMLButtonElement>,
        children:ReactNode
    }
) =>{
    return (
        <div>
            <button onClick={onClickfunction}  className="rounded-md bg-slate-500 px-8 mt-4 py-2 w-full  font-semibold text-white  hover:bg-slate-600 ">
                {children}
            </button>
        </div>
    )
}