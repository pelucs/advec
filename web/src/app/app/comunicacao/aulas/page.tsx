import { Button } from "@/components/ui/button";
import { Header } from "../../header";
import { Sidebar } from "../../sidebar";
import { CheckCircle } from "lucide-react";

import Link from "next/link";

export default () => {
  return(
    <div className="flex items-start h-screen">
      <Sidebar/>

      <div className="flex-1">
        <Header/>

        <div className="flex items-start relative">
          <div className="flex-1">
            <div className="bg-secondary flex justify-center">
              <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                <video 
                  controls 
                  contextMenu="false"
                  draggable="false" 
                  className="w-full"
                  controlsList="nodownload" 
                >
                  <source src="/test.mp4" type="video/mp4"/>
                </video>
              </div>
            </div>

            <div className="p-7">
              <h1 className="text-2xl font-bold">Gravações e edições</h1>
            </div>
          </div>

          <div className="w-[340px] h-[calc(100vh-64px)] py-7 pl-7 px-4 border-l">
            <div className="h-full pr-3 flex flex-col gap-4 overflow-y-auto">
              {Array.from({ length: 8 }).map((_, i) => (
                <Button 
                  asChild
                  variant={"outline"} 
                  className="w-full h-fit py-3"
                >
                  <Link href="" className="w-full">
                    <div className="flex flex-col gap-3 overflow-hidden">
                      <h1 className="text-wrap">
                        Introdução: Conhecendo os módulos de edição
                      </h1>

                      <span className="w-fit rounded py-1 px-2 text-xs flex items-center gap-2 text-white bg-green-500">
                        <CheckCircle className="size-4"/>
                        
                        Concluída
                      </span>
                    </div>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}