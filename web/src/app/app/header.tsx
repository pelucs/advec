import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ButtonTheme } from "@/components/button-theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";

export function Header(){
  return(
    <div className="w-full h-16 px-5 border-b flex items-center justify-between">
      <span>Dom, 14/04</span>

      <div className="flex items-center gap-4">
        <Input placeholder="Pesquise um vídeo" className="w-[250px]"/>

        <Separator orientation="vertical" className="h-5"/>
        
        <Button asChild size={"sm"} className="gap-2">
          <Link href="/app/admin">
            <Upload className="size-4"/>

            Upload Vídeo
          </Link>
        </Button>

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