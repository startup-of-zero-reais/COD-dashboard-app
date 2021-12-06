import React from "react"
import { SimpleSlider } from "../../components";

function randomize() {
    return (Math.random() * 1e8).toString(16).replace(/\./gi, '-')
}

const coursesMock = [
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

export const Courses = () => {
    return (
        <div>
            <SimpleSlider items={ coursesMock }/>
        </div>
    )
}