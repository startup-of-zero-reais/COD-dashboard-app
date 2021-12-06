import React from "react"
import { Typography } from "@mui/material";
import { CoursesSlider } from "../../components";

type MyCoursesProps = {}

function randomize() {
    return (Math.random() * 1e8).toString(16).replace(/\./gi, '-')
}

const courses = [
    {
        title: 'Course title',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "/meus-cursos/" + randomize(),
    },
    {
        title: 'Course title',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "/meus-cursos/" + randomize(),
    }, {
        title: 'Course title',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "/meus-cursos/" + randomize(),
    }, {
        title: 'Course title',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "/meus-cursos/" + randomize(),
    }, {
        title: 'Course title',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "/meus-cursos/" + randomize(),
    },
]

export const MyCourses = ( _: MyCoursesProps ) => {

    return (
        <>
            <Typography variant={ "h4" } marginTop={ 4 }>
                Meus cursos
            </Typography>
            <CoursesSlider items={ courses }/>
        </>
    )
}