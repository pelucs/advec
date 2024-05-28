'use client'

import Image from "next/image";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MenuCollapsible } from "@/components/menu-collapsible";
import { 
  ChevronsLeft, 
  Home, 
  User 
} from "lucide-react";

import logoAdvecBranca from '@/assets/logotipo-advec-branca.png';
import { useState } from "react";
import clsx from "clsx";

export function Sidebar(){

  const [open, setOpen] = useState<boolean>(true);

  return(
    <div className={clsx("h-screen border-r flex flex-col justify-between sticky top-0 left-0 transition-all", {
      "w-60": open,
      "w-16": !open
    })}>
      <div>
        <div className="h-16 px-3 flex items-center justify-between border-b">
          <Image 
            alt=""
            className="w-40"
            src={logoAdvecBranca} 
          />

          <Button 
            size={"icon"} 
            variant={'secondary'} 
            className="size-8"
            onClick={() => setOpen(!open)}
          >
            <ChevronsLeft className="size-4"/>
          </Button>
        </div>

        <div className="px-3 py-4">
          <span className="text-xs uppercase font-semibold text-muted-foreground">Menu</span>

          <nav className="mt-2 space-y-2">
            <Button 
              asChild 
              variant="ghost" 
              className={clsx("w-full py-5 transition-all hover:text-orange-500", {
                "justify-start gap-2 hover:px-3 px-0": open,
                "px-0": !open
              })}
            >
              <Link href="/app">
                <Home className="w-4 h-4"/>

                {open && "Início"}
              </Link>
            </Button>

            <Button 
              asChild 
              variant="ghost" 
              className={clsx("w-full py-5 transition-all hover:text-orange-500", {
                "justify-start gap-2 hover:px-3 px-0": open,
                "px-0": !open
              })}
            >
              <Link href="/app">
                <User className="size-4"/>

                {open && "Perfil"}
              </Link>
            </Button>

            <MenuCollapsible openSidebar={open}/>
          </nav>
        </div>
      </div>

      <div className="px-3 py-4 border-t">
        <Button variant={"destructive"} className="w-full">
          Encerrar sessão
        </Button>
      </div>
    </div>
  );
}