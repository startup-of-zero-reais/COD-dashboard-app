import React from "react"
import { Link } from "react-router-dom";
import { LinearProgress, Typography } from "@mui/material";
import styles from './dashboard.module.scss'

type ContinueSliderProps = {}

const modules = [
    {
        title: "Javascript",
        progress: 32,
        thumb: process.env.REACT_APP_HOST + "/javascript.jpg",
        href: "/meus-cursos/" + (Math.random() * 1e8).toString(16).replace(/\./gi, '-')
    },
    {
        title: "HTML 5 - estrutura semântica",
        progress: 95,
        thumb: process.env.REACT_APP_HOST + "/javascript.jpg",
        href: "/meus-cursos/" + (Math.random() * 1e8).toString(16).replace(/\./gi, '-')
    },
    {
        title: "CSS3 - Pseudo seletores",
        progress: 75,
        thumb: process.env.REACT_APP_HOST + "/javascript.jpg",
        href: "/meus-cursos/" + (Math.random() * 1e8).toString(16).replace(/\./gi, '-')
    },
    {
        title: "Javascript",
        progress: 32,
        thumb: process.env.REACT_APP_HOST + "/javascript.jpg",
        href: "/meus-cursos/" + (Math.random() * 1e8).toString(16).replace(/\./gi, '-')
    },
    {
        title: "HTML 5 - estrutura semântica",
        progress: 95,
        thumb: process.env.REACT_APP_HOST + "/javascript.jpg",
        href: "/meus-cursos/" + (Math.random() * 1e8).toString(16).replace(/\./gi, '-')
    },
    {
        title: "CSS3 - Pseudo seletores",
        progress: 75,
        thumb: process.env.REACT_APP_HOST + "/javascript.jpg",
        href: "/meus-cursos/" + (Math.random() * 1e8).toString(16).replace(/\./gi, '-')
    }
]

export const ContinueSlider = ( _: ContinueSliderProps ) => {
    return (
        <div className={ styles.continueSliderWrapper }>
            <Typography variant={ "h5" }>Em progresso</Typography>
            <div className={ styles.continueSlider }>
                { modules.map(module => (
                    <Link to={ module.href }>
                        <div className={ styles.module }>
                            <div className={ styles.info }>
                                <span>{ module.title }</span>
                                <img
                                    src={ module.thumb }
                                    alt={ module.title }
                                />
                            </div>

                            <div className={ styles.progress }>
                                { module.progress }%
                                <LinearProgress
                                    value={ module.progress }
                                    variant={ "determinate" }
                                    color={ "secondary" }
                                />
                            </div>
                        </div>
                    </Link>
                )) }
            </div>
        </div>
    )
}