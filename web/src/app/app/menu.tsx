'use client'

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import logoAdvecBranca from '@/assets/logo-advec-branca.png';
import logotipoAdvecBranca from '@/assets/logotipo-advec-branca.png';

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { 
  ChevronsRight, 
  HeartHandshake, 
  Home, 
  Images, 
  Landmark, 
  User,
  Menu as MenuIcon
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface MenuProps {
  style: "desktop" | "mobile";
}
interface MenuForStyle {
  open: boolean;
  setOpen: (newState: boolean) => void;
}

export function Menu({ style }: MenuProps){

  const [open, setOpen] = useState<boolean>(true);

  return(
    <div className={style === "desktop" ? "sticky top-0 left-0" : ""}>
      {style === "desktop" ? (
        <MenuDesktop open={open} setOpen={setOpen}/>
      ) : (
        <MenuMobile open={open} setOpen={setOpen}/>
      )}
    </div>
  );
}

function MenuDesktop({ open, setOpen }: MenuForStyle) {
  return(
    <div className="w-60 h-screen border-r hidden md:flex flex-col justify-between transition-all">
      <div>
        <div className="h-16 px-3 flex items-center justify-between border-b">
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
          <span className="mt-2 block text-xs uppercase font-semibold text-muted-foreground">Menu</span>

          <nav className="mt-2">
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
              <Link href="/nossos-pilares">
                <Landmark className="w-4 h-4"/>

                {open && "Nossos pilares"}
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
          </nav>

          <span className="mt-4 block text-xs uppercase font-semibold text-muted-foreground">Departamentos</span>

          <nav className="mt-2">
            <Button 
              asChild 
              variant="ghost" 
              className={clsx("w-full py-5 transition-all hover:text-orange-500", {
                "justify-start gap-2 hover:px-3 px-0": open,
                "px-0": !open
              })}
            >
              <Link href="/app">
                <Images className="w-4 h-4"/>

                {open && "Comunicação"}
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
                <HeartHandshake className="w-4 h-4"/>

                {open && "UNA"}
              </Link>
            </Button>
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

function MenuMobile({ open, setOpen }: MenuForStyle) {
  return(
    <div className="block md:hidden">
      <Popover>
        <Button 
          asChild
          size={"icon"} 
          variant={"secondary"}
        >
          <PopoverTrigger>
            <MenuIcon className="size-4"/>
          </PopoverTrigger>
        </Button>

        <PopoverContent align="start">
          <nav>
            <Link href="">
              Início
            </Link>
          </nav>
        </PopoverContent>
      </Popover>
    </div>
  );
}