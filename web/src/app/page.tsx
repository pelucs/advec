import Image from "next/image";
import logotipoBranca from '@/assets/logotipo-advec-branca.png';
import logoAnoDeServir from '@/assets/logo-ano-de-servir.svg';

import { LoginForm } from "@/components/login-form";
import { UserContextProvider } from "@/context/user-context";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-2">

      {/* Left */}
      <div className="flex flex-col gap-4 items-center justify-center bg-orange-500">
        <Image 
          alt=""
          className="w-80"
          src={logoAnoDeServir} 
        />

        <p className="w-80 text-center font-alt leading-tight">
          “Agora temam ao Senhor e sirvam‑lhe 
          com integridade e fidelidade.”
          <br/>
          Josué 24:14
        </p>
      </div>

      {/* Right */}
      <div className="p-10 flex items-center justify-center">
        <div className="w-80 flex flex-col justify-center space-y-10">
          <Image src={logotipoBranca} alt="" className="w-52"/>

          <div>
            <h1 className="text-3xl font-bold">Efetue seu login</h1>

            <p className="w-full max-w-60 mt-1 text-muted-foreground text-sm">
              Área exclusiva para membros da ADVEC Campina Grande
            </p>
          </div>

          <UserContextProvider>
            <LoginForm/>
          </UserContextProvider>
        </div>
      </div>
    </main>
  );
}
