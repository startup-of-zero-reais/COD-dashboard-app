import { Lessons, mock_lessons } from "../lessons";
import { randomize } from "../../utils";

export namespace Sections {
    export type Section = {
        section_id: string,
        module_id: string,
        label: string,
        lessons: Lessons.Lesson[]
    }
}

export const sections_mock: Sections.Section[] = [
    {
        module_id: randomize(),
        section_id: randomize(),
        label: "HTML5 - Estrutura semântica",
        lessons: mock_lessons
    },
    {
        module_id: randomize(),
        section_id: randomize(),
        label: "CSS3 - estilos",
        lessons: mock_lessons
    },
    {
        module_id: randomize(),
        section_id: randomize(),
        label: "CSS3 - Seletores simples",
        lessons: mock_lessons
    },
    {
        module_id: randomize(),
        section_id: randomize(),
        label: "CSS3 - Seletores avançados",
        lessons: mock_lessons
    }
]