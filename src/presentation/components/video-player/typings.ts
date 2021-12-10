import { KeyboardEvent, MouseEvent, MutableRefObject, ReactNode, SyntheticEvent } from "react";

export type VideoPlayerProps = {
    source: string;
    onEndAction?: () => Promise<void> | void;
    children?: ReactNode
}

export type VideoContextProps = {
    // PROPS
    videoRef: MutableRefObject<HTMLVideoElement>;
    buffer: number;
    time: number;
    volume: number;
    playbackRate: number;
    autoPlay: boolean;
    isPlaying: boolean;
    isFullscreen: boolean;
    isPicInPic: boolean;
    // METHODS
    playVideo: () => void;
    pauseVideo: () => void;
    onContextMenu: ( e: MouseEvent<HTMLVideoElement> ) => void;
    onPause: ( e: MouseEvent<HTMLVideoElement> ) => void;
    onPlay: ( e: MouseEvent<HTMLVideoElement> ) => void;
    onClick: ( e: MouseEvent<HTMLVideoElement> ) => void;
    onDoubleClick: ( e: MouseEvent<HTMLVideoElement | HTMLButtonElement> ) => void;
    onKeyDown: ( e: KeyboardEvent<HTMLVideoElement> ) => void;
    onEnded: ( e: SyntheticEvent<HTMLVideoElement> ) => void;
    onRateChange: () => void;
    updateTime: () => void;
    calcDuration: ( currentTime: number, duration: number ) => string;
    onSeekProgressbar: ( _: unknown, value: number | number[] ) => void;
    onSeekVolume: ( value: number ) => void;
    volumeChange: () => void;
    exitFullscreen: () => void;
    setAutoplay: ( newValue: boolean | null ) => void
}