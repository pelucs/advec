import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface FormEditVideoProps{
  setVideoId: (newString: string) => void
}

export function FormEditVideo({ setVideoId }: FormEditVideoProps){
  return(
    <div>
      <form className="space-y-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs font-semibold text-muted-foreground">ID do vídeo</label>

          <input
            placeholder="Informe o id"
            onChange={e => setVideoId(e.target.value)}
            className="w-full py-3 px-4 rounded border bg-transparent"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs font-semibold text-muted-foreground">Título</label>

          <input
            placeholder="Informe o título do vídeo"
            className="w-full py-3 px-4 rounded border bg-transparent"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs font-semibold text-muted-foreground">Descrição</label>

          <textarea
            placeholder="Escreva uma descrição"
            className="w-full h-28 py-3 px-4 rounded border bg-transparent resize-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs font-semibold text-muted-foreground">Módulo</label>

          <input
            placeholder="Informe o módulo"
            className="w-full py-3 px-4 rounded border bg-transparent"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs font-semibold text-muted-foreground">Departamento</label>

          <Select>
            <SelectTrigger className="w-full h-12 outline-none">
              <SelectValue placeholder="Departamento" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>Departamento</SelectLabel>
                <SelectItem value="comunicacao">Comunicação</SelectItem>
                <SelectItem value="una">UNA</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs font-semibold text-muted-foreground">Ministro da aula</label>

          <input
            placeholder="Informe o nome do ministro"
            className="w-full py-3 px-4 rounded border bg-transparent"
          />
        </div>

        <Button className="button-theme w-full">
          Salvar alterações
        </Button>
      </form>
    </div>
  );
}