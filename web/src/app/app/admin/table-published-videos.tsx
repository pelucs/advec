import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil } from "lucide-react";
import Link from "next/link";

export function TablePublishedVideos(){
  return(
    <div className="mt-3 p-5 border rounded-md">
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
              <TableCell>Introdução: Como criar uma...</TableCell>
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
  );
}