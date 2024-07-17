"use client"

import { IUser } from "@/types/user";
import { jwtDecode } from "jwt-decode";
import { ReactNode, createContext, useEffect, useState } from "react";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { api } from "@/lib/axios";

interface UserContextProvider { 
  children: ReactNode;
 }

interface UserContext {
  user: IUser | undefined;
  setUser: (newUser: IUser) => void;
}

export const UserContext = createContext({} as UserContext);

export const UserContextProvider = ({ children }: UserContextProvider) => {

  const [user, setUser] = useState<IUser | undefined>();

  const loadUserFromCookies = async () => {
    const token = Cookies.get("token");

    if (token) {
      try {
        const decodedToken = jwtDecode<{ id: string }>(token);
        
        const getCurrentUser = await api.get(`/user/data:${decodedToken.id}`);

        console.log(getCurrentUser)
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  };

  useEffect(() => {
    loadUserFromCookies();
  }, []);

  console.log("CHAMOU", user)

  return(
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}