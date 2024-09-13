"use client"
import { MapProvider } from "react-map-gl";
import { MojiMap } from "@/blocks/MojiMap";

const Page = () => {
    return (
        <MapProvider>
            <MojiMap/>
        </MapProvider>
    )
}

export default Page