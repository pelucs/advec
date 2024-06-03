'use client'

import Link from "next/link";
import clsx from "clsx";

import { Button } from "./ui/button";
import { useState } from "react";
import { ChevronsUpDown, LayoutList } from "lucide-react";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "./ui/collapsible";

interface MenuCollapsibleProps {
  openSidebar: boolean;
}

export function MenuCollapsible({ openSidebar }: MenuCollapsibleProps){
  
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
        <CollapsibleTrigger className={clsx("flex items-center justify-between hover:px-3 hover:text-primary", {
          "": open && !openSidebar,
          "": !open && openSidebar
        })}>
          <div className="flex items-center gap-2">
            <LayoutList className="size-4"/>

            {openSidebar && "Departamentos"}
          </div>

          {openSidebar && <ChevronsUpDown className="size-3"/>}
        </CollapsibleTrigger>
      </Button>

      <CollapsibleContent className="mt-2 pl-5 transition-all">
        {!openSidebar && (
          <hr className="h-5 w-[1px] bg-secondary"/>
        )}

        <div className={`${ openSidebar && "border-l pl-2" } flex flex-col gap-2`}>
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