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
        created_at: string;
        updated_at: string;
    }
}

export const mock_lessons: Lessons.Lesson[] = [
    {
        lesson_id: randomize(),
        section_id: randomize(),
        video_source: process.env.REACT_APP_HOST + "/" + encodeURIComponent("Codes - 23354") + ".mp4",
        artifacts: [],
        href: "http://lesson.link/" + randomize(),
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        title: "Entendendo html",
        duration_total: 150,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        lesson_id: randomize(),
        section_id: randomize(),
        video_source: process.env.REACT_APP_HOST + "/" + encodeURIComponent("Sheep - 57647") + ".mp4",
        artifacts: [],
        href: "http://lesson.link/" + randomize(),
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        title: "Estruturando as caixas",
        duration_total: 150,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        lesson_id: randomize(),
        section_id: randomize(),
        video_source: process.env.REACT_APP_HOST + "/" + encodeURIComponent("Codes - 23354") + ".mp4",
        artifacts: [],
        href: "http://lesson.link/" + randomize(),
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        title: "Cores nas caixas",
        duration_total: 150,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        lesson_id: randomize(),
        section_id: randomize(),
        video_source: process.env.REACT_APP_HOST + "/" + encodeURIComponent("Sheep - 57647") + ".mp4",
        artifacts: [],
        href: "http://lesson.link/" + randomize(),
        thumb: process.env.REACT_APP_HOST + "/aws.jpg",
        title: "Caixas dentro de caixas",
        duration_total: 150,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },

]