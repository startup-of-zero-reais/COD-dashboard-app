import React, { RefObject, useCallback, useRef } from "react"
import { IconButton } from "@mui/material";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./simple-slider.module.scss";

export type Item = {
    title: string;
    href: string;
    thumb: string;
}

type SimpleSliderProps = {
    items: Item[]
}

export const SimpleSlider = ( { items }: SimpleSliderProps ) => {
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
        <div className={ styles.myCourses }>
            <div className={ styles.controls }>
                <IconButton color={ "primary" } onClick={ scroll(true) }>
                    <FiChevronLeft/>
                </IconButton>

                <IconButton color={ "primary" } onClick={ scroll() }>
                    <FiChevronRight/>
                </IconButton>
            </div>

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
    )
}

function snapTo( min: number, max: number, value: number ): number {
    return value < min ? min : value > max ? max : value;
}

function maxScroll( wrapper: RefObject<HTMLDivElement> ): number {
    if (wrapper.current) {
        const childWidth = wrapper.current.children[0].clientWidth
        const currentWidth = wrapper.current.clientWidth

        return (childWidth - currentWidth)
    }
    return 0
}

function itemWidth( wrapper: RefObject<HTMLDivElement> ): number {
    return ((wrapper.current?.children[0].children[0].clientWidth || 0) + 16) // 16 = 1 rem
}