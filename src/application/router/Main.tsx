import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Make404, MakeCourse, MakeCourses, MakeDashboard, MakeValidationLogin } from "../factory/pages";
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
                        <Route path={ "/meus-cursos" }>
                            <Route index element={ <MakeCourses/> }/>
                            <Route path={ ":course_id" } element={ <MakeCourse/> }/>
                        </Route>
                    </Route>

                    <Route path={ "/validate-login" } element={ <MakeValidationLogin/> }/>
                </Routes>
            </MainProvider>
        </BrowserRouter>
    )
}