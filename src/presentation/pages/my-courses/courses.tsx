import React, { useEffect, useState } from "react"
import { SimpleSlider } from "../../components";
import { Courses as CoursesDomain } from "../../../data/domains";

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
            <SimpleSlider label={ "HTML 5" } items={ coursesList }/>
        </div>
    )
}