import { useRef, useState } from 'react';
import { Vector3Tuple } from "three";
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei';
import { easing } from 'maath'
import styled from "styled-components";

interface TileGalleryState {
    focusedIndex: number | null,
    focusedImage: any | null,
    urls: string[]
}

interface TileProps {
    index: number,
    position: Vector3Tuple,
    scale: Vector3Tuple,
    url: string,
    onTileClick: (index: number, image: any) => void
    tileGalleryState: TileGalleryState
}

interface TileListProps {
    w?: number,
    gap?: number,
    onTileClick: (index: number, image: any) => void
    tileGalleryState: TileGalleryState
}

interface TileGalleryProps {
    urls?: string[]
}

const Tile = ({index, position, scale, url, onTileClick, tileGalleryState}: TileProps) => {
    const imageRef = useRef<any>(null)
    const scroll = useScroll()
    const {focusedIndex, urls} = tileGalleryState
    const [hovered, hover] = useState(false)
    const handleClick = () => {
        onTileClick(index, imageRef.current)
    }
    const handleOver = () => {
        hover(true)
    }
    const handleOut = () => {
        hover(false)
    }
    useFrame((state, delta) => {
        const image = imageRef.current;
        if (!image) return;
        const material = image.material;
        const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)

        // scale of the image
        let scaleX = 4
        let scaleY = 4
        // use the scale of the focused image if it exists
        let focusedImage = tileGalleryState.focusedImage;
        if (focusedImage) {
            console.log(focusedImage)
            let imageBounds = focusedImage.material.imageBounds
            let boundX = imageBounds[0]
            let boundY = imageBounds[1]
            let scaleFactor;
            scaleFactor = boundY / 7.5
            scaleX = boundX / scaleFactor
            scaleY = boundY / scaleFactor
        }

        easing.damp3(image.scale, [focusedIndex === index ? scaleX : scale[0], focusedIndex === index ? scaleY : 6.5 + y, 1], 0.15, delta)
        material.scale[0] = image.scale.x
        material.scale[1] = image.scale.y
        if (focusedIndex !== null && index < focusedIndex) {
            easing.damp(image.position, 'x', position[0] - scaleX / 2, 0.15, delta)
        }
        if (focusedIndex !== null && index > focusedIndex) {
            easing.damp(image.position, 'x', position[0] + scaleX / 2, 0.15, delta)
        }
        if (focusedIndex === null || focusedIndex === index) {
            easing.damp(image.position, 'x', position[0], 0.15, delta)
        }
        easing.damp(material, 'grayscale', hovered || focusedIndex === index ? 0 : Math.max(0, 1 - y), 0.15, delta)
        easing.dampC(material.color, hovered || focusedIndex === index ? 'white' : '#aaa', hovered ? 0.3 : 0.15, delta)
    })
    return <Image ref={imageRef}
                  url={url}
                  position={position}
                  scale={[scale[0], scale[1]]}
                  onClick={handleClick}
                  onPointerOver={handleOver}
                  onPointerOut={handleOut}
    />
}

const TileList = ({w = 0.7, gap = 0.15, onTileClick, tileGalleryState}: TileListProps) => {
    const {urls} = tileGalleryState
    const {width} = useThree((state) => state.viewport)
    const xW = w + gap
    return (
        <ScrollControls horizontal damping={0.1} pages={(width - xW + urls.length * xW) / width}>
            <Scroll>
                {urls.map((url: string, i: number) =>
                    <Tile key={i}
                          index={i}
                          position={[i * xW, 0, 0]}
                          scale={[w, 4, 1]}
                          url={url}
                          onTileClick={onTileClick}
                          tileGalleryState={tileGalleryState}
                    />
                )}
            </Scroll>
        </ScrollControls>
    )
}

const TileGalleryContainer = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const TileGallery = ({
                                urls = [
                                    '/images/portfolio/avid/AvidIlluminate.png',
                                    '/images/portfolio/avid/AvidSearchApp.png',
                                    '/images/portfolio/inmanperkcoffee/gainesville/Chalkboard.png',
                                    '/images/portfolio/inmanperkcoffee/gainesville/Seating1.png',
                                    '/images/portfolio/inmanperkcoffee/inmanpark/Rosetta.png',
                                    '/images/portfolio/inmanperkcoffee/inmanpark/Seating1.png',
                                    '/images/portfolio/inmanperkcoffee/inmanpark/Seating2.png',
                                    '/images/portfolio/nexidia/DialogueSearch1.png',
                                    '/images/portfolio/nexidia/DialogueSearch2.png',
                                    '/images/portfolio/nexidia/DialogueSearch3.png',
                                    '/images/portfolio/nexidia/DialogueSearchVideoPlayer.png',
                                    '/images/portfolio/nexidia/Emmy.png',
                                    '/images/portfolio/nexidia/Illuminate.png'
                                ]
                            }: TileGalleryProps) => {

    const [tileGalleryState, setTileGalleryState] = useState<TileGalleryState>({
        focusedIndex: null,
        focusedImage: null,
        urls: urls
    });

    const handlePointerMissed = () => {
        setTileGalleryState({
            ...tileGalleryState,
            focusedIndex: null
        })
    }

    const handleTileClick = (index: number, image: any) => {
        if (tileGalleryState.focusedIndex === index) return
        setTileGalleryState({
            ...tileGalleryState,
            focusedIndex: index,
            focusedImage: image
        })
    }

    return (
        <TileGalleryContainer className={"gle-tile-gallery-container"}>
            <Canvas gl={{antialias: false}}
                    dpr={[1, 1.5]}
                    onPointerMissed={handlePointerMissed}>
                <TileList tileGalleryState={tileGalleryState}
                          onTileClick={handleTileClick}
                />
            </Canvas>
        </TileGalleryContainer>
    )
}