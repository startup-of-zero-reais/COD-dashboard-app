import React, { ReactNode } from "react"

type MakeDashboardProps = { children?: ReactNode }

export const MakeDashboard = ( { children }: MakeDashboardProps ) => {
    return (
        <>
            { children }
        </>
    )
}