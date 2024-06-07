import { Input } from "@/components/ui/input";
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

export function TablePublishedVideos(){
  return(
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <h1 className="text-xl font-semibold">
            Vídeos publicados
          </h1>
          
          <Input className="w-[250px]" placeholder="Pesquise um vídeo"/>
        </div>

        <Button asChild size={"sm"}>
          <Link href="/app/admin/novo-video">
            + Add Vídeo
          </Link>
        </Button>
      </div>

      <div className="mt-3 border rounded-md">
        <Table>
          <TableHeader>
            <TableRow className="text-primary-foreground">
              <TableHead className="w-36">ID</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Módulo</TableHead>
              <TableHead>Departamento</TableHead>
              <TableHead>Ministração</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => (
              <TableRow key={i} className="">
                <TableCell>0BdELGwOLbI</TableCell>
                <TableCell className="text-nowrap">Introdução: Como criar uma...</TableCell>
                <TableCell>Photoshop</TableCell>
                <TableCell>Comunicação</TableCell>
                <TableCell>Jeneyglaucia</TableCell>
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
  );
}