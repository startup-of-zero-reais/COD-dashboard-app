import React, { ReactNode } from "react"
import { useAuth } from "../contexts/auth";
import { Navigate } from "react-router-dom";

type AuthRequiredProps = { children?: ReactNode }

export const AuthRequired = ( { children }: AuthRequiredProps ) => {
    const { user } = useAuth();

    if (!user.id) {
        return <Navigate to={ "/validate-login" } replace/>
    }

    return <>{ children }</>
}