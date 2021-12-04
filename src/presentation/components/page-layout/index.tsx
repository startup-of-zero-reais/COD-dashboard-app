import React, { ReactNode } from "react"
import { Fade } from "@mui/material";

type PageLayoutProps = {
    children?: ReactNode
}

export const PageLayout = ( { children }: PageLayoutProps ) => {
    return (
        <Fade in={ true }>
            <main>
                { children }
            </main>
        </Fade>
    )
}