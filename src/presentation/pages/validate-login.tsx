import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { Box, CircularProgress, Grow, Typography } from "@mui/material";

type ValidateLoginProps = {}

export const ValidateLogin = ( _: ValidateLoginProps ) => {
    const navigate = useNavigate()
    const { search } = useLocation()
    const token = extractToken(search)

    const { signIn } = useAuth()

    useEffect(() => {
        if (!token) {
            window.location.href = process.env.REACT_APP_LOGIN_URL || 'http://localhost:3000'
            return;
        }

        (async () => {
            await signIn(token)
        })()
    }, [ navigate, signIn, token ])

    return (
        <Grow in={ true }>
            <Box
                display={ "flex" }
                margin={ "auto" }
                alignItems={ "center" }
                justifyContent={ "center" }
                gap={ 2 }
                minHeight={ "100vh" }
            >
                <CircularProgress color={ "secondary" }/>
                <Typography>
                    Validando credenciais, aguarde...
                </Typography>
            </Box>
        </Grow>
    )
}

function extractToken( search: string ) {
    return search.replace(/^\?token=/gi, '')
}