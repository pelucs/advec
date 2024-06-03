'use client'

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuCollapsible } from "@/components/menu-collapsible";
import { 
  ChevronsLeft, 
  ChevronsRight, 
  Home, 
  User 
} from "lucide-react";

import logotipoAdvecBranca from '@/assets/logotipo-advec-branca.png';
import logoAdvecBranca from '@/assets/logo-advec-branca.png';

export function Sidebar(){

  const [open, setOpen] = useState<boolean>(true);

  return(
    <div className={clsx("h-screen border-r flex flex-col justify-between sticky top-0 left-0 transition-all", {
      "w-60": open,
      "w-16": !open
    })}>
      <div>
        <div className={clsx("px-3 flex items-center gap-1 border-b", {
          "h-16 flex-row justify-between": open,
          "h-24 flex-col-reverse justify-center": !open,
        })}>
          <div>
            <Image 
              alt="Logo Advec"
              src={logotipoAdvecBranca} 
              className={clsx("w-[160px] transition-all duration-150", {
                "flex scale-100": open,
                "hidden scale-0": !open
              })}
            />

            <Image 
              alt="Logo Advec"
              className={clsx("w-[350px] transition-all", {
                "flex scale-100": !open,
                "hidden scale-0 duration-500": open
              })}
              src={logoAdvecBranca} 
            />
          </div>

          <Button 
            size={"icon"} 
            className="size-8"
            variant="secondary" 
            onClick={() => setOpen(!open)} 
          >
            <ChevronsRight className={clsx("size-4", {
              "rotate-180": open,
              "rotate-0": !open
            })}/>
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