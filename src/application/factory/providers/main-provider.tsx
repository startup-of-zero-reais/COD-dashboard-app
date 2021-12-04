import React, { ReactNode } from "react"
import { ThemeProvider } from '@mui/material'
import { MakeAuthProvider } from "./auth-provider";
import { theme } from "../../../presentation/styles/theme";

type MainProviderProps = {
    children?: ReactNode
}

export const MainProvider = ( { children }: MainProviderProps ) => {
    return (
        <ThemeProvider theme={ theme }>
            <MakeAuthProvider>
                { children }
            </MakeAuthProvider>
        </ThemeProvider>
    )
}