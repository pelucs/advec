"use client"

import { Menu } from "../../../menu";
import { Header } from "../../../header";
import { client } from "@/lib/apollo";
import { useParams, useSearchParams } from "next/navigation";
import { ClassPanel } from "./class-panel";
import { ListOfClasses } from "./list-of-classes";
import { ApolloProvider } from "@apollo/client";

export default () => {

  const searchParams = useSearchParams();
  const desc = searchParams.get("desc");

  return(
    <div className="flex items-start h-screen">
      <Menu style="desktop"/>

      <div className="flex-1">
        <Header/>

        {desc && (
          <div 
            className="flex flex-col gap-3 leading-tight" 
            dangerouslySetInnerHTML={{ __html: desc }} 
          />
        )}

        <ApolloProvider client={client}>
          <Classes/>
        </ApolloProvider>
      </div>
    </div>
  );
}

function Classes() {

  const { module } = useParams<{ module: string }>();

  return(
    <div className="flex items-start">
      <ClassPanel module={module}/>

      <div className="hidden md:block">
        <ListOfClasses style="desktop" module={module}/>
      </div>
    </div>
  );
}