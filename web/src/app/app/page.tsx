"use client"

import una from "@/assets/una.png";
import Link from "next/link";
import Image from "next/image";
import comunicacao from "@/assets/comunicacao.png";

import { Menu } from "./menu";
import { Header } from "./header";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { UserContext, UserContextProvider } from "@/context/user-context";
import { MoveRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default () => {

  const { user } = useContext(UserContext);

  return(
    <div className="flex items-start">
      <Menu style="desktop"/>

      <div className="flex-1">
        <UserContextProvider>
          <Header/>
        </UserContextProvider>

        <div className="p-5 md:p-7 space-y-6 md:space-y-8">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
            <h1 className="text-3xl font-bold">Olá, {user?.name}</h1>

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

          <Separator/>  

          <div className="flex flex-col gap-5">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="flex items-center gap-1 text-xl font-semibold">
                  Departamentos
                </h1>

                <span className="text-muted-foreground">
                  Esses são os departamentos que você serve
                </span>
              </div>

              <Button asChild>
                <Link href="/app/departamentos">                  
                  Ver departamentos
                </Link>
              </Button>
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
          </div>
        </div>
      </div>
    </div>
  );
}