import { Lessons, mock_lessons } from '../../../domain/lessons'

export class LoadNextLessons implements Lessons.LoadNextLessons {
    async load( current_lesson_id: string ): Promise<Lessons.Lesson[]> {
        return mock_lessons
    }
}