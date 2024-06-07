import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { 
  Table, 
  TableRow,
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
} from "@/components/ui/table";

import Link from "next/link";
import { departaments } from "@/utils/departaments";

export function ListOfVolunteers() {
  return(
    <div>
      <h1 className="text-xl font-semibold">
        Voluntários
      </h1>

      <div className="mt-4">
        <h1>Novas solicitações</h1>

        <div className="mt-2 grid grid-cols-3 gap-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div className="py-3 px-4 border rounded-md">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-10 flex items-center justify-center rounded-full bg-orange-500">
                    PL
                  </div>

                  <div>
                    <h1 className="font-semibold leading-none">Pedro Lucas</h1>
                    <span className="text-muted-foreground text-xs">pedro@gmail.com</span>
                  </div>
                </div>

                <span className="text-xs py-1 px-2 rounded bg-yellow-600">
                  Pendente
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <Button size={"sm"} variant={"secondary"}>
                  Rejeitar
                </Button>

                <Button size={"sm"}>
                  Aceitar
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 border rounded-md">
          <Table>
            <TableHeader>
              <TableRow className="text-primary-foreground">
                <TableHead className="w-36">ID</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Departamentos</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {Array.from({ length: 2 }).map((_, i) => (
                <TableRow key={i} className="">
                  <TableCell>0BdELGwOLbI</TableCell>
                  <TableCell>Pedro Lucas de Abreu Santos</TableCell>
                  <TableCell>pedro@gmail.com</TableCell>
                  <TableCell className="flex items-center flex-wrap gap-2">
                    {departaments.map(departament => (
                      <span className="py-1 px-2 rounded bg-secondary text-xs">
                        {departament.name}
                      </span>
                    ))}
                  </TableCell>
                  <TableCell className="text-right">
                    <div>
                      <Button 
                        asChild 
                        size={"icon"} 
                        className="size-7"
                        variant={"outline"} 
                      >
                        <Link href="/app/admin/editar-video">
                          <Pencil className="size-4"/>
                        </Link>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}