import Link from "next/link";
import Image from "next/image";

import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { AlertTriangle, MoveRight } from "lucide-react";

import una from "@/assets/una.png";
import comunicacao from "@/assets/comunicacao.png";
import { Button } from "@/components/ui/button";

export default () => {
  return(
    <div className="flex items-start">
      <Sidebar/>

      <div className="flex-1">
        <Header/>

        <div className="p-5 md:p-7 space-y-6 md:space-y-10">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
            <h1 className="text-3xl font-bold">Olá, Pedro</h1>

            <span className="text-muted-foreground">
              Seja bem-vindo! 
              <br/>
              Antes de começar, confira alguns avisos.
            </span>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="aspect-video rounded-md bg-secondary">

              </div>

              <Link 
                href="" 
                className="p-6 aspect-video flex flex-col justify-between rounded-md text-white bg-orange-500"
              >
                <div>
                  <h1 className="text-3xl font-bold">Nossos pilares</h1>

                  <span className="w-60 mt-2 text-lg leading-tight">
                    “Para que, se eu demorar, você saiba como as pessoas devem se comportar na casa 
                    de Deus. Ela é a igreja do Deus vivo, coluna e alicerce da verdade.”
                  </span>
                </div>

                <span className="flex items-center gap-2">
                  Confira

                  <MoveRight className="size-4"/>  
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="flex items-center gap-1 text-xl font-semibold">
                Departamentos
              </h1>

              <span className="text-muted-foreground">
                Esses são os departamentos que você serve
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Link 
                href="/app/comunicacao"
                className="flex flex-col gap-2 items-center text-xs font-semibold"
              >
                <Image 
                  src={comunicacao} 
                  alt="Logo comunicação"
                  className="size-16"
                />

                Comunicação
              </Link>

              <Link 
                href="/app/una"
                className="flex flex-col gap-2 items-center text-xs font-semibold"
              >
                <Image 
                  src={una} 
                  alt="Logo Una"
                  className="size-16"
                />

                UNA
              </Link>
            </div>

            <Button 
              asChild 
              variant={"outline"}
              className="w-fit h-fit py-4 gap-2 items-start leading-none rounded text-wrap text-orange-500" 
            >
              <Link href="/app/departamentos">
                <AlertTriangle className="size-4"/>
                
                <span className="flex-1">Você deseja acessar o conteúdo de outro departamento? clique aqui</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}