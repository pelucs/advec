import { ButtonTheme } from "@/components/button-theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Search, Upload } from "lucide-react";
import Link from "next/link";

export function Header(){
  return(
    <div className="w-full h-16 px-5 border-b flex items-center justify-between">
      <span>Dom, 14/04</span>

      <div className="flex items-center gap-4">
        <div className="h-8 px-3 flex items-center gap-2 border rounded text-xs dark:bg-black">
          <Search className="size-4 text-muted-foreground"/>

          <input 
            placeholder="Pesquise um vídeo"
            className="h-full bg-transparent outline-none"
          />
        </div>

        <Separator orientation="vertical" className="h-5"/>
        
        <Button asChild size={"sm"} className="button-theme gap-2 rounded">
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