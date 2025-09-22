"use client"

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { VideoProps } from "@/components/Video/Video.types";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export const Video = ({title, id, width, height}: VideoProps) => {
    return (
        <div style={{ width: width, height: height }}>
            <LiteYouTubeEmbed title={title} id={id}/>
        </div>
    )
}