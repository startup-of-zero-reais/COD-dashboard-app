import React from "react"
import { Typography } from "@mui/material";
import { SimpleSlider } from "../../components";
import { Courses as CoursesDomain } from "../../../data/domains";

type MyCoursesProps = {
    courses: CoursesDomain.Course[]
}
export const MyCourses = ( { courses }: MyCoursesProps ) => {

    return (
        <>
            <Typography variant={ "h4" } marginTop={ 4 }>
                Meus cursos
            </Typography>
            <SimpleSlider items={ courses }/>
        </>
    )
}