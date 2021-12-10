import { randomize } from "../../utils";

export namespace Lessons {
    export type Lesson = {
        lesson_id: string;
        section_id: string;
        video_source: string;
        duration_total: number;
        artifacts?: any[];
        href: string;
        thumb: string;
        title: string;
        section: {
            title: string;
        }
        created_at: string;
        updated_at: string;
    }

    export interface LoadLesson {
        load( lesson_id: string ): Promise<Lesson>
    }

    export interface LoadNextLessons {
        load( current_lesson_id: string ): Promise<Lesson[]>
    }
}

const lesson_course_mock = {
    title: "HTML5 - Estrutura semântica"
}

export const mock_lessons: Lessons.Lesson[] = [
    {
        lesson_id: randomize(),
        section_id: randomize(),
        video_source: process.env.REACT_APP_HOST + "/" + encodeURIComponent("Codes - 23354") + ".mp4",
        artifacts: [],
        href: "1",
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        title: "Entendendo html",
        section: lesson_course_mock,
        duration_total: 150,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        lesson_id: randomize(),
        section_id: randomize(),
        video_source: process.env.REACT_APP_HOST + "/" + encodeURIComponent("Sheep - 57647") + ".mp4",
        artifacts: [],
        href: "2",
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        title: "Estruturando as caixas",
        section: lesson_course_mock,
        duration_total: 150,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        lesson_id: randomize(),
        section_id: randomize(),
        video_source: process.env.REACT_APP_HOST + "/" + encodeURIComponent("Sound - 3955") + ".mp4",
        artifacts: [],
        href: "3",
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        title: "Cores nas caixas",
        section: lesson_course_mock,
        duration_total: 150,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        lesson_id: randomize(),
        section_id: randomize(),
        video_source: process.env.REACT_APP_HOST + "/" + encodeURIComponent("Codes - 23354") + ".mp4",
        artifacts: [],
        href: "4",
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        title: "Caixas dentro de caixas",
        section: lesson_course_mock,
        duration_total: 150,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        lesson_id: randomize(),
        section_id: randomize(),
        video_source: process.env.REACT_APP_HOST + "/" + encodeURIComponent("Sheep - 57647") + ".mp4",
        artifacts: [],
        href: "5",
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        title: "Caixas dentro de caixas",
        section: lesson_course_mock,
        duration_total: 150,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        lesson_id: randomize(),
        section_id: randomize(),
        video_source: process.env.REACT_APP_HOST + "/" + encodeURIComponent("Sound - 3955") + ".mp4",
        artifacts: [],
        href: "6",
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        title: "Caixas dentro de caixas",
        section: lesson_course_mock,
        duration_total: 150,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
]