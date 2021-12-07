import { LoadCourseModules } from "../domains";
import { LoadModuleSections } from "../domains/modules/load-module-sections";

export function makeLoadCourseModules() {
    return new LoadCourseModules()
}

export function makeLoadModuleSections() {
    return new LoadModuleSections()
}