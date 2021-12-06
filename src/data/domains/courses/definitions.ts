import { randomize } from "../../../utils";

export namespace Courses {
    export type Course = {
        title: string;
        thumb: string;
        href: string
    }

    export interface LoadList {
        load(): Promise<Courses.Course[]>
    }
}

export const coursesMock: Courses.Course[] = [
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