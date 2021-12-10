import React, { useCallback } from "react"
import { FiVolume1, FiVolume2, FiVolumeX } from "react-icons/fi";
import { IconButton, Slider } from "@mui/material";
import classNames from "classnames";
import styles from './video-player.module.scss';
import { useTheme } from "@mui/material/styles";

type VolumeControlProps = {
    volume?: number;
    onChange: ( value: number ) => void
}

export const VolumeControl = ( { volume = 100, onChange }: VolumeControlProps ) => {
    const theme = useTheme()

    const onToggleMute = useCallback(() => {
        if (volume === 0) {
            onChange(1)
            return;
        }

        onChange(0)
    }, [ onChange, volume ])

    const onChangeWithParseValue = useCallback(( _, value ) => {
        onChange(value / 100)
    }, [ onChange ])

    return (
        <div className={ classNames(styles.volumeControl) }>
            <IconButton onClick={ onToggleMute }>
                <VolumeIcon volume={ volume }/>
            </IconButton>

            <div className={ classNames(styles.volumeSlider) }>
                <Slider
                    size={ 'small' }
                    value={ volume }
                    orientation={ "vertical" }
                    min={ 0 }
                    max={ 100 }
                    step={ 1 }
                    onChange={ onChangeWithParseValue }
                    sx={ {
                        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                        height: 150,
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
            </div>
        </div>
    )
}

const VolumeIcon = ( { volume }: { volume: number } ) => {
    if (between(0, 1, volume)) {
        return <FiVolumeX/>
    }

    if (between(1, 50, volume)) {
        return <FiVolume1/>
    }

    return <FiVolume2/>
}

function between( start: number, end: number, value: number ): boolean {
    return value < end && value >= start;
}