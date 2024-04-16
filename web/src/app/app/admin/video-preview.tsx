'use client'

import { Frown } from "lucide-react";
import { useState } from "react";

import YouTube, { YouTubeProps } from "react-youtube";

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

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0 
    },
  }

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
            opts={opts}
          />
        </div>
      )}
    </div>
  );
}