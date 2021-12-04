import React from "react"
import { Button } from "@mui/material";
import { useAuth } from "../contexts/auth";

type DashboardProps = {}

export const Dashboard = ( _: DashboardProps ) => {
    const { signOut } = useAuth()

    return (
        <>
            Dashboard{ ' ' }
            <Button variant={ "contained" } color={ "secondary" } onClick={ signOut }>
                Sair
            </Button>
        </>
    )
}