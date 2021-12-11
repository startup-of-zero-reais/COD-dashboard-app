import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Lessons } from "../../../domain/lessons";
import { Typography } from "@mui/material";
import styles from './lesson.module.scss'
import { LoadingCircle, VideoPlayer } from "../../components";
import { NextLessonsSlider } from "./next-lessons-slider";

type LessonProps = {
    loadLesson: Lessons.LoadLesson
    loadNextLessons: Lessons.LoadNextLessons
}

export const Lesson = ( { loadLesson, loadNextLessons }: LessonProps ) => {
    const { lesson_id } = useParams<'course_id' | 'lesson_id'>()

    const [ lesson, setLesson ] = useState<Lessons.Lesson>({} as Lessons.Lesson)
    const [ nextLessons, setNextLessons ] = useState<Lessons.Lesson[]>([])

    useEffect(() => {
        if (lesson_id)
            loadLesson.load(lesson_id)
                .then(setLesson)

        if (lesson_id)
            loadNextLessons.load(lesson_id)
                .then(setNextLessons)
    }, [ lesson_id, loadLesson, loadNextLessons ])

    if (!lesson.lesson_id) {
        return <LoadingCircle label={ "Carregando aula..." }/>
    }

    return (
        <div className={ styles.lessonWrapper }>
            <Typography variant={ "h4" }>
                { lesson.section.title }
            </Typography>

            <div className={ styles.videoWrapper }>
                <Typography variant={ "h5" }>
                    { lesson.title }
                </Typography>

                <VideoPlayer source={ lesson.video_source } artifacts={ lesson.artifacts }/>
            </div>

            <div>
                <Typography variant={ "h5" }>
                    Próximas aulas
                </Typography>
            </div>

            <div>
                <NextLessonsSlider lessons={ nextLessons }/>
            </div>
        </div>
    )
}