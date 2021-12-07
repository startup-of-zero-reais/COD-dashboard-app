import { Courses, coursesMock } from "../../../domain/courses";

export class LoadCoursesList implements Courses.LoadList {
    async load(): Promise<Courses.Course[]> {
        return Promise.resolve(coursesMock)
    }
}