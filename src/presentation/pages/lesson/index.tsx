import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Lessons } from "../../../domain/lessons";
import { Typography } from "@mui/material";
import styles from './lesson.module.scss'
import { LoadingCircle, VideoPlayer } from "../../components";

type LessonProps = {
    loadLesson: Lessons.LoadLesson
}

export const Lesson = ( { loadLesson }: LessonProps ) => {
    const { course_id, lesson_id } = useParams<'course_id' | 'lesson_id'>()

    const [ lesson, setLesson ] = useState<Lessons.Lesson>({} as Lessons.Lesson)

    useEffect(() => {
        if (lesson_id)
            loadLesson.load(lesson_id)
                .then(setLesson)
    }, [ lesson_id, loadLesson ])

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

                <VideoPlayer source={ lesson.video_source }/>
            </div>

            <div>
                <Typography variant={ "h5" }>
                    Próximas aulas
                </Typography>
            </div>
        </div>
    )
}