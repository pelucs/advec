'use client'

import { Header } from "../../header";
import { Sidebar } from "../../sidebar";
import { Youtube } from "lucide-react";
import { useState } from "react";
import { VideoPreview } from "../../../../components/video-preview";
import { YouTubeProps } from "react-youtube";
import { FormCreateNewVideo } from "./form-create-new-video";

export default () => {
  const [videoId, setVideoId] = useState<string>("");

  const opts: YouTubeProps['opts'] = {
    width: '1100',
    height: '624',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      showinfo: 0,
      autoplay: 1,
      controls: 0 
    },
  }

  return (
    <div className="flex items-start h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-7 flex flex-col h-full">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Novo vídeo</h1>
            <span className="text-muted-foreground">Informe detalhes do vídeo</span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-5">
            <div className="p-5 border rounded-md overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              <FormCreateNewVideo setVideoId={setVideoId} />
            </div>

            {videoId ? (
              <div className="rounded-md overflow-hidden">
                <VideoPreview opts={opts} videoId={videoId} />
              </div>
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