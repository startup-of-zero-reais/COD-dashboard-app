import React, { ReactNode } from "react"
import { AuthProvider } from "../../../presentation/contexts/auth";

type MakeAuthProviderProps = { children?: ReactNode }

export const MakeAuthProvider = ( { children }: MakeAuthProviderProps ) => {
    return (
        <AuthProvider>
            { children }
        </AuthProvider>
    )
}