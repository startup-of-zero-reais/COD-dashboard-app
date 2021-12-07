import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Lessons } from "../../../domain/lessons";
import { Typography } from "@mui/material";

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

    return (
        <>
            <Typography>
                { lesson.title }
            </Typography>
            { course_id } { '->' } { lesson_id }
        </>
    )
}