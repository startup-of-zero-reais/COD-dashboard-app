import React, { useEffect } from "react"
import styles from './video-player.module.scss'
import { useVideoWrapper, VideoWrapper } from "./video-wrapper";
import { VideoPlayerProps } from "./typings";
import { InnerVideoControls } from "./inner-video-controls";
import { BottomControls } from "./bottom-controls";

export const VideoPlayer = ( props: VideoPlayerProps ) => {
    return (
        <VideoWrapper { ...props }>
            <Video source={ props.source }/>
        </VideoWrapper>
    )
}

export const Video = ( { source }: VideoPlayerProps ) => {
    const {
        videoRef,
        updateTime,
        volumeChange,
        exitFullscreen,
        onContextMenu,
        onClick,
        onDoubleClick,
        onKeyDown,
        onEnded,
        autoPlay,
    } = useVideoWrapper()

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.onload = updateTime
            videoRef.current.ontimeupdate = updateTime
            videoRef.current.onvolumechange = volumeChange
            videoRef.current.onfullscreenchange = exitFullscreen
        }
    }, [ exitFullscreen, updateTime, videoRef, volumeChange ])

    return (
        <div className={ styles.videoContainer }>
            <div className={ styles.videoWrapper }>
                <video
                    ref={ videoRef }
                    controls={ false }
                    controlsList={ "nodownload" }
                    onContextMenu={ onContextMenu }
                    onClick={ onClick }
                    onDoubleClick={ onDoubleClick }
                    onKeyDown={ onKeyDown }
                    onEnded={ onEnded }
                    autoPlay={ autoPlay }
                >
                    <source src={ source }/>
                </video>

                <InnerVideoControls/>
            </div>

            <BottomControls/>
        </div>
    )
}
