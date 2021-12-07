import React, { KeyboardEvent, MouseEvent, SyntheticEvent, useCallback, useRef, useState } from "react"
import { Box, Button, IconButton } from "@mui/material";
import { FaExpand, FaForward, FaPause, FaPlay } from "react-icons/fa";
import styles from './video-player.module.scss'

type VideoPlayerProps = {
    source: string;
}

export const VideoPlayer = ( { source }: VideoPlayerProps ) => {
    const videoRef = useRef<HTMLVideoElement>({} as HTMLVideoElement)

    const [ isPlaying, setIsPlaying ] = useState(false)
    const [ isFullscreen, setIsFullscreen ] = useState(false)
    const [ isPicInPic, setIsPicInPic ] = useState(false)

    const playVideo = useCallback(async () => {
        await videoRef.current.play()
        setIsPlaying(true)
    }, [])

    const pauseVideo = useCallback(() => {
        videoRef.current.pause()
        setIsPlaying(false)
    }, [])

    const onContextMenu = useCallback(( e: MouseEvent<HTMLVideoElement> ) => {
        e.preventDefault()
    }, [])

    const onPause = useCallback(( e: MouseEvent<HTMLVideoElement> ) => {
        e.preventDefault()
        pauseVideo()
    }, [ pauseVideo ])

    const onPlay = useCallback(async ( e: MouseEvent<HTMLVideoElement> ) => {
        e.preventDefault()
        await playVideo()
    }, [ playVideo ])

    const onClick = useCallback(async ( e: MouseEvent<HTMLVideoElement> ) => {
        e.preventDefault()

        const call = isPlaying ? onPause : onPlay;
        await call(e)
    }, [ onPause, onPlay, isPlaying ])

    const onDoubleClick = useCallback(async ( e: MouseEvent<HTMLVideoElement | HTMLButtonElement> ) => {
        e.preventDefault()
        !isFullscreen
            ? await videoRef.current.requestFullscreen()
            : await document.exitFullscreen()

        setIsFullscreen(!isFullscreen)
        setIsPicInPic(false)
    }, [ isFullscreen ])

    const onKeyDown = useCallback(async ( e: KeyboardEvent<HTMLVideoElement> ) => {
        e.preventDefault()
        if (e.key === 'm') {
            videoRef.current.muted = !videoRef.current.muted
        }

        if (e.key === 'f') {
            !isFullscreen
                ? await videoRef.current.requestFullscreen()
                : await document.exitFullscreen()

            setIsFullscreen(!isFullscreen)
            setIsPicInPic(false)
        }

        if (e.key === 'p') {
            !isPicInPic
                ? await videoRef.current.requestPictureInPicture()
                : await document.exitPictureInPicture()

            setIsPicInPic(!isPicInPic)
            setIsFullscreen(false)
        }
    }, [ isFullscreen, isPicInPic ])

    const onEnded = useCallback(( e: SyntheticEvent<HTMLVideoElement> ) => {
        e.preventDefault()
        setIsPlaying(false)
    }, [])

    const onRateChange = useCallback(( e: MouseEvent<HTMLButtonElement> ) => {
        const currentRate = videoRef.current.playbackRate
        if (currentRate < 2) {
            videoRef.current.playbackRate += 0.5
        } else {
            videoRef.current.playbackRate = 1
        }
    }, [])

    return (
        <div className={ styles.videoContainer }>
            <div className={ styles.videoWrapper }>
                <video
                    ref={ videoRef }
                    src={ source }
                    controls={ true }
                    controlsList={ "nodownload" }
                    onContextMenu={ onContextMenu }
                    onClick={ onClick }
                    onDoubleClick={ onDoubleClick }
                    onKeyDown={ onKeyDown }
                    onEnded={ onEnded }
                />
            </div>

            <div className={ styles.controls }>
                <Box display={ "inline-flex" } gap={ 2 }>
                    <Button color={ "inherit" }>
                        Aula anterior
                    </Button>

                    <Button color={ "inherit" }>
                        Próxima aula
                    </Button>

                    <IconButton onClick={ isPlaying ? pauseVideo : playVideo }>
                        { isPlaying
                            ? (<FaPause/>)
                            : (<FaPlay/>) }
                    </IconButton>
                </Box>

                <Box display={ "inline-flex" }>
                    <IconButton onClick={ onRateChange }>
                        <FaForward/>
                    </IconButton>

                    <IconButton onClick={ onDoubleClick }>
                        <FaExpand/>
                    </IconButton>
                </Box>
            </div>
        </div>
    )
}