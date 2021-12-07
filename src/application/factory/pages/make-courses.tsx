import React, { useCallback } from "react"
import { Course, Courses } from "../../../presentation/pages";
import { PageLayout } from "../../../presentation/components";
import { makeLoadCoursesList, makeLoadModuleSections } from "../../../data/factories";

export const MakeCourses = () => {
    const loadCoursesList = useCallback(makeLoadCoursesList, [])

    return (
        <PageLayout>
            <Courses
                loadCoursesList={ loadCoursesList() }
            />
        </PageLayout>
    )
}

export const MakeCourse = () => {
    const loadModuleSections = useCallback(makeLoadModuleSections, [])

    return (
        <PageLayout>
            <Course loadModuleSections={ loadModuleSections() }/>
        </PageLayout>
    )
}