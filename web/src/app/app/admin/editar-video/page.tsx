'use client'

import { useState } from "react";
import { Header } from "../../header";
import { Sidebar } from "../../sidebar";
import { VideoPreview } from "../video-preview";
import { Youtube } from "lucide-react";
import { FormEditVideo } from "./form-edit-video";

export default () => {
  const [videoId, setVideoId] = useState<string>("");

  return (
    <div className="flex items-start h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-7 flex flex-col h-full">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Editar vídeo</h1>
            <span className="text-muted-foreground">Atualize as informações do vídeo</span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-5">
            <div className="p-5 border rounded-md overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              <FormEditVideo setVideoId={setVideoId} />
            </div>

            {videoId ? (
              <VideoPreview videoId={videoId} />
            ) : (
              <div className="aspect-video flex items-center justify-center bg-secondary rounded-md">
                <span className="py-3 px-4 flex items-center justify-center gap-2 border border-dashed 
                border-zinc-700 text-muted-foreground rounded">
                  <Youtube className="size-4" />
                  Insira o código de um vídeo
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}