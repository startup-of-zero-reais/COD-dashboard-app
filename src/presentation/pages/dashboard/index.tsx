import React from "react"
import { Typography } from "@mui/material";
import { PageLayout } from "../../components/page-layout";
import { HeroSlider } from "./hero-slider";
import { ContinueSlider } from "./continue-slider";

type DashboardProps = {}

export const Dashboard = ( _: DashboardProps ) => {

    return (
        <PageLayout>
            <HeroSlider/>
            <ContinueSlider/>

            <Typography variant={ "h4" }>
                Dashboard
            </Typography>
        </PageLayout>
    )
}