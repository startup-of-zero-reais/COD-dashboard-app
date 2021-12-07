import { Modules, modules_mock } from "../modules";

export namespace Courses {
    export type Course = {
        title: string;
        thumb: string;
        href: string;
        modules: Modules.Module[]
    }

    export interface LoadList {
        load(): Promise<Courses.Course[]>
    }
}

export const coursesMock: Courses.Course[] = [
    {
        title: 'Primeiros passos com web',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "/meus-cursos/" + 1,
        modules: modules_mock
    },
    {
        title: 'Fundamentos de programação',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "/meus-cursos/" + 2,
        modules: modules_mock
    }, {
        title: 'Algoritmos',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "/meus-cursos/" + 3,
        modules: modules_mock
    }, {
        title: 'Desenvolvimento web avançado',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "/meus-cursos/" + 4,
        modules: modules_mock
    }, {
        title: 'DevOps - Operações de infraestrutura',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "/meus-cursos/" + 5,
        modules: modules_mock
    },
]