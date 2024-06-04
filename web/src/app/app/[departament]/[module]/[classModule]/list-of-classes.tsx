import Link from "next/link";

import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { PanelLeftOpen, PlayCircle } from "lucide-react";
import { useGetClassesByModuleQuery } from "@/graphql/generated";

interface ListOfClassesProps {
  style: "desktop" | "mobile";
  module: string;
}

export function ListOfClasses({ module, style }: ListOfClassesProps) {

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
    <div className={clsx("py-7 px-5 md:pl-7 md:px-2 md:border-l", {
      "w-[340px] h-[calc(100vh-64px)]": style === "desktop",
      "flex-1 h-fit": style === "mobile"
    })}>
      <div className="h-full pr-3 flex flex-col gap-4 overflow-y-auto">
        <div className="p-3 md:p-0 flex items-center justify-between rounded bg-secondary/50 md:bg-transparent">
          <h1 className="text-xl font-semibold">Conteúdos</h1>

          <Button onClick={() => setOpen(!open)} variant={"secondary"} size={"icon"}>
            <PanelLeftOpen 
              className={`size-4 transition-all ${open ? "-rotate-90 md:rotate-0" : "rotate-90 md:rotate-180"}`}
            />
          </Button>
        </div>

        <div className={clsx("flex flex-col gap-4", {
          "h-fit overflow-y-auto": open,
          "h-0 overflow-hidden": !open
        })}>
          {data.classes.map(classModule => (
            <Button 
              asChild
              variant={"outline"} 
              key={classModule.slug}
              className="w-full h-fit py-3 flex flex-col items-start gap-2"
            >
              <Link href={`/app/comunicacao/${module}/${classModule.slug}`}>
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
    </div>
  );
}