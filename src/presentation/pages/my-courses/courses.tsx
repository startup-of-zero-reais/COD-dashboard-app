import React, { useEffect, useState } from "react"
import { SimpleSlider } from "../../components";
import { Courses as CoursesDomain } from "../../../domain/courses";

type CoursesProps = {
    loadCoursesList: CoursesDomain.LoadList
}

export const Courses = ( { loadCoursesList }: CoursesProps ) => {
    const [ coursesList, setCoursesList ] = useState<CoursesDomain.Course[]>([])

    useEffect(() => {
        loadCoursesList.load()
            .then(setCoursesList)
    }, [ loadCoursesList ])

    return (
        <div>
            { coursesList.map(course => (
                <SimpleSlider label={ course.title } items={ course.modules }/>
            )) }
        </div>
    )
}