import React from "react"
import { useParams } from "react-router-dom";

type CourseProps = {}

export const Course = ( _: CourseProps ) => {
    const { course_id } = useParams<'course_id'>()

    return (
        <>
            Course { course_id }
        </>
    )
}