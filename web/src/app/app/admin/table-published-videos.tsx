import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil } from "lucide-react";
import Link from "next/link";

export function TablePublishedVideos(){
  return(
    <div className="mt-5 border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
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
            <TableRow key={i} className="text-muted-foreground">
              <TableCell>0BdELGwOLbI</TableCell>
              <TableCell>Introdução: Como criar uma...</TableCell>
              <TableCell>Photoshop</TableCell>
              <TableCell>Comunicação</TableCell>
              <TableCell>Jeneyglaucia</TableCell>
              <TableCell>
                <div>
                  <Button 
                    asChild 
                    size={"icon"} 
                    className="size-7"
                    variant={"outline"} 
                  >
                    <Link href="">
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