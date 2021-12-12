import React from "react"
import { Typography } from "@mui/material";
import { PageLayout } from "../../components";

type MyBoughtProps = {}

export const MyBought = ( _: MyBoughtProps ) => {
    return (
        <PageLayout>
            <Typography variant={ 'h5' }>Minhas compras</Typography>
        </PageLayout>
    )
}