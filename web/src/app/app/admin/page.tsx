import { Header } from "../header";
import { Sidebar } from "../sidebar";
import { ListOfVolunteers } from "./list-of-volunteers";
import { TablePublishedVideos } from "./table-published-videos";

export default () => {
  return(
    <div className="flex items-start">
      <Sidebar/>

      <div className="flex-1">
        <Header/>

        <div className="p-5 md:p-7">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Área admin</h1>
            <span className="text-muted-foreground">Ferramentas exclusivas para administradores</span>
          </div>

          <div className="mt-8 space-y-5">
            <TablePublishedVideos/>
            <ListOfVolunteers/>
          </div>
        </div>
      </div>
    </div>
  );
}