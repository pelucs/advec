import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ButtonTheme } from "@/components/button-theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";
import Image from "next/image";

import logoAdvecBranca from '@/assets/logo-advec-branca.png';

export function Header(){
  return(
    <div className="w-full h-16 px-5 border-b flex items-center justify-between">
      <div className="h-full flex items-center justify-center">
        <span className="hidden md:block">
          Dom, 14/04
        </span>

        <Link href="/app">
          <Image 
            alt="Logo Advec"
            className="w-[30px] block md:hidden"
            src={logoAdvecBranca} 
          />
        </Link>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden md:flex">
          <Input 
            placeholder="Pesquise um vídeo" 
            className="w-[250px]"
          />

          <Separator 
            orientation="vertical" 
            className="h-5"
          />
        </div>
        
        <div>
          <Button 
            asChild 
            size={"sm"} 
            className="gap-2 hidden md:flex"
          >
            <Link href="/app/admin">
              <Upload className="size-4"/>

              Upload Vídeo
            </Link>
          </Button>

          <Button 
            asChild 
            size={"icon"} 
            className="size-8 gap-2 md:hidden"
          >
            <Link href="/app/admin">
              <Upload className="size-4"/>
            </Link>
          </Button>
        </div>

        <Separator orientation="vertical" className="h-5"/>

        <ButtonTheme/>

        <Avatar className="size-8">
          <AvatarImage src="https://github.com/pelucs.png"/>
          <AvatarFallback>PL</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}