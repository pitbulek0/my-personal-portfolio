"use client";

import {ReactElement, useState} from "react";

import BackIcon from "./menu_interaction.svg";
import Image from "next/image";

export function MainNavigation(props: {children: ReactElement[]}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className='flex items-start justify-between gap-[3%] px-8 py-4 md:justify-center'>
      <div className={`flex md:flex-row ${isOpen ? "flex-col" : "hidden md:flex"}`}>
        {props.children}
      </div>

      <button onClick={() => setOpen(!isOpen)} className='ml-auto p-2 md:hidden'>
        <Image src={BackIcon} alt='Back' className='mx-[5%]' />
      </button>
    </nav>
  );
}

export function NavigationItem(props: {label: string; link: string}) {
  return (
    <a href={props.link} className='group relative inline-block px-3 py-2 text-white'>
      <div className='inline-block after:absolute after:bottom-0 after:left-0 after:hidden after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-[250ms] after:ease-out group-hover:after:origin-bottom-left group-hover:after:scale-x-100 md:after:block'>
        {props.label}
      </div>
    </a>
  );
}
