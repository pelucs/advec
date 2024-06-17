import { Menu } from "../menu";
import { Header } from "../header";
import { Button } from "@/components/ui/button";
import { departaments } from "@/utils/departaments";
import { AlertTriangle } from "lucide-react";

import Image from "next/image";

export default () => {
  return(
    <div className="flex items-start">
      <Menu style="desktop"/>

      <div className="flex-1">
        <Header/>

        <div className="px-5 md:p-7">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Departamentos</h1>
            <span className="text-muted-foreground">
              Conheça mais sobre os departamentos da ADVEC Campina Grande
            </span>

            <div className="mt-5 py-3 px-4 flex items-start gap-2 border rounded-md bg-orange-500">
              <AlertTriangle className="size-4"/>
              
              <span className="flex-1 leading-tight">
                Sua solicitação estará sujeita a ser aceita ou rejeitada. Para que você acesse os conteúdos
                do departamento, você terá que se tornar voluntário, entrando em contato com o líder do 
                departamento e em seguida fazer a solicitação logo abaixo.
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {departaments.map(departament => (
              <div key={departament.name} className="p-5 border rounded-md space-y-4">
                <Image 
                  src={departament.image} 
                  alt=""
                  className="rounded-md"
                />

                <div>
                  <h1 className="text-lg font-semibold">
                    {departament.name}
                  </h1>

                  <p className="leading-tight text-muted-foreground">
                    {departament.description}
                  </p>

                  <Button size={"sm"} className="mt-6">
                    Solicitar entrada
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}