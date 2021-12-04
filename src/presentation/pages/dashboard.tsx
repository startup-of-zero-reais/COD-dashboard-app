import React from "react"
import { Typography } from "@mui/material";
import { PageLayout } from "../components/page-layout";

type DashboardProps = {}

export const Dashboard = ( _: DashboardProps ) => {

    return (
        <PageLayout>
            <Typography variant={ "h4" }>
                Dashboard
            </Typography>
        </PageLayout>
    )
}