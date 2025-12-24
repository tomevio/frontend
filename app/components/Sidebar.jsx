"use client";
import Link from 'next/link' ;
import { BookSearch, Heart, LibraryBig, UserRoundCheck,UserStar, Settings ,X, Menu } from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {

    
    const navItems = [
    { label: "Discover", icon: BookSearch, href: "/" },
    { label: "Favourites", icon: Heart, href: "/" },
    { label: "Shelf", icon: LibraryBig, href: "/" },
    { label: "Following", icon: UserRoundCheck, href: "/" },
    { label: "My Reviews", icon: UserStar, href: "/" },
    { label: "Settings", icon: Settings, href: "/" },
    ];
    const navItemsMobile = [
    { label: "Discover", icon: BookSearch, href: "/" },
    { label: "Favourites", icon: Heart, href: "/" },
    { label: "Shelf", icon: LibraryBig, href: "/" },
    { label: "Settings", icon: Settings, href: "/" },
    ];


    const [open,setOpen]=useState(false)

    return(
        <>
        {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-grey-50 text-[#3a4443] ">
        <ul className="flex justify-around items-center h-16">
          {navItemsMobile.map(({ label, icon: Icon }) => (
            <li key={label}>
              <Link
                href="/"
                className="flex flex-col items-center text-xs gap-1 hover:text-green-300"
              >
                <Icon size={22} />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

     {/* Desktop */}
        <aside className='hidden md:flex bg-gray-50 p-8 flex-col items-center justify-between text-[#3a4443] font-bold h-screen w-56'>
            <div>
                {/* Logo */ }
                <div className="flex items-center gap-3 mb-10">
                    <img src="logo1.svg" height={55} width={55} alt="Tovio-logo"></img>
                    <h1 className='text-2xl font-bold'>Tomvio</h1>
                </div>

                {/* Nav link */ }
                <div>
                    <ul className='space-y-5'>
                        {navItems.map(({label, icon: Icon, href}) => (
            
                            <li key={label} className='flex items-center gap-3 hover:text-[#d4825f]'>
                                <Icon size={20} />
                                <Link href={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
        </>
    )
}

export default Sidebar