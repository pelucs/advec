"use client"

import { useGetModulesByDepartamentQuery } from "@/graphql/generated";
import Image from "next/image";
import Link from "next/link";

interface ListOfModulesProps {
  departament: string;
}

export function ListOfModules({ departament }: ListOfModulesProps) {
  
  const { data } = useGetModulesByDepartamentQuery({
    variables: {
      slug: departament
    }
  });

  if(!data || !data.modules) {
    return <p>Carregando...</p>
  }
  
  return(
    <div>
      {data.modules.map(module => (
        <Link
          key={module.slug} 
          href={`/app/${departament}/${module.slug}/aulas`} 
          className="flex flex-col gap-2"
        >
          <div className="rounded-md aspect-video overflow-hidden bg-secondary">
            {module.thumb && (
              <Image 
                width={500}
                height={500}
                src={module.thumb.url}
                alt={`Thumb ${module.name}`}
              />
            )}
          </div>
          
          <div className="flex flex-col gap-1">
            <span className="text-lg">{module.name}</span>
            <span className="w-fit py-1 px-2 rounded text-sm text-muted-foreground bg-secondary">
              {module.classes.length > 1 ? `${module.classes.length} aulas` : `${module.classes.length} aula`}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}