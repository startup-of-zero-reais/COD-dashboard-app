import { randomize } from "../../utils";
import { Sections, sections_mock } from "../sections";

export namespace Modules {
    export type Module = {
        module_id: string;
        course_id: string;
        title: string;
        thumb: string;
        href: string;
        sections: Sections.Section[];
        sections_orders: string[];
        created_at: string;
        updated_at: string;
    }

    export interface LoadCourseModules {
        load( course_id: string ): Promise<Module[]>
    }

    export interface LoadModulesSection {
        load( module_id: string ): Promise<Sections.Section[]>
    }
}

export const modules_mock: Modules.Module[] = [
    {
        module_id: randomize(),
        course_id: randomize(),
        title: 'Primeiros passos com web',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "1",
        sections: sections_mock,
        sections_orders: [],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        module_id: randomize(),
        course_id: randomize(),
        title: 'Fundamentos de programação',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "2",
        sections: sections_mock,
        sections_orders: [],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        module_id: randomize(),
        course_id: randomize(),
        title: 'Algoritmos',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "3",
        sections: sections_mock,
        sections_orders: [],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        module_id: randomize(),
        course_id: randomize(),
        title: 'Desenvolvimento web avançado',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "4",
        sections: sections_mock,
        sections_orders: [],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        module_id: randomize(),
        course_id: randomize(),
        title: 'DevOps - Operações de infraestrutura',
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        href: "5",
        sections: sections_mock,
        sections_orders: [],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    }
]