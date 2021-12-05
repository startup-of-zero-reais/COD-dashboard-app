import React, { RefObject, useCallback, useRef } from "react"
import { IconButton, Typography } from "@mui/material";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from './dashboard.module.scss'

type MyCoursesProps = {}

function randomize() {
    return (Math.random() * 1e8).toString(16).replace(/\./gi, '-')
}

const courses = [
    {
        title: 'Course title',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "/meus-cursos/" + randomize(),
    },
    {
        title: 'Course title',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "/meus-cursos/" + randomize(),
    }, {
        title: 'Course title',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "/meus-cursos/" + randomize(),
    }, {
        title: 'Course title',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "/meus-cursos/" + randomize(),
    }, {
        title: 'Course title',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "/meus-cursos/" + randomize(),
    },
]

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

export const MyCourses = ( _: MyCoursesProps ) => {
    const currentScroll = useRef(0)
    const coursesScrollRef = useRef<HTMLDivElement>(null)

    const scroll = useCallback(( left = false ) => () => {
        if (coursesScrollRef.current) {
            const scrollWidth = maxScroll(coursesScrollRef)
            const dir = left ? -296 : 296
            currentScroll.current = snapTo(0, scrollWidth, currentScroll.current + dir)

            coursesScrollRef.current.scrollTo({
                left: currentScroll.current,
                behavior: "smooth"
            })
        }
    }, [])

    return (
        <>
            <Typography variant={ "h4" } marginTop={ 4 }>
                Meus cursos
            </Typography>
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
                        { courses.map(course => (
                            <Link to={ course.href }>
                                <div className={ styles.singleCourse }>
                                    <img
                                        alt={ course.title }
                                        src={ course.thumb }
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