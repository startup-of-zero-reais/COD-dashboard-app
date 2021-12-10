import React from "react"
import { Box, Button, FormControlLabel, IconButton, Switch } from "@mui/material";
import styles from "./video-player.module.scss";
import { FaExpand, FaPause, FaPlay } from "react-icons/fa";
import { useVideoWrapper } from "./video-wrapper";

export const BottomControls = () => {
    const {
        isPlaying,
        autoPlay,
        playbackRate,
        pauseVideo,
        playVideo,
        setAutoplay,
        onRateChange,
        onDoubleClick,
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
            </Box>

            <Box display={ "inline-flex" } gap={ 2 }>
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