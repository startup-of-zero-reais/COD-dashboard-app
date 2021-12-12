import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    Make404,
    MakeCourse,
    MakeCourses,
    MakeDashboard,
    MakeLesson,
    MakeProfile,
    MakeValidationLogin
} from "../factory/pages";
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
                            <Route path={ ":course_id" }>
                                <Route index element={ <MakeCourse/> }/>
                                <Route path={ ":lesson_id" } element={ <MakeLesson/> }/>
                            </Route>
                        </Route>
                        <Route path={ "/perfil" }>
                            <Route index element={ <MakeProfile/> }/>
                        </Route>
                    </Route>

                    <Route path={ "/validate-login" } element={ <MakeValidationLogin/> }/>
                </Routes>
            </MainProvider>
        </BrowserRouter>
    )
}