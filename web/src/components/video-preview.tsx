'use client'

import ReactPlayer from "react-player";
interface VideoPreviewProps{
  videoId: string;
}

export function VideoPreview({ videoId }: VideoPreviewProps){
  return(
    <ReactPlayer
      className='react-player'
      url={`https://www.youtube.com/watch?v=${videoId}`}
      controls={true}
      width='100%'
      height='100%'
    />
  );
}