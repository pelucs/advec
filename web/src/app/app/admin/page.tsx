import { Search } from "lucide-react";
import { Header } from "../header";
import { Sidebar } from "../sidebar";
import { Button } from "@/components/ui/button";
import { TablePublishedVideos } from "./table-published-videos";
import Link from "next/link";
import { Input } from "@/components/ui/input";

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
                <h1>
                  Vídeos publicados
                </h1>
                
                <Input className="w-[250px]" placeholder="Pesquise um vídeo"/>
              </div>

              <Button asChild size={"sm"}>
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