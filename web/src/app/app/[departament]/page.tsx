"use client"

import { Header } from "../header";
import { client } from "@/lib/apollo";
import { Library } from "lucide-react";
import { Menu } from "../menu";
import { ListOfModules } from "./list-of-modules";
import { ApolloProvider } from "@apollo/client";
import { useParams } from "next/navigation";

export default () => {

  const { departament } = useParams<{ departament: string }>();

  return(
    <div className="flex items-start">
      <Menu style="desktop"/>

      <div className="flex-1">
        <Header/>

        <div className="p-5 md:p-7">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">{departament}</h1>
            <span className="text-muted-foreground">Aulas de treinamento</span>
          </div>

          <div className="mt-8">
            <h1 className="flex items-center gap-1 text-xl font-semibold">
              <Library className="size-5"/>
              
              Módulos
            </h1>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <ApolloProvider client={client}>
                <ListOfModules departament={departament}/>
              </ApolloProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}