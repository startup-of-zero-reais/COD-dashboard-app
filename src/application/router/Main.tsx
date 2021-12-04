import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Make404, MakeDashboard, MakeValidationLogin } from "../factory/pages";
import { MainProvider } from "../factory/providers/main-provider";
import { MakeLayout } from "../factory/routes/MakeLayout";

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <MainProvider>
                <Routes>
                    <Route path={ "/" } element={ <MakeLayout/> }>
                        <Route index element={ <MakeDashboard/> }/>
                        <Route path={ "*" } element={ <Make404/> }/>
                    </Route>

                    <Route path={ "/validate-login" } element={ <MakeValidationLogin/> }/>
                </Routes>
            </MainProvider>
        </BrowserRouter>
    )
}