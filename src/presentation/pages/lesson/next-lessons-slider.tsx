import React, { useCallback, useRef } from "react"
import { Link, useParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import classNames from "classnames";
import { Lessons } from "../../../domain/lessons";
import { itemWidth, maxScroll, snapTo } from "../../../utils";
import styles from './lesson.module.scss'

type NextLessonsSliderProps = {
    lessons: Lessons.Lesson[]
}

type GenerateLink = ( href: string ) => string

export const NextLessonsSlider = ( { lessons }: NextLessonsSliderProps ) => {
    const { course_id } = useParams<'course_id'>()
    const currentScroll = useRef(0)
    const lessonsRef = useRef<HTMLDivElement | null>(null)

    const generateLink = useCallback(( href: string ) => `/meus-cursos/${ course_id }/${ href }`, [ course_id ])

    const scroll = useCallback(( left = false ) => () => {
        if (lessonsRef.current) {
            const scrollWidth = maxScroll(lessonsRef)
            const dir = left ? -itemWidth(lessonsRef) : itemWidth(lessonsRef)
            currentScroll.current = snapTo(0, scrollWidth, currentScroll.current + dir)

            lessonsRef.current?.scrollTo({
                left: currentScroll.current,
                behavior: 'smooth'
            })
        }
    }, [])

    return (
        <div className={ classNames(styles.nextLessonWrapper) }>
            <div className={ classNames(styles.controls) }>
                <IconButton onClick={ scroll(true) }>
                    <FiChevronLeft/>
                </IconButton>

                <IconButton onClick={ scroll() }>
                    <FiChevronRight/>
                </IconButton>
            </div>

            <div className={ classNames(styles.lessonsWrapper) } ref={ lessonsRef }>
                <div className={ classNames(styles.lessonsScroller) }>
                    { [ ...lessons, ...lessons ].map(Lesson(generateLink)) }
                </div>
            </div>
        </div>
    )
}

const Lesson = ( generateLink: GenerateLink ) => ( lesson: Lessons.Lesson ) => {
    return (
        <Link to={ generateLink(lesson.href) }>
            <div className={ classNames(styles.lesson) }>
                <img src={ lesson.thumb } alt={ lesson.title }/>

                <span>
                    { lesson.title }<br/>
                    <small>
                        { lesson.section.title }
                    </small>
                </span>
            </div>
        </Link>
    )
}