import React from "react"
import { Typography } from "@mui/material";
import { PageLayout } from "../../../presentation/components";

export const Make404 = () => {
    return (
        <PageLayout>
            <Typography variant={ "h4" }>Oops! 404</Typography>
            <Typography>
                A página que você está procurando não existe ou não está pronta! :)
            </Typography>
        </PageLayout>
    )
}