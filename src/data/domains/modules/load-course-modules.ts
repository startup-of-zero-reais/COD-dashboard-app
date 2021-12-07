import { Modules, modules_mock } from "../../../domain/modules";

export class LoadCourseModules implements Modules.LoadCourseModules {
    async load( course_id: string ): Promise<Modules.Module[]> {
        return Promise.resolve(modules_mock);
    }
}