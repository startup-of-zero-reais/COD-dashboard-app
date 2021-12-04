import React, { useEffect } from "react"
import { useLocation } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { CircularProgress, Typography } from "@mui/material";

type ValidateLoginProps = {}

export const ValidateLogin = ( _: ValidateLoginProps ) => {
    const { search } = useLocation()
    const token = extractToken(search)

    if (!token) {
        window.location.href = process.env.REACT_APP_LOGIN_URL || 'http://localhost:3000'
    }

    const { signIn } = useAuth()

    useEffect(() => {
        signIn(token)
            .then(console.warn)
    }, [ signIn, token ])

    return (
        <>
            <CircularProgress/>
            <Typography>
                Verificando credenciais
            </Typography>
        </>
    )
}

function extractToken( search: string ) {
    return search.replace(/^\?token=/gi, '')
}