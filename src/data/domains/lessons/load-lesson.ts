import { Lessons, mock_lessons } from "../../../domain/lessons";

export class LoadLesson implements Lessons.LoadLesson {
    async load( lesson_id: string ): Promise<Lessons.Lesson> {
        const numLessons = mock_lessons.length - 1
        const randIndex = Math.round(Math.random() * numLessons)

        return Promise.resolve(mock_lessons[randIndex]);
    }
}