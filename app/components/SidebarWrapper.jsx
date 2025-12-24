"use client";

import Sidebar from "./Sidebar";
import { usePathname} from 'next/navigation';

export default function SidebarWrapper(){
    const pathname = usePathname();
    const hideSIdebar = pathname === './login' || pathname === '/signup';

    if (hideSidebar) return null;
    return <Sidebar />;
}
