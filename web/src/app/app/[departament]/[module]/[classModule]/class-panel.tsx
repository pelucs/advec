"use client"

import { Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
import { VideoPreview } from "@/components/video-preview";
import { ListOfClasses } from "./list-of-classes";
import { useGetClassBySlugQuery } from "@/graphql/generated";

interface ClassPanelProps {
  module: string;
}

export function ClassPanel({ module }: ClassPanelProps) {

  const { classModule } = useParams<{ classModule: string }>();

  const { data } = useGetClassBySlugQuery({
    variables: {
      slug: classModule
    }
  });

  if(!data || !data.class) {
    return(
      <Skeleton className="flex-1 h-[calc(100vh-64px)] bg-background"/>
    )
  }

  return(
    <div className="flex-1 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="flex flex-col">
        <div className="aspect-video bg-secondary">
          <VideoPreview videoId={data.class.videoId}/>
        </div>

        <div className="block md:hidden">
          <ListOfClasses style="mobile" module={module}/>
        </div>
      </div>

      <div className="block md:hidden px-7">
        <Separator orientation="horizontal"/>
      </div>

      <div className="py-7 px-7">
        <div>
          <h1 className="text-2xl font-bold leading-tight">
            {data.class.name}
          </h1>

          <p className="mt-2">
            {data.class.description}
          </p>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <span className="size-12 rounded-full flex items-center justify-center text-lg font-semibold bg-orange-500">
            {data.class.teacher.split('')[0]}
          </span>

          <div className="flex flex-col">
            <span className="font-lg font-semibold">
              {data.class.teacher}
            </span>

            <span className="text-muted-foreground">
              Voluntário(a)
            </span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4">
          {data.class.complementaryMaterial && (
            <Button asChild variant={"outline"} className="h-16 gap-2 text-lg">
              <a target="_blank" href={data.class.complementaryMaterial}>
                <Book className="size-6"/>

                Material Complementar
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}