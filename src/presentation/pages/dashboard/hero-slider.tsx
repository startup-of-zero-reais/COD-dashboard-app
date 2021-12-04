import React, { MouseEvent, useCallback, useEffect, useState } from "react"
import styles from "./dashboard.module.scss";
import { IconButton } from "@mui/material";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import classNames from "classnames";
import { Link } from "react-router-dom";

const slides = [
    {
        imageURL: "https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        href: "/meus-cursos"
    },
    {
        imageURL: "https://images.unsplash.com/photo-1446822679794-fbd084d10491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        href: "/meus-cursos"
    },
    {
        imageURL: "https://images.unsplash.com/photo-1618642624018-a370cbf3cd80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        href: "/meus-cursos"
    }
]

export const HeroSlider = () => {
    const [ currentSlide, setCurrentSlide ] = useState(0)
    const [ paused, setIsPaused ] = useState(false)

    const pause = useCallback(( _: MouseEvent<HTMLDivElement> ) => {
        setIsPaused(true)
    }, [])

    const play = useCallback(( _: MouseEvent<HTMLDivElement> ) => {
        setIsPaused(false)
    }, [])

    const prevSlide = useCallback(() => {
        setCurrentSlide(
            currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1
        )
    }, [ currentSlide ])

    const nextSlide = useCallback(() => {
        setCurrentSlide(
            currentSlide + 1 < slides.length ? currentSlide + 1 : 0
        )
    }, [ currentSlide ])

    useEffect(() => {
        let interval = setInterval(() => {
            if (!paused) {
                if (currentSlide < slides.length - 1) {
                    setCurrentSlide(currentSlide + 1)
                } else {
                    setCurrentSlide(0)
                }
            }
        }, 7000)

        return () => {
            clearInterval(interval)
        }
    }, [ currentSlide, paused ])

    return (
        <div className={ styles.heroSlider }>
            <div className={ styles.sliderWrapper } onMouseEnter={ pause } onMouseLeave={ play }>
                <div className={ styles.controls }>
                    <IconButton onClick={ prevSlide } color={ "primary" }>
                        <FiArrowLeftCircle size={ 48 }/>
                    </IconButton>

                    <IconButton onClick={ nextSlide } color={ "primary" }>
                        <FiArrowRightCircle size={ 48 }/>
                    </IconButton>
                </div>

                <div className={ classNames(styles.slider, [ `slide-${ currentSlide }` ]) }>
                    { slides.map((slide => (
                        <Link to={ slide.href } className={ styles.heroImage }>
                            <img alt={ "" } src={ slide.imageURL }/>
                        </Link>
                    ))) }
                </div>
            </div>
        </div>
    )
}