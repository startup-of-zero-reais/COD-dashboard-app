import React from "react"
import { useTheme } from '@mui/material/styles'
import { Slider } from "@mui/material";

type ProgressBarProps = {
    time: number;
    duration: number;
    max: number;
    onChange: ( e: Event, value: number | number[], activeThumb: number ) => void
    play: () => void;
    pause: () => void;
}

export const ProgressBar = (
    {
        time,
        duration,
        max = duration,
        onChange,
        pause,
        play,
    }: ProgressBarProps
) => {
    const theme = useTheme()

    return (
        <Slider
            size={ "small" }
            value={ time }
            color={ "secondary" }
            min={ 0 }
            step={ 1 }
            max={ max }
            onChange={ onChange }
            onMouseDown={ pause }
            onMouseUp={ play }
            onTouchStart={ pause }
            onTouchEnd={ play }
            sx={ {
                color: theme.palette.mode === 'dark' ? '#fff' : '#00000099',
                height: 4,
                '& .MuiSlider-thumb': {
                    width: 8,
                    height: 8,
                    transition: '300ms cubic-bezier(.47, 1.64, .41, .8)',
                    '&:before': {
                        boxShadow: '0 2px 12px 0 #00000050'
                    },
                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: `0 0 0 8px ${
                            theme.palette.mode === "dark"
                                ? 'rgb(255 255 255 / 16%)'
                                : 'rgb(0 0 0 / 16%)'
                        }`,
                    },
                    '&.Mui-active': {
                        width: 20,
                        height: 20
                    }
                },
                '& .MuiSlider-rail': {
                    opacity: 0.28
                }
            } }
        />
    )
}