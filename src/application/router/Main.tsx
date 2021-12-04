import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MakeValidationLogin } from "../factory/pages";
import { MainProvider } from "../factory/providers/main-provider";
import { MakeDashboard } from "../factory/pages/make-dashboard";

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <MainProvider>
                <Routes>
                    <Route path={ "/" } element={ <MakeDashboard/> }/>
                    <Route path={ "/validate-login" } element={ <MakeValidationLogin/> }/>
                </Routes>
            </MainProvider>
        </BrowserRouter>
    )
}