import React, {
    createContext,
    KeyboardEvent,
    MouseEvent,
    SyntheticEvent,
    useCallback,
    useContext,
    useRef,
    useState
} from "react"
import { useStorage } from "../../hooks/use-storage";
import { VideoContextProps, VideoPlayerProps } from "./typings";

const VideoContext = createContext({} as VideoContextProps)

export const VideoWrapper = ( { children, onEndAction }: VideoPlayerProps ) => {
    const videoRef = useRef<HTMLVideoElement>({} as HTMLVideoElement)
    const [ buffer, setBuffer ] = useState(0)
    const [ time, setTime ] = useState(0)
    const [ volume, setVolume ] = useState(100)
    const [ playbackRate, setPlaybackRate ] = useState(1)
    const [ autoPlay, setAutoplay ] = useStorage('auto-play', false)

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

    const onEnded = useCallback(async ( e: SyntheticEvent<HTMLVideoElement> ) => {
        e.preventDefault()
        setIsPlaying(false)

        await onEndAction?.();
    }, [ onEndAction ])

    const onRateChange = useCallback(() => {
        const currentRate = videoRef.current.playbackRate
        let rate = 1
        if (currentRate === 1) {
            rate = 1.25
        } else if (currentRate === 1.25) {
            rate = 1.5
        } else if (currentRate === 1.5) {
            rate = 2
        }

        videoRef.current.playbackRate = rate
        setPlaybackRate(rate)
    }, [])

    const updateTime = useCallback(() => {
        const length = videoRef.current.buffered.length - 1

        setBuffer(videoRef.current.buffered?.end(length))
        setTime(videoRef.current.currentTime)
    }, [])

    const calcDuration = useCallback(( currentTime: number, duration: number ): string => {
        const getString = ( time: number ) => {
            const minutes = Math.floor(time / 60) || 0
            const seconds = Math.floor(time % 60) || 0

            return `${ minutes.toString() }:${ seconds.toString().padStart(2, '0') }`
        }

        return `${ getString(currentTime) } / ${ getString(duration) }`
    }, [])

    const onSeekProgressbar = useCallback(( _, value ) => {
        videoRef.current.currentTime = value as number
    }, [])

    const onSeekVolume = useCallback(( value ) => {
        videoRef.current.volume = value;
        setVolume(value * 100)
    }, [])

    const volumeChange = useCallback(() => {
        setVolume(videoRef.current.volume * 100)
    }, [])

    const exitFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            setIsFullscreen(false)
        }
    }, [])

    const passTime = useCallback(( dir: 'backward' | 'forward' ) => () => {
        let passTimeSeconds = 30

        if (dir === 'backward')
            passTimeSeconds *= -1

        videoRef.current.currentTime += passTimeSeconds
    }, [])

    return (
        <VideoContext.Provider value={ {
            // PROPS
            videoRef,
            buffer,
            time,
            volume,
            playbackRate,
            autoPlay,
            isPlaying,
            isFullscreen,
            isPicInPic,
            // METHODS
            setAutoplay,
            playVideo,
            pauseVideo,
            onContextMenu,
            onPause,
            onPlay,
            onClick,
            onDoubleClick,
            onKeyDown,
            onEnded,
            onRateChange,
            updateTime,
            calcDuration,
            onSeekProgressbar,
            onSeekVolume,
            volumeChange,
            exitFullscreen,
            backwardTime: passTime('backward'),
            forwardTime: passTime('forward')
        } }>
            { children }
        </VideoContext.Provider>
    )
}

export function useVideoWrapper() {
    return useContext(VideoContext)
}