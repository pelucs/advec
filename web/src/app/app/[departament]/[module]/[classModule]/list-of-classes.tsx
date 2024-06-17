import clsx from "clsx";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";
import { useGetClassesByModuleQuery } from "@/graphql/generated";
import { PanelBottomOpen, PanelLeftOpen, PlayCircle } from "lucide-react";
interface ListOfClassesProps {
  style: "desktop" | "mobile";
  module: string;
}
interface ListOfClassesForStyles {
  departament: string;
  module: string;
  open: boolean;
  setOpen: (newState: boolean) => void;
  data: {
    name: string;
    slug: string;
  }[]
}

export function ListOfClasses({ module, style }: ListOfClassesProps) {

  const { departament } = useParams<{ departament: string }>();
  const [open, setOpen] = useState<boolean>(true);

  const { data } = useGetClassesByModuleQuery({
    variables: {
      slug: module
    }
  });

  if(!data || !data.classes){
    return(
      <Skeleton className="w-[340px] h-[calc(100vh-64px)] border-l bg-secondary/50"/>
    )
  }

  return(
    <div>
      {style === "desktop" ? 
        <ListOfClassesForDesktop 
          departament={departament}
          module={module}
          open={open} 
          setOpen={setOpen} 
          data={data.classes}
        /> 
      : 
        <ListOfClassesForMobile
          departament={departament}
          module={module}
          open={open} 
          setOpen={setOpen} 
          data={data.classes}
        />}
    </div>
  );
}

// Para desktops
function ListOfClassesForDesktop({ departament, module, open, setOpen, data }: ListOfClassesForStyles) {
  return(
    <div 
      className={clsx("h-[calc(100vh-64px)] border-l flex flex-col gap-4 transition-all", {
        "w-[340px] p-5": open,
        "w-16 py-5 items-center": !open
      })}
    >
      
      {/* Botão */}
      <div className="flex items-center justify-between rounded-md bg-secondary/50 md:bg-transparent">
        { open && <h1 className="text-xl font-semibold">Conteúdos</h1> }

        <Button 
          size={"icon"}
          variant={"secondary"} 
          onClick={() => setOpen(!open)} 
        >
          <PanelLeftOpen 
            className={`size-4 transition-all ${ open ? "rotate-0" : "rotate-180" }`}
          />
        </Button>
      </div>

      {/* Aulas */}
      {open && (
        <div className="md:pr-2 flex flex-col gap-4 overflow-y-auto">
          {data.map(classModule => (
            <Button 
              asChild
              variant={"outline"} 
              key={classModule.slug}
              className="w-full h-fit py-3 flex flex-col items-start gap-2 rounded-lg"
            >
              <Link href={`/app/${departament}/${module}/${classModule.slug}`}>
                <h1 className="text-wrap text-base">
                  {classModule.name}
                </h1>

                <span className="flex items-center gap-1 text-muted-foreground">
                  <PlayCircle className="size-4"/>

                  Assistir aula
                </span>
              </Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

// Para celulares
function ListOfClassesForMobile({ departament, module, open, setOpen, data }: ListOfClassesForStyles) {
  return(
    <div className="w-full p-5 md:p-7 flex flex-col gap-4">
      <Button 
        variant={"secondary"} 
        onClick={() => setOpen(!open)} 
        className="w-full h-14 justify-between"
      >
        <h1 className="ml-1 md:m-0 text-xl font-semibold">Conteúdos</h1>

        <span>
          <PanelBottomOpen 
            className={`size-5 transition-all ${ open ? "rotate-0" : "rotate-180" }`}
          />
        </span>
      </Button>

      <div className={clsx("border rounded-md overflow-hidden divide-y-[1px]", {
        "block": open,
        "hidden": !open
      })}>
        {data.map(classModule => (
          <Button 
            asChild
            variant={"ghost"} 
            key={classModule.slug}
            className="w-full h-fit py-3 flex flex-col items-start gap-2 rounded-none"
          >
            <Link href={`/app/${departament}/${module}/${classModule.slug}`}>
              <h1 className="text-wrap text-base">
                {classModule.name}
              </h1>

              <span className="flex items-center gap-1 text-muted-foreground">
                <PlayCircle className="size-4"/>

                Assistir aula
              </span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}