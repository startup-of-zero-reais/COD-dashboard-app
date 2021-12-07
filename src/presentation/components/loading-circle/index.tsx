import React from "react"
import { Box, CircularProgress, Typography } from "@mui/material";

type LoadingCircleProps = {
    label: string;
}

export const LoadingCircle = ( { label }: LoadingCircleProps ) => {
    return (
        <Box
            display={ "flex" }
            alignItems={ "center" }
            justifyContent={ "center" }
            minHeight={ "100%" }
            gap={ 2 }
        >
            <CircularProgress color={ "secondary" }/>
            <Typography>
                { label }
            </Typography>
        </Box>
    )
}