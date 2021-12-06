import React from "react"
import { Course, Courses } from "../../../presentation/pages";
import { PageLayout } from "../../../presentation/components";

export const MakeCourses = () => {
    return (
        <PageLayout>
            <Courses/>
        </PageLayout>
    )
}

export const MakeCourse = () => {
    return <Course/>
}