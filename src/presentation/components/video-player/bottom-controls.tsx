import React from "react"
import { Box, Button, FormControlLabel, IconButton, Switch, Typography } from "@mui/material";
import styles from "./video-player.module.scss";
import { FaExpand, FaPause, FaPlay } from "react-icons/fa";
import { useVideoWrapper } from "./video-wrapper";
import { GiBackwardTime } from "react-icons/all";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

export const BottomControls = () => {
    const {
        volume,
        isPlaying,
        autoPlay,
        playbackRate,
        pauseVideo,
        playVideo,
        setAutoplay,
        onRateChange,
        onDoubleClick,
        toggleMute,
        backwardTime,
        forwardTime,
    } = useVideoWrapper()
    return (
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

                <Button
                    onClick={ backwardTime }
                    color={ "inherit" }
                >
                    <Typography>-30s</Typography>
                    <GiBackwardTime size={ 24 }/>
                </Button>

                <Button
                    onClick={ forwardTime }
                    color={ "inherit" }
                    sx={ { transform: 'rotateY(180deg)' } }
                >
                    <Typography sx={ { transform: 'rotateY(180deg)' } }>+30s</Typography>
                    <GiBackwardTime size={ 24 }/>
                </Button>
            </Box>

            <Box display={ "inline-flex" } gap={ 2 }>
                <IconButton onClick={ toggleMute }>
                    { volume > 0 ? <FiVolume2/> : <FiVolumeX/> }
                </IconButton>

                <FormControlLabel
                    control={
                        <Switch
                            color={ "info" }
                            checked={ autoPlay }
                            onChange={ () => setAutoplay(!autoPlay) }
                        />
                    }
                    label={ "Autoplay" }
                />

                <Button onClick={ onRateChange } color={ "inherit" } variant={ "outlined" } size={ "small" }>
                    <PlaybackValue playbackRate={ playbackRate }/>
                </Button>

                <IconButton onClick={ onDoubleClick }>
                    <FaExpand/>
                </IconButton>
            </Box>
        </div>
    )
}

const PlaybackValue = ( { playbackRate = 1 }: { playbackRate: number } ) => {
    return <>{ playbackRate.toFixed(2).toString() } x</>
}