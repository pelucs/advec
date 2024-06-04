'use client'

import '@vime/core/themes/default.css'
import { DefaultUi, Player, Youtube } from "@vime/react";

interface VideoPreviewProps{
  videoId: string;
}

export function VideoPreview({ videoId }: VideoPreviewProps){
  return(
    <div className="flex-1">
      <Player>
        <Youtube videoId={videoId}/>
        <DefaultUi/>
      </Player>
    </div>
  );
}