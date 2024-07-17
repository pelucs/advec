"use client"

import { Menu } from "../../../menu";
import { Header } from "../../../header";
import { client } from "@/lib/apollo";
import { Loading } from "@/components/loading";
import { ClassPanel } from "./class-panel";
import { ListOfClasses } from "./list-of-classes";
import { ApolloProvider } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useGetClassesByModuleQuery } from "@/graphql/generated";

export default function Page() {
  return (
    <div className="flex items-start h-screen">
      <Menu style="desktop" />
      <div className="flex-1">
        <Header />
        <ApolloProvider client={client}>
          <Classes />
        </ApolloProvider>
      </div>
    </div>
  );
}

function Classes() {

  const navigation = useRouter();
  const { module, departament, classSlug } = useParams<{ departament: string, module: string, classSlug?: string }>();
  
  const { data, loading } = useGetClassesByModuleQuery({
    variables: { slug: module },
  });
  
  const [hasRedirected, setHasRedirected] = useState<boolean>(false);

  useEffect(() => {
    if (data && data.classes && data.classes.length > 0 && classSlug === "aulas" && !hasRedirected) {
      setHasRedirected(true);
      navigation.replace(`/app/${departament}/${module}/${data.classes[0].slug}`);
    }
  }, [data, departament, module, classSlug, navigation, hasRedirected]);

  if (loading || !data || !data.classes) {
    return <Loading />;
  }

  return (
    <div className="flex items-start">
      <ClassPanel module={module} />
      <div className="hidden md:block">
        <ListOfClasses style="desktop" module={module} />
      </div>
    </div>
  );
}
