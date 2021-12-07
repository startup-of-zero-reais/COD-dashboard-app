import React, { useEffect, useState } from "react"
import { HeroSlider } from "./hero-slider";
import { ContinueSlider } from "./continue-slider";
import { PageLayout, SimpleSlider } from "../../components";
import { Courses as CoursesDomain } from "../../../domain/courses";

type DashboardProps = {
    loadCourseList: CoursesDomain.LoadList
}

export const Dashboard = ( { loadCourseList }: DashboardProps ) => {
    const [ courses, setCourses ] = useState<CoursesDomain.Course[]>([])

    useEffect(() => {
        loadCourseList.load()
            .then(setCourses)
    }, [ loadCourseList ])

    return (
        <PageLayout>
            <HeroSlider/>
            <ContinueSlider/>
            <SimpleSlider label={ "Meus cursos" } items={ courses }/>
        </PageLayout>
    )
}