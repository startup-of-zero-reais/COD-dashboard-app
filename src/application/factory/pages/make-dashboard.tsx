import React from "react"
import { AuthRequired } from "../../../presentation/components/auth-required";
import { Dashboard } from "../../../presentation/pages";

export const MakeDashboard = () => {
    return (
        <AuthRequired>
            <Dashboard/>
        </AuthRequired>
    )
}