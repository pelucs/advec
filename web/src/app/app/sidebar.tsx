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

export function Sidebar(){
  return(
    <div className="w-60 h-screen border-r flex flex-col justify-between sticky top-0 left-0">
      <div>
        <div className="h-16 px-3 flex items-center justify-between border-b">
          <Image 
            alt=""
            className="w-40"
            src={logoAdvecBranca} 
          />

          <Button size={"icon"} variant={'secondary'} className="size-8">
            <ChevronsLeft className="size-4"/>
          </Button>
        </div>

        <div className="px-3 py-4">
          <span className="text-xs uppercase font-semibold text-muted-foreground">Menu</span>

          <nav className="mt-2 space-y-2">
            <Link 
              href="/app" 
              className="py-2 hover:px-3 flex items-center gap-2 rounded hover:bg-secondary transition-all
              hover:text-orange-500"
            >
              <Home className="size-4"/>

              Início
            </Link>

            <Link 
              href="/perfil" 
              className="py-2 hover:px-3 flex items-center gap-2 rounded hover:bg-secondary transition-all
              hover:text-orange-500"
            >
              <User className="size-4"/>

              Perfil
            </Link>

            <MenuCollapsible/>
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