import React from "react"
import { PageLayout } from "../../components/page-layout";
import { HeroSlider } from "./hero-slider";
import { ContinueSlider } from "./continue-slider";
import { MyCourses } from "./my-courses";

type DashboardProps = {}

export const Dashboard = ( _: DashboardProps ) => {

    return (
        <PageLayout>
            <HeroSlider/>
            <ContinueSlider/>
            <MyCourses/>
        </PageLayout>
    )
}