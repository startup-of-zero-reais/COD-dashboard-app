import React from "react"
import classNames from "classnames";
import styles from "./video-player.module.scss";
import { IconButton } from "@mui/material";
import { FaPause, FaPlay } from "react-icons/fa";
import { ProgressBar } from "./progress-bar";
import { VolumeControl } from "./volume-control";
import { useVideoWrapper } from "./video-wrapper";

export const InnerVideoControls = () => {
    const {
        isPlaying,
        time,
        videoRef,
        volume,
        pauseVideo,
        playVideo,
        onSeekProgressbar,
        onSeekVolume,
        calcDuration
    } = useVideoWrapper()

    return (
        <div className={ classNames(styles.innerControls) }>
            <IconButton onClick={ isPlaying ? pauseVideo : playVideo }>
                { isPlaying
                    ? (<FaPause/>)
                    : (<FaPlay/>) }
            </IconButton>

            <ProgressBar
                time={ time }
                duration={ videoRef.current.duration }
                max={ videoRef.current.duration }
                onChange={ onSeekProgressbar }
                play={ playVideo }
                pause={ pauseVideo }
            />

            <div>
                <VolumeControl volume={ volume } onChange={ onSeekVolume }/>
            </div>

            <div>
                { calcDuration(videoRef.current?.currentTime, videoRef.current?.duration) }
            </div>
        </div>
    )
}