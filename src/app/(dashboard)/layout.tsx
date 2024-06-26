import { SidebarItem } from "@/components/sidebaeItem";
import { ReactNode } from "react";

export default function Layout({
    children,
}:{
    children:ReactNode
}){
    return(
        <div>
            <div className="flex">
                <div className="w-72 border-r border-slate-300 min-h-screen mr-4 pt-20">
                    <SidebarItem href="/dashboard" title="Home" icon/>
                    <SidebarItem href="/battles" title="Battles" icon/>
                    <SidebarItem href="/more" title="More" icon/>
                </div>
                {children}
            </div>  
        </div>
    )
}