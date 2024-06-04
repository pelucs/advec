"use client"

import { Header } from "../../../header";
import { client } from "@/lib/apollo";
import { Sidebar } from "../../../sidebar";
import { useParams } from "next/navigation";
import { ClassPanel } from "./class-panel";
import { ListOfClasses } from "./list-of-classes";
import { ApolloProvider } from "@apollo/client";

export default () => {
  return(
    <div className="flex items-start h-screen">
      <Sidebar/>

      <div className="flex-1">
        <Header/>

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