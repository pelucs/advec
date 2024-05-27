import Link from "next/link";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { MoveRight } from "lucide-react";

export default () => {
  return(
    <div className="flex items-start">
      <Sidebar/>

      <div className="flex-1">
        <Header/>

        <div className="p-7">
          <div className="flex items-center gap-5">
            <h1 className="text-3xl font-bold">Olá, Pedro</h1>

            <span className="text-muted-foreground">
              Seja bem-vindo! 
              <br/>
              Antes de começar, confira alguns avisos.
            </span>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-2 gap-5">
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
        </div>
      </div>
    </div>
  );
}