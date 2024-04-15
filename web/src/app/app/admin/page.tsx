import { Search } from "lucide-react";
import { Header } from "../header";
import { Sidebar } from "../sidebar";
import { Button } from "@/components/ui/button";
import { TablePublishedVideos } from "./table-published-videos";
import Link from "next/link";

export default () => {
  return(
    <div className="flex items-start">
      <Sidebar/>

      <div className="flex-1">
        <Header/>

        <div className="p-7">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Área admin</h1>
            <span className="text-muted-foreground">Ferramentas exclusivas para administradores</span>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <h1 className="text-lg">Vídeos publicados</h1>
                
                <div className="w-60 h-8 px-3 flex items-center gap-2 border rounded text-xs bg-black">
                  <Search className="size-4 text-muted-foreground"/>

                  <input 
                    placeholder="Pesquise um vídeo"
                    className="flex-1 h-full bg-transparent outline-none"
                  />
                </div>
              </div>

              <Button asChild className="button-theme" size={"sm"}>
                <Link href="/app/admin/novo-video">
                  + Add Vídeo
                </Link>
              </Button>
            </div>

            <TablePublishedVideos/>
          </div>
        </div>
      </div>
    </div>
  );
}