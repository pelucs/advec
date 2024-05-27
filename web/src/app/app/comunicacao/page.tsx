import { Library } from "lucide-react";
import { Header } from "../header";
import { Sidebar } from "../sidebar";
import Link from "next/link";

export default () => {
  return(
    <div className="flex items-start">
      <Sidebar/>

      <div className="flex-1">
        <Header/>

        <div className="p-7">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Comunicação</h1>
            <span className="text-muted-foreground">Aulas de treinamento</span>
          </div>

          <div className="mt-8">
            <h1 className="flex items-center gap-1 text-xl font-semibold">
              <Library className="size-5"/>
              
              Módulos
            </h1>

            <div className="mt-4 grid grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <Link href="" key={i} className="flex flex-col gap-2">
                  <div className="rounded-md aspect-video bg-secondary"/>
                  <span className="text-lg">Gravações e edições</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}