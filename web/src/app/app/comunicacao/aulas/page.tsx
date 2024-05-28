import { Button } from "@/components/ui/button";
import { Header } from "../../header";
import { Sidebar } from "../../sidebar";
import { 
  Book, 
  Link2,
  CheckCircle,
  PanelLeftOpen, 
} from "lucide-react";

import Link from "next/link";

export default () => {
  return(
    <div className="flex items-start h-screen">
      <Sidebar/>

      <div className="flex-1">
        <Header/>

        <div className="flex items-start relative">
          <div className="flex-1 h-[calc(100vh-64px)] overflow-y-auto">
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
              <div>
                <div className="flex justify-between items-start gap-5">
                  <h1 className="text-2xl font-bold leading-tight">
                    Gravações e edições adasdasdas asdasda asdas asd asdasd
                  </h1>

                  <Button className="gap-2 bg-green-500 text-white">
                    <CheckCircle className="size-4"/>

                    Concluir aula
                  </Button>
                </div>

                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ad illo corrupti 
                  omnis perferendis corporis delectus cupiditate ut? Optio asperiores ab deserunt laborum 
                  in provident dignissimos tenetur necessitatibus, ea expedita.
                </p>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <span className="size-12 rounded-full flex items-center justify-center bg-orange-500">
                  PL
                </span>

                <div className="flex flex-col">
                  <span className="font-lg font-semibold">
                    Pedro Lucas
                  </span>

                  <span className="text-muted-foreground">
                    Voluntário (Líder Creative - Connect)
                  </span>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <Button variant={"outline"} className="h-16 gap-2 text-lg">
                  <Book className="size-6"/>

                  Material Complementar
                </Button>
              </div>
            </div>
          </div>

          <div className="w-[340px] h-[calc(100vh-64px)] py-7 pl-7 px-4 border-l">
            <div className="h-full pr-3 flex flex-col gap-4 overflow-y-auto">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Conteúdos</h1>

                <Button variant={"secondary"} size={"icon"}>
                  <PanelLeftOpen className="size-4"/>
                </Button>
              </div>

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