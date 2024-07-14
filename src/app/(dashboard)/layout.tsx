import { SidebarItem } from "@/components/sidebarItem";
import { ReactNode } from "react";

export default function Layout({
    children,
}:{
    children:ReactNode
}){
    return(
        <div>
            <div className="flex">
                <div className="w-60 border-r border-slate-300 min-h-screen  pt-12">
                    <SidebarItem href="/home" title="Home" icon/>
                    <SidebarItem href="/createQuiz" title="Create Quiz" icon/>
                    <SidebarItem href="/more" title="More" icon/>
                </div>
                {children}
            </div>  
        </div>
    )
}