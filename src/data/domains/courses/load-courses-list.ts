import { Courses, coursesMock } from "./index";

export class LoadCoursesList implements Courses.LoadList {
    async load(): Promise<Courses.Course[]> {
        return Promise.resolve(coursesMock)
    }
}