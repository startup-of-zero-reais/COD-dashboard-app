import React, { useCallback } from "react"
import { AuthRequired } from "../../../presentation/components";
import { Dashboard } from "../../../presentation/pages";
import { makeLoadCoursesList } from "../../../data/factories";

export const MakeDashboard = () => {
    const loadCoursesList = useCallback(makeLoadCoursesList, [])

    return (
        <AuthRequired>
            <Dashboard loadCourseList={ loadCoursesList() }/>
        </AuthRequired>
    )
}