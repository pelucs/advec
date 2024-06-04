import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/clwvc2ovr05jy08umumrjnadh/master",
  cache: new InMemoryCache()
})