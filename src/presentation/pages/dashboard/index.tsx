import React, { useEffect, useState } from "react"
import { HeroSlider } from "./hero-slider";
import { ContinueSlider } from "./continue-slider";
import { MyCourses } from "./my-courses";
import { PageLayout } from "../../components";
import { Courses as CoursesDomain } from "../../../data/domains";

type DashboardProps = {
    loadCourseList: CoursesDomain.LoadList
}

export const Dashboard = ( { loadCourseList }: DashboardProps ) => {
    const [ coursesList, setCoursesList ] = useState<CoursesDomain.Course[]>([])

    useEffect(() => {
        loadCourseList.load()
            .then(setCoursesList)
    }, [ loadCourseList ])

    return (
        <PageLayout>
            <HeroSlider/>
            <ContinueSlider/>
            <MyCourses courses={ coursesList }/>
        </PageLayout>
    )
}