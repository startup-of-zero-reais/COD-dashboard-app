import React, { useCallback, useRef } from "react"
import { IconButton, Typography } from "@mui/material";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./simple-slider.module.scss";
import { itemWidth, maxScroll, RenderIf, snapTo } from "../../../utils";

export type Item = {
    title: string;
    href: string;
    thumb: string;
}

type SimpleSliderProps = {
    items: Item[]
    withControls?: boolean
    label?: string
}

export const SimpleSlider = ( { items, withControls = false, label }: SimpleSliderProps ) => {
    const currentScroll = useRef(0)
    const coursesScrollRef = useRef<HTMLDivElement>(null)

    const scroll = useCallback(( left = false ) => () => {
        if (coursesScrollRef.current) {
            const scrollWidth = maxScroll(coursesScrollRef)
            const dir = left ? -itemWidth(coursesScrollRef) : itemWidth(coursesScrollRef)
            currentScroll.current = snapTo(0, scrollWidth, currentScroll.current + dir)

            coursesScrollRef.current.scrollTo({
                left: currentScroll.current,
                behavior: "smooth"
            })
        }
    }, [])

    return (
        <>
            { RenderIf(!!label, (
                <Typography variant={ "h4" }>
                    { label }
                </Typography>
            )) }
            <div className={ styles.myCourses }>
                { RenderIf(withControls, (
                    <div className={ styles.controls }>
                        <IconButton color={ "primary" } onClick={ scroll(true) }>
                            <FiChevronLeft/>
                        </IconButton>

                        <IconButton color={ "primary" } onClick={ scroll() }>
                            <FiChevronRight/>
                        </IconButton>
                    </div>
                )) }

                <div className={ styles.coursesWrapper } ref={ coursesScrollRef }>
                    <div className={ styles.coursesScroller }>
                        { items.map(item => (
                            <Link key={ item.href } to={ item.href }>
                                <div className={ styles.singleCourse }>
                                    <img
                                        alt={ item.title }
                                        src={ item.thumb }
                                    />
                                </div>
                            </Link>
                        )) }
                    </div>
                </div>
            </div>
        </>
    )
}

