import React, { KeyboardEvent, MouseEvent, SyntheticEvent, useCallback, useEffect, useRef, useState } from "react"
import { Box, Button, IconButton, LinearProgress } from "@mui/material";
import { FaExpand, FaForward, FaPause, FaPlay } from "react-icons/fa";
import styles from './video-player.module.scss'

type VideoPlayerProps = {
    source: string;
}

export const VideoPlayer = ( { source }: VideoPlayerProps ) => {
    const videoRef = useRef<HTMLVideoElement>({} as HTMLVideoElement)
    const [ buffer, setBuffer ] = useState(0)
    const [ time, setTime ] = useState(0)

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

    const percent = useCallback(( toPercentTime: number ) => {
        const fullPercent = videoRef.current.duration

        return toPercentTime / fullPercent * 100
    }, [])

    const updateTime = useCallback(() => {
        const length = videoRef.current.buffered.length - 1

        setBuffer(percent(videoRef.current.buffered?.end(length)))
        setTime(percent(videoRef.current.currentTime))
    }, [ percent ])

    const calcDuration = useCallback(( currentTime: number, duration: number ): string => {
        const getString = ( time: number ) => {
            const minutes = Math.floor(time / 60)
            const seconds = Math.round(time % 60)

            return `${ minutes.toString() }:${ seconds.toString().padStart(2, '0') }`
        }

        return `${ getString(currentTime) } / ${ getString(duration) }`
    }, [])

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.onload = updateTime
            videoRef.current.ontimeupdate = updateTime
        }
    }, [ updateTime ])

    return (
        <div className={ styles.videoContainer }>
            <div className={ styles.videoWrapper }>
                <video
                    ref={ videoRef }
                    src={ source }
                    controls={ false }
                    controlsList={ "nodownload" }
                    onContextMenu={ onContextMenu }
                    onClick={ onClick }
                    onDoubleClick={ onDoubleClick }
                    onKeyDown={ onKeyDown }
                    onEnded={ onEnded }
                />

                <div>
                    <IconButton onClick={ isPlaying ? pauseVideo : playVideo }>
                        { isPlaying
                            ? (<FaPause/>)
                            : (<FaPlay/>) }
                    </IconButton>

                    <LinearProgress
                        variant={ "buffer" }
                        value={ time }
                        valueBuffer={ buffer }
                        color={ "inherit" }
                    />

                    <div>
                        { calcDuration(videoRef.current?.currentTime, videoRef.current?.duration) }
                    </div>
                </div>
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