import React, { ReactNode } from "react"
import { MakeAuthProvider } from "./auth-provider";

type MainProviderProps = {
    children?: ReactNode
}

export const MainProvider = ( { children }: MainProviderProps ) => {
    return (
        <MakeAuthProvider>
            { children }
        </MakeAuthProvider>
    )
}