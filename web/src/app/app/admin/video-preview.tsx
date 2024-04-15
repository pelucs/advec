'use client'

import { Frown } from "lucide-react";
import { useState } from "react";

import YouTube from "react-youtube";

interface VideoPreviewProps{
  videoId: string;
}

export function VideoPreview({ videoId }: VideoPreviewProps){

  const [error, setError] = useState<boolean>(false);

  //Conferir
  const onError = () => {
    alert("ERRO")
    setError(true)
  };

  return(
    <div>
      {error ? (
        <div className="aspect-video flex items-center justify-center bg-secondary rounded-md">
          <span className="py-3 px-4 flex items-center justify-center gap-2 border border-dashed 
          border-zinc-700 text-muted-foreground rounded">
            <Frown className="size-4"/>

            ID de vídeo indisponível! verifique novamente.
          </span>
        </div>
      ) : (
        <div className="rounded-md overflow-hidden">
          <YouTube
            id={videoId}
            videoId={videoId}
            onError={onError}
          />
        </div>
      )}
    </div>
  );
}