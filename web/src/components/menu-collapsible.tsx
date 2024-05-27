'use client'

import Link from "next/link";
import clsx from "clsx";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronsUpDown, LayoutList } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function MenuCollapsible(){
  
  const [open, setOpen] = useState<boolean>(true);
  
  return(
    <Collapsible
      open={open}
      onOpenChange={setOpen}
    >
      <Button 
        asChild
        variant={"ghost"}
        className="w-full p-0 transition-all"
      >
        <CollapsibleTrigger className={clsx("flex items-center justify-between hover:text-orange-500", {
          "px-3 bg-secondary": open,
          "hover:px-3": !open
        })}>
            <div className="flex items-center gap-2">
              <LayoutList className="size-4"/>

              Departamentos
            </div>

            <ChevronsUpDown className="size-3"/>
        </CollapsibleTrigger>
      </Button>

      <CollapsibleContent className="mt-2 pl-5 transition-all">
        <div className="border-l pl-2 flex flex-col gap-2">
          <Link 
            href="/app/comunicacao" 
            className="py-2 px-3 rounded hover:bg-secondary transition-colors hover:text-orange-500"
          >
            Comunicação
          </Link>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}